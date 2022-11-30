---
layout: page
title: Performance
permalink: /performance/
---

# Performance Mantras

Found these in System Performance by Brendan Gregg. I'm writing them out for easier reference and as a way to further burn them into my mind. Order is from most impactful to least.

1. Don't do it. (Eliminate unnecessary work)
2. Do it, but don't do it again. (Cache it)
3. Do it less. (Tune refreshes, polling, etc)
4. Do it later. (eg Put a task on the job queue)
5. Do it when they're not looking. (Schedule work to run overnight)
6. Do it concurrently. (Use threads)
7. Do it more cheaply. (Scale your server up)

# First 60 seconds: What to look at first when diagnosing a performance issue on a linux vm**

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
