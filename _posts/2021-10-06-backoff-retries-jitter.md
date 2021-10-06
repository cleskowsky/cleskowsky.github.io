---
layout: post
title:  "Timeouts, retries with backoff, jitter"
---

A really great article in the AWS builders library about making service to service messaging more reliable with tradeoffs!

First ask is this request retry-able? The work must be idempotent!

## Timeouts

* Without thoughtful timeouts, clients can wait for long periods of time tying up limited server resources (eg Request threads of which there are often vanishlingly few) for a response that might not come back (It’s hard to tell the difference between slow, and down)
* He talks about setting a reasonable timeout using percentiles. The 99.9th for eg. Forces developers to ask the question, how many false positive timeouts is ok so that we can set a timeout that is reasonable for an endpoint

## Retries

* Selfish. It says your request is worth tying up resources for repeatedly until it succeeds 
* Have to be careful here 
  * Did a request fail because of load? If yes, retrying might prolong a bad situation 
  * Did it fail with a client error? (4xx) Don’t retry because it will never succeed 
  * Is it a part of a larger batch of work that becomes a thundering herd retrying in lockstop with eachother prolonging a bad situation 
* Retrying is a keystone of resilience. But there are dragons 
* Exponential backoff can help a struggling service recover by having clients wait longer between retries when they find out a service is struggling 
  * Some talk of circuit breakers but it didn’t sound particularly favourable. Adds a different mode in the system that makes testing more challenging 
* Think about max retries + error reporting 
* Jitter can help quite a bit. Not just for retries but also with the initial arrival of work. Add a tiny bit of random delay (+/-) in the arrival rate can smooth over excessive load

## Other good concerns

* Retries between layers amplify. eg Controller > svc > data access | external apicall > … If each layer adds 3 retries, the work may stay in the system and be responsible for dozens or even hundreds of calls. Something to keep in mind

## Resources

* [Amazon Builder's Library](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/?did=ba_card&trk=ba_card)
