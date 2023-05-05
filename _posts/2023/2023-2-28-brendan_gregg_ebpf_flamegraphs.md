---
layout: post
title: "Recent talk by Brendan Gregg about flamegraphs, profiling, ebpf"
---

[source](https://www.youtube.com/watch?v=HKQR7wVapgk)

# Notes

* Cpu sampling every 10ms
* 49hz - Doesn't want lockstep sampling (Thread wakes up every 50ms, 100ms to do something normally sometimes which skews sampled data. Put in a little jitter. 49hz, 51hz, 99hz, etc)
* Really good description of flame graphs
* X axis is not time! :)
* Widths are proportional to presence in stack traces
* Height is related to frame ancestry. functions above are called by functions below.
* "Which performance issues matter? it's about finding the big things"
* Stack walking isn't always present in linux distributions or programming environments (eg java)
