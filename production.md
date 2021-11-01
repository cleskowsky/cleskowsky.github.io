---
layout: page
title: Production
permalink: /production/
---

* [Incident Response](#incident-response)
* [Production Readiness](#checklist-production-readiness)
* [DevOps](#devops)
* [Logging](#logging)
* [Comics](#comics)

# Incident Response

* Communication during incident response is super important. Internally, the customer support team needs to know something is up because customers may be calling in to ask why our software isn't working. Externally, customers directly impacted by an outage may want to keep up to date on the status of the outage and when a fix is likely to land. Somebody responsible for communicating the status of an incident while it's being worked should be appointed right away when the response team forms.
  * [Heroku status page for an event includes incident updates and post incident response report](https://status.heroku.com/incidents/2347): This looks pretty great. I like the follow-up report template too. Looks like ...
    * Summary
    * Who was affected?
    * What happened?
    * What we're doing to make sure it doesn't happen again?

# Checklist: Production Readiness

Stuff I think about when I’m getting a new application ready to run in prod. They have all caused me pain in one way or another at some point … 🙂

* How critical is it to the business? (Should an engineer be woken up in the middle of the night if it goes down?)
* Monitoring 
  * Metrics for a webapp: traffic volume, latency, and errors 
  * Logs are being shipped to a central place where we can setup filters and alerts on them 
    * Are logs being rotated? Should they be? 
  * Exceptions are being captured and reviewed by somebody 
  * Is there a /healthCheck url we can use to determine readiness? 
    * This check should test the service itself, and dependencies in a meaningful way to let us know it is ready to do work
    * It should be fast and return 200 if ok, 500 otherwise
    * This is the url we’ll setup a load balancer to ping
* Is there data to be backed up? (If we are taking backups we should be verifying we can restore them)
* Do we have environments including develop, staging, and production and a process to promote changes through them
  * How do we deploy new versions of this?
* Is it well documented?
  * Service pages are nice (Who owns the service, an architecture diagram, links to runbooks, links to dashboards)
* Show me the tests! (Unit, end to end and other. Should be automated and able to run all the time)
* Have we gone through a [threat modelling](https://increment.com/security/approachable-threat-modeling/) exercise with it? (Talk about principals, goals, adversities, invariants)

# DevOps

* Culture that accepts that failure happens and is usually an opportunity for growth
* From Practice of Cloud System Administration
  * Workflow: is about our process of delivering value to production from start to finish (From idea / problem identified to deployment to production) and the steps along the way. Understanding how changes are made at the lowest level lets us examine how we work and look for opportunities where we can do better
    * Repeatable
    * Don’t pass defects to next step
    * Don’t let local optimizations degrade performance globally
    * Increase the flow of work after tasks are repeatable by speeding them up (automate), or eliminating them
  * Feedback: visibility into change as it happens
  * Continuous learning: means creating a culture where it’s ok to try new things, and learn from the experience. Failure is not stigmatized (In fact there is much to be learned when things don’t work the way you expect. Your mental model of the world may need a small nudge.)

## Levels

* Level 1: CALMS
  * Culture of
    * Automation
    * Learning (I've heard lean here too but that seems less interesting to me)
    * Measurement
    * Sharing
* Level 2: You write it, you run it!

## DORA Reports

![Productivity](/assets/images/dora-productivity.png)

![Software delivery and operational performance](/assets/images/dora-software-delivery-practices.png)

![Psychological safety](/assets/images/dora-psychological-safety.png)

# [PagerDuty SRE Team Goals](https://www.pagerduty.com/blog/building-scaling-sre-team/)

* Ensure our work connects to organizational goals.
* Partner with Engineering stakeholders to define a supportable and performant service architecture (paved road).
* Continuously strive to improve the customer experience: Full lifecycle support (creation, development, deployment, retirement), observability, flexible connectivity, and monitoring.
* Favor managed, commercially supported, or industry-accepted solutions over systems built in-house.
* Proactively notify the organization of any significant infrastructure changes.
* Measure success through adoption.
* Revisit design choices and components that are rendered obsolete and see what can be replaced with managed or off-the-shelf parts, or substantially simplified.
* Share SRE expertise in service to the entire PagerDuty organization.
* Factor operational costs in architectural and platform decision-making.

## DevOps tries to ...

* Reduce organizational silos
* Encourage acceptance of failures as normal. (continuous learning, there will always be things going wrong)
* Implement gradual change (eg canaries)
* Leverage tooling, and automation (eg automate away last year’s job)
* Measure everything

[Source: Liz, Seth Vargo video series about devops](https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj)

## Links

* [A mature role for automation](https://www.kitchensoap.com/2012/09/21/a-mature-role-for-automation-part-i/)
* [Release It!](https://www.amazon.ca/Release-Design-Deploy-Production-Ready-Software/dp/1680502395/ref=sr_1_1?dchild=1&keywords=release+it&qid=1635773891&s=books&sr=1-1)
* [Practice of Cloud System Administration](https://www.amazon.ca/Practice-Cloud-System-Administration-Practices/dp/032194318X/ref=sr_1_1?crid=3GETK5Q2DFHAO&dchild=1&keywords=practice+of+cloud+system+administration&qid=1610105932&sprefix=practice+of+cloud%2Cstripbooks%2C154&sr=8-1)

# Logging

## Levels

* DEBUG –Any information related to things that are going on in the program. These are often messages written by programmers for debugging purposes.
* INFO –Any user-initiated action or any system operations such as scheduled tasks executing, or system startup and shutdown.
* WARN –Any condition that could become an error state in the future. Library deprecation warnings, low available resources, or slow performance are examples of entries that would go in this level.
* ERROR –Any and every error condition should go in this level.
* FATAL –Any error condition that causes the system to shut down. For example, if the system needs 32 GB of memory on startup and 16 GB is all that’s available, the program should log a FATAL error message and immediately exit.

## Links

* [From the Builders Library @ aws : Instrumenting distributed systems for operational visibility](https://aws.amazon.com/builders-library/instrumenting-distributed-systems-for-operational-visibility/)

# Comics

![Final patch](/assets/images/104-final-patch.png)

![Devotion to duty xkcd](/assets/images/xkcd_devotion_to_duty.png)
