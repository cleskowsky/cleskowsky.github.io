---
layout: page
title: TIL
permalink: /til/
---

Today I Learned!

[ansible](#ansible), [aws](#aws), [bash](#bash), [frontend](#frontend), [java](#java), [linux](#linux), [macos](#macos), [mongodb](#mongodb), [ngrok](#ngrok), [nodejs](#nodejs), [postfix](#postfix), [perf](#perf), [python](#python), [resilience](#resilience), [ssh](#ssh), [strace](#strace), [subversion](#subversion), [tailwindcss](#tailwindcss), [yum](#yum)

# Services I have helped run in the past

* [Sending email](/2021/09/30/sending-email.html)
  * Email is delightful :)

# Ansible

* `ansible-playbook -i "localhost" playbook-nagios.yml --list-tasks`: Lists plays that will be run by ansible
* `ansible hostgroup -i inv -m shell -a "command"`: Execute task <command> across all hosts in group hostgroup in inventory inv

# AWS

* `aws sts get-caller-identity`: Gets the apiuser for my current apikey

# Bash

**Beautiful bash**

* [gradlew](https://github.com/open-telemetry/opentelemetry-java-instrumentation/blob/main/gradlew)
* [locust run-redistributed-headless.sh](https://github.com/locustio/locust/blob/master/scripts/run-disributed-headless.sh) This one has a nice capture of process ids in an array with looping
* [Github checks ssh key encryption algorithm in use](https://github.com/github/ssh-key-algo/blob/main/ssh-key-algo)

**More links**

* [Documented bash ‘set’ shell modifiers](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html) (eg What does set -e mean?)
* [Best practices for writing bash](https://kvz.io/bash-best-practices.html)
* [Anybody can write good bash](https://blog.yossarian.net/2020/01/23/Anybody-can-write-good-bash-with-a-little-effort)

{% highlight bash %}
#!/usr/bin/env bash

# Fail when:
#   Attempting to use a var that hasn't been set
#   A command fails
#   A command in a pipeline fails
set -o nounset
set -o errexit
set -o pipefail

# Default values for env variables
VERBOSE=${VERBOSE:-0}

# Prefer env vars to args
VERBOSE=0 deploy.sh

# Parse args
while getopts "hp:i:" opt ; do
    case ${opt} in
        h)
            kube::test::usage
            exit 0
            ;;
        p)
            PARALLEL="${OPTARG}"
            if ! isnum "${PARALLEL}" || [[ "${PARALLEL}" -le 0 ]]; then
                kube::log::usage "'$0': argument to -p must be numeric and greater than 0"
                kube::test::usage
                exit 1
            fi
        ;;
        i)
            kube::log::usage "'$0': use GOFLAGS='-count <num-iterations>'"
            kube::test::usage
            exit 1
        ;;
        :)
            kube::log::usage "Option -${OPTARG} <value>"
            kube::test::usage
            exit 1
        ;;
        ?)
            kube::test::usage
            exit 1
            ;;
    esac
done
{% endhighlight %}

# Frontend

* [html5boilerplate](https://html5boilerplate.com/) a reasonable starting point for frontend projects. Pretty much everything you could ever be worried about is here 🙂 [This is similar but much simpler](https://www.matuzo.at/blog/html-boilerplate/)
* [Vue instance lifecycle events](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
* [Setting up Vue computed properties for unit tests with vue-test-utils](https://stackoverflow.com/questions/50437699/setting-up-vue-computed-properties-for-unit-tests-with-vue-test-utils) In the past, I have had to override a computed value to create specific test context

# Java

* [Db migrations in java](https://flywaydb.org/): Incredibly Spring data doesn’t have a story for db migrations out of the box (It seems to have everything else!)
* [Elasticsearch's guidance for setting java's heap size](https://www.elastic.co/guide/en/elasticsearch/reference/current/advanced-configuration.html#set-jvm-heap-size): 50% of main memory available in a system is a recommendation I've read in a couple of places now

## Performance analysis

**CPU**

{% highlight bash %}
# If cpu usage is high, dumping threads in the jvm may help
# identify what work is being done. Taking multiple dumps
# at 10s intervals will help spot threads that have been running,
# or been blocked for a long time.
#
# If a problem is lots of threads running for a short amount
# of time, a 10s interval may not show that readily. (I should
# look into java flame graphs for java!)
#
# Intellij can help analyze thread dumps. Look for the analyze
# thread dump action.
jstack <pid>

# A stronger version
sudo jstack -F <pid>
{% endhighlight %}

Links
* [netflix: java flame graphs](https://netflixtechblog.com/java-in-flames-e763b3d32166)

**Memory**

{% highlight bash %}
# Look at garbage collection stats in the jvm
sudo jstat -gcutil -h10 1002 250 20
S0     S1     E      O      M     CCS    YGC     YGCT    FGC    FGCT     GCT
0.00   0.00 100.00 100.00  93.19  90.39    276   36.911 10510 53321.125 53358.036
0.00   0.00 100.00 100.00  93.19  90.39    276   36.911 10510 53321.125 53358.036
0.00   0.00 100.00 100.00  93.19  90.39    276   36.911 10510 53321.125 53358.036
...

S0 - surviver space 1 utilization
S1 - surviver space 1 utilization
E - Eden space utilization
O - Old gen space utilization
M - ?
CCS - ?
YGC - # of young garbage collections
YGCT - young gc time (units?)
FGC - full garbage collections
FGCT - full garbage collection time
GCT - garbage collection time

Collect 20 samples, from java process with pid 1002, at 250ms intervals,
and reprint the header every 10 lines of output

No header line
sudo jstat -gcutil <pid> 250 7
{% endhighlight %}

**JConsole**

A program that ships with the jdk that lets you introspect a running java process. (You can see exposed jmx beans, heap memory, threads, and a few other things) I usually use it to look at jmx beans

{% highlight bash %}
# Figure out the pid of your java process doing something like this or pidof ...
ps aux | grep java

# The run
jconsole

# JConsole will display a list of java processes it finds on your system. Pick the one you want!
{% endhighlight %}

Note: I have only ever done this in dev

**SDK Man**

Install and run with several jdk versions (And other tools I think)

Links
* [SDKMan!](https://sdkman.io/)

**Cacerts, trust store, root certs**

{% highlight bash %}
# View trusted root certs in centos
keytool -list -keystore /etc/pki/ca-trust/extracted/java/cacerts -storepass changeit

# View an ssl cert from a remote host
openssl s_client -showcerts -connect telusemrapi.telushealth.com:443

# View a particular cert in my trust store
# Get alias from the cert list command above
keytool -list -v -keystore /etc/pki/ca-trust/extracted/java/cacerts -alias digicertassuredidrootca -storepass changeit
{% endhighlight %}

**Links**

* [How root / intermediate certs work, and how they’re protected](https://security.stackexchange.com/questions/119460/do-i-put-my-subordinate-intermediate-or-root-ca-certificate-in-my-truststore)
* [A list of tutorials from Baeldung.com. This is a really good resource!](https://www.baeldung.com/java-tutorial)
* [Testing in Java](https://phauer.com/2019/modern-best-practices-testing-java/)
* [Java logging](https://www.loggly.com/ultimate-guide/java-logging-basics/): sl4j, apache commons logging, log4j, java.util.logging … All the logs! Nice overview of logging in java with increasing degrees of complexity depending on need

# Linux

* `zip -er a.zip a/`: Creates an encrypted zipfile of contents with folders from a/
* `dd if=/dev/zero of=a.txt bs=1024 count=10240`: Create a 10m “empty” file for testing (10k chunks, at 1024 bytes per chunk)
* `pstree -s tomcat`: Show processes containing tomcat in their commandline (brew install pstree)
* `split -l 50 filename`: Splits file into 50 line chunks names xaa, xab, xac, ...
* `mkfs.xfs /dev/sdc`: Make an xfs filesystem

# MacOS

* `cmd + shift + .` Reveals hidden files in a finder window. eg ~/.sdkman/
* `cmd + .` Is a special key combo for the physical escape key on the iPad magic keyboard

# MongoDB

{% highlight bash %}
# Takes a logical backup
mongodump --archive=a.gz --gzip --db <dbname>

# Restores a logical db backup
mongorestore --archive=a.gz --gzip

# List engine type (default should be WiredTiger since 3.2+)
db.serverStatus().storageEngine
db.serverStatus() # is kinda interesting in general

# a few basic commands that give me a sense of a mongod server
show dbs
use <db>
show collections
db.collection.find({})
db.collection.insertOne({
    "a": 1
})

# Export all or part of a collection as CSV
mongoexport --db <db> --collection <coll> --type=csv --query "{ x: value, y: value }" --fields "<field1>,<field2>,..." -u<user>

# Get status of replicaset member in startup2 state (Newly added to a replicaset and not fully synced)
# Version dependent
# [Source](https://docs.mongodb.com/manual/reference/command/replSetGetStatus/)
# Mongodb for v3.4 -> v4.2
db.adminCommand( { replSetGetStatus: 1, initialSync: 1 } )

# Add an element to an array on an existing doc
# Use the $push operator :)
db.collection.update({ filter criteria }, { $push: arrayName: 'new item' } })
{% endhighlight %}

Links

* [Update arrays in a document](https://docs.mongodb.com/drivers/node/fundamentals/crud/write-operations/embedded-arrays/): Modify an array in a document using $ and $[] notation
* [Design Patterns for MongoDB](https://towardsdatascience.com/design-patterns-for-mongodb-894767315905)

**Connection Strings**

{% highlight bash %}
# DNS seed list (Mongodb > 3.6)
# We can setup a srv record that contains many or all hosts in a mongodb
# replica set
mongodb+srv://db.cluster.env/dbname
# This will pull a list of ips,ports from that srv record and connect to
# one host. After successfully connecting to the replicaset it will ask the
# rs for further hosts
#
# There are options that can be passed along with this (standard ones) and
# this mode can also lookup a corresponding TXT record to get the replicaset
# name + authdb

# Standard connection string
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
# You can explicitly list all members of a replica set using this method
# I believe the driver only needs to find one replica set member and then
# can discover others and even follow mongo elections
{% endhighlight %}

Links

* [Connection strings](https://docs.mongodb.com/v3.6/reference/connection-string/)
* [Blog post about Mongo 3.6 and dns seeding](https://www.mongodb.com/developer/article/srv-connection-strings/)
* [Another blog post about service discovery](https://www.mongodb.com/blog/post/server-discovery-and-monitoring-next-generation-mongodb-drivers): This one is particularly good. Walks you through a connection lifecycle in pyMongo. (I’m assuming a recent java driver is similar) There’s a formal service discovery protocol it sounds like
* [db.isMaster()](https://docs.mongodb.com/manual/reference/command/hello/): The query drivers send to the mongo host they’re configured with to learn about the topology of a mongo cluster

# Ngrok

* [ngrok](https://ngrok.com/): A tool to create a public tunnel to a tcp service running on localhost

# Postfix

* [My random notes about sending email on the internet!](/2021/09/30/sending-email.html)

## Various helpful commands

{% highlight bash %}
# Re-enqueue messages held back for a few days (Resets their timestamp
# for remaining in delivery queues)
postsuper -r [<QUEUEID>|ALL]

# Generates a report about messages in postfix queues, by email domain
# and time spent in queue (works for other postfix queues too!)
qshape deferred

# Get me a list of messages currently in the active queue (and possibly
# other queues eg hold)
mailq
{% endhighlight %}

_Email entering postfix queues_
![Inbound email](/assets/images/postfix_queues_1.png)

_Email leaving postfix_
![Outbound email](/assets/images/postfix_queues_2.png)

## A few more links about postfix :)

* [Postfix architecture (input handlers, queues, output handlers)](http://www.postfix.org/OVERVIEW.html): Fairly important for understanding how postfix works
* [SPF records](https://postmarkapp.com/guides/spf): Qualifiers, mechanisms, oh my! This is a way to validate the FROM address of a message. That the sender (ip) is permitted to send email on behalf of the domain in from:. Works with dns
* [Basic postfix config](http://www.postfix.org/BASIC_CONFIGURATION_README.html): Good high level guidance for setting up postfix for specific use cases
* [Extend postfix smtpd input filtering with custom code](http://www.postfix.org/SMTPD_POLICY_README.html): We were looking for a way to show backpressure to clients based on health of active and deferred queues (Don’t accept new messages addressed to email service providers we are currently having delivery trouble with. eg A large number of delayed messages). This may be a way to do that
* [On destination rate delays](http://postfix.1071664.n5.nabble.com/Rate-limiting-td75185.html): If you are relaying directly to email service providers, the rate means 1 per domain. If indirect on the other hand, domain == ‘smtp nexthop’. If you only have one of these – ie you’re sending messages to an internal smtp server that relays through another before external delivery – domain in this case is NOT the recipient address domain. It is the relay server. If you only have 1 of these, then email will go out 1 at a time at the defined period

Reverse DNS (ptr) records

> Mail servers will cross-check your SMTP server’s advertised HELO hostname against the PTR record for the connecting IP address, and then check that the returned name has an address record matching the connecting IP address. If any of these checks fail, then your outgoing mail may be rejected or marked as spam.
>
> So, you need to set all three consistently: The server’s hostname and the name in the PTR record must match, and that name must resolve to the same IP address.
>
> Note that these do not have to be the same as the domain names for which you are sending mail, and it’s common that they are not.
>
> [Reverse dns records (ptr)](https://serverfault.com/questions/815054/reverse-dns-setup-for-an-ip-with-multiple-domains): A discussion of how they’re used. The first comment is the most helpful (Included here for posterity :))

# Perf

*First 60 seconds: What to look at first when diagnosing a performance issue on a linux vm**

{% highlight bash %}
# load averages
uptime

# kernel messages can be helpful sometimes
dmesg | tail

# rolling process, memory stats
vmstat 1

# rolling cpu states on multicore systems
mpstat -P ALL 1

# rolling ps aux (only shows non-idle processes)
pidstat 1

# rolling disk performance metrics
iostat -xz 1

# available memory, used, swap
free -m

# network visibility
sar -n DEV 1
sar -n TCP,ETCP 1

# running processes in a system
top
{% endhighlight %}
[Source](https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55)

**And other helpful commands**

* `pidstat 2 [n]`: Samples process resource utilization like top at 2s intervals (n times if specified)

# Python

* `python3 -m http.server 8000`: Runs an http server in the current dir

# Resilience

* [Timeouts, retries and backoff with jitter](/2021/10/06/backoff-retries-jitter.html)

# SSH

{% highlight bash %}
# Generate a private key in pem format
openssl genrsa -out key.pem 2048
# Then do this if I need a public key too
openssl rsa -in key.pem -outform PEM -pubout -out public.pem

# Generate a public/private key in rsa format (Can be used with github + SSH)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Github recommends creating a key with the ed25519 algorithm
ssh-keygen -t ed25519 -C "your_email@example.com"
{% endhighlight %}

~/.ssh/config

{% highlight bash %}
# ControlMaster
#
# Reuse connections when re-connecting to a host with an already established
# one. (Note: The directory ~/.ssh/sockets must already exist.)
Host *
    ControlMaster auto
    ControlPath ~/.ssh/sockets/%r@%h-%p
    ControlPersist 600
{% endhighlight %}

# Strace

{% highlight bash %}
strace
-e trace=open,pread64 Trace only open and pread64
-p <pid> The process id to attach to. Optional
-s 2000 Event line length to print
-f Strace should follow subprocesses
[command] Strace will run this command and begin a trace
{% endhighlight %}

![Comic page 1](/assets/images/2022/strace_1.jpeg)
![Comic page 2](/assets/images/2022/strace_2.jpeg)

# Subversion

{% highlight bash %}
# Cherry pick a changeset from the specified branch in the repo
svn merge -c x ^/operations

# Show the most recent commit
svn log -l 1
{% endhighlight %}

* Convention at cog
    * For a merge commit message, start with "Merged from <branch>"
    * Add a re #<ticket number>

# Tailwindcss

{% highlight bash %}
# Quick and dirty launch tailwind cli (using springboot here)
# Note: This is not appropriate for inclusion in a build script (Use postcss or some such for that)
npx tailwindcss -i ./src/main/resources/static/css/site.css -o ./target/classes/static/css/site.css --watch
{% endhighlight %}

# Yum

{% highlight bash %}
# list installed packages
yum list installed

# list package updates
yum check-update

# list package updates (security only)
yum check-update --security

# apply updates
yum update

# apply security updates
yum update --security

# get info about a package
yum info python3
{% endhighlight %}

# NodeJS

* npx serve - Runs a tiny webserver in the current directory. Very handy!
* npm install -g npx - Installs npx assuming you have npm :)
