---
layout: page
title: Today I Learned
permalink: /til/
---

[ansible](#ansible), [bash](#bash), [frontend](#frontend), [java](#java), [linux](#linux), [mongodb](#mongodb), [postfix](#postfix), [perf](#perf), [python](#python), [ssh](#ssh), [yum](#yum)

# Ansible

* `ansible-playbook -i "localhost" playbook-nagios.yml --list-tasks`: Lists plays that will be run by ansible

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

# Linux

* `zip -er a.zip a/`: Creates an encrypted zipfile of contents with folders from a/
* `dd if=/dev/zero of=a.txt bs=1024 count=10240`: Create a 10m “empty” file for testing (10k chunks, at 1024 bytes per chunk)
* `pstree -s tomcat`: Show processes containing tomcat in their commandline (brew install pstree)

# MacOS

* `cmd + shift + .` Reveals hidden files in a finder window. eg ~/.sdkman/

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

# Postfix

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

**First 60 seconds: What to look at first when diagnosing a performance issue on a linux vm**

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
