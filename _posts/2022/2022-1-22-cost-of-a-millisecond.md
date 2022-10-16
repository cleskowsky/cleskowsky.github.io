---
layout: post
title: "Notes: What's the cost of a millisecond?"
---

[Source](https://www.youtube.com/watch?v=JgrcaK0WQCQ)

Excellent talk by Avishai Ish-Shalom from ScyllaDB. (Usenix)

* Read about queuing theory
* Waiting can happen anywhere there's a queue
* Microservice type architectures have queues everywhere (much more so than simpler systems)
* Queuing amplifies latency
* Unbounded queues are really bad. The person at the end of a really long line is going to have a bad day. It's better to ask them to try again later if a system is overloaded. Load shedding and admission control!
* Latency vs utilization. There's an exponential relationship between latency and system utilization when a system is under heavy load
* Different requests to a system will very in resources required to process (eg file upload + virus scan vs a simple entity get that only has to fetch data from 1 table to generate a response)
* We like to think about requests being isolated things that proceed through the system without interfering with or being bothered by other tasks. They aren't. Queues are shared, the db is shared, the app server a handler is running on is shared, etc
* Talks about ways to reduce latency
  * Timeouts (can be adaptive based on local knowledge of health of the system)
  * Parallel execution: send the request twice and take the fastest reply. This doubles load in the system though! Be careful!

His slides were amazing. I'm including a few snaps:

![slide 1](/assets/images/cost_of_a_millisecond_1.png)
![slide 2](/assets/images/cost_of_a_millisecond_2.png)
![slide 3](/assets/images/cost_of_a_millisecond_3.png)
![slide 4](/assets/images/cost_of_a_millisecond_4.png)
![slide 5](/assets/images/cost_of_a_millisecond_5.png)