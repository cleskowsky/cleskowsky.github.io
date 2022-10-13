---
layout: post
title:  "Monitoring"
---

# Logs
Logs can be a tremendously valuable source of information about how a system is running and whether individual users are experiencing pain

- [Stripe canonical log lines](https://stripe.com/blog/canonical-log-lines)

Arbitrarily wide events, written in a machine readable way are quickly becoming the norm as they can be much easier to analyze and contain rich information

[ts] [ip] messages keya=valuea keyb=valueb keyc=valuec

Emerging pattern: 1 log event per service per request, densely packed with information is super valuable

A tool like elasticsearch is probably the way to go in terms of short term storage and analysis for most people. (Logs like this can get really big in terms of compute processing and storage costs so retention in a searchable way will often be limited to 1 – 4 weeks depending on system size)

Long term storage to s3

You probably only want to keep around the last 7-14d in a searchable index to support incident response type use cases

# Methodologies

RED,USE
A handy, easy to understand / explain way of thinking about monitoring a system. There are application concerns and infrastructure concerns. Many applications would probably be monitored pretty well by just considering these aspects

- App
  - Rate: how often something happens can be telling. We size our systems based on some expectation of traffic. Sometimes those guesses are just wrong or wrong during special periods (eg Retail + Black Friday)
  - Errors: For a webapp, 500s are usually a good thing to keep an eye on but really anywhere in the system you have an assumption that has been invalidated by the world (eg Bad input, false preconditions). This sometimes manifests as exceptions which you should catch
  - Duration (Latency): How long something takes can be the best metric we have that indicates was a user experiences
- Infra: How well are the compute resources in a system being used?
  - Utilization: Each of cpu, disk, network, ram has a notion of amount used in the last monitored period. Resource usage on its own isn’t a bad thing but when you’re close to the limit of one, this can manifest in unpredictable ways in the rest of the system. Queries taking a bit longer than normal to execute
  - Saturation: When a you run out of slots, or resources, or whatever you have a finite amount of, sometimes the thing to do is wait until one becomes available which can mean queuing. Queued threads waiting to make progress because of shared resources might be problematic
  - Errors: Infrastructure requests fail too. 🙂 Never look at these as much as I should and I haven’t personally had an issue where something like this was involved but it happens. To be kept in mind!

# Alerting

## CASE

Sending an alert from production to an operator, or a developer, or a customer support person is an expensive proposition. That person has to put down what they’re doing to try to figure out what’s going on and doing that can sometimes be really hard where distributed systems are concerned.

CASE is a minmum bar we set for all system alerts that helps in this regard. Note: This is a hard problem that never goes away and requires constant vigilance!

- Context heavy
- Actionably
- System based
- Evaluated

Important note 1: Alerts that satisfy this criteria today, may fail tomorrow. Re-evaluate alerts periodically to ensure that they are adding value to your practice, and team

[Source](http://onemogin.com/monitoring/case-method-better-monitoring-for-humans.html)
