---
layout: page
title: Production
permalink: /production/
---

* [Architecture](https://cleskowsky.github.io/2021/12/09/architecture.html)
* [Comics](#comics)
* [DevOps](#devops)
* [Incident Response](#incident-response)
* [Logging](#logging)
* [Observability](#observability)
* [Production Readiness](#checklist-production-readiness)

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

# SLIs, SLOs, SLAs, Error Budgets … Oh My!

Want to be able to answer the question “When should we slow down a bit to work on making our application more reliable, or performant?”

This is a framework to define availability in concrete terms, determine acceptable levels of it, and then come to a consensus with product, development, and the business about what we do when we don’t have enough of it.

- SLI – Service level indicator. A system metric that can be used to classify a request as either good or bad. eg 95th should be < 100ms for requests to our web application
- SLO – Service level objective. A measure of how well we’re doing over time with respect to an agreement we make internally with ourselves of what good / bad even means. eg In the previous 30d, 99% of the time we should hit our stated latency goals. Note: A corollary is we don’t want to exceed our goals either. It’s time + energy taken away from work that could be put into making a better product
- SLA – Service level agreement. A promise we’re comfortable making to customers about how much availability we’re willing to guarantee. There may even be financial penalties associated with failure to meet goals

# Links

- [SRE implements DevOps](https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2): A series of videos with Liz Fong-Jones and Seth Vargo that talks about what devops is and how SRE relates to it. (SRE is how Google decided to adopt some of the principles of the devops movement)
  - Reduce toil
  - De-stigmatize failure
  - Error budgets, slos, slis
  - Better communication between developer and production support teams
  - Measure all the things that matter
  - Tiny batches, gradual change
- [How github deploys code](https://github.blog/2021-01-25-improving-how-we-deploy-github/)

# Platforms

All platforms must have a story around these functional areas. Even if you don’t think of your system as a platform (maybe you didn’t intentional design it as such) you have one!

- Service discovery
- Release management / deployment
- Internal / external routing
- Config / secrets management
- Run code

# From the System Design Primer
Start with use cases and constraints

- Who is going to use it?
- How are they going to use it?
- How many users are there?
- What does the system do?
- What are the inputs and outputs of the system?
- How much data do we expect to handle?
- How many requests per second do we expect?
- What is the expected read to write ratio?

![It's always dns](/assets/images/its-always-dns.jpeg)

# Observability

I'll fill in this section more as I go but for now I'm going to start collecting links I thought are really helpful to my overall understanding of the movement here:

## Observability @ Tucows

* [Unpacking observability](https://storiesfromtheherd.com/unpacking-observability-a-beginners-guide-833258a0591f): Begins by describing what issue investigation could be like with thoughtful, pervasive instrumentation. Wide events with a focus on spans and traces. "Know what normal looks like in prod". OpenTelemetry lets you collect this stuff and send to a backend of my choosing. (Honeycomb and datadog are 2 examples of services that are otel compatible)
* [Definitions! Logs, events, traces and spans](https://medium.com/dzerolabs/observability-journey-understanding-logs-events-traces-and-spans-836524d63172): Excellent. Logs are what we're pumping out pretty much exclusively at work these days. Unstructured and without much context (inconsistent context?) in terms of the broader event a particular message belongs to. Events add structure, spans are containers for strongly related events and traces hold related spans

## The Observability Journey (A twitter thread by Charity majors)

* On call
* Dedicated sustainability work (10-15% of developer capacity)
* Monitoring, tracing
* SLIs, SLOs : Put in place a few key ones to get started with so when you talk to leadership about investments to be made in resilience and availability you have real data to back up the recommendations you're making in terms of platform / product investments
* Product

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve been talking to lots of teams about their observability journey, or how they managed to dig themselves out of hell and get a handle on shit. Some patterns definitely emerge.</p>&mdash; Charity Majors (@mipsytipsy) <a href="https://twitter.com/mipsytipsy/status/1442582259463122947?ref_src=twsrc%5Etfw">September 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Links

* [Deployment strategies for OpenTelemetry](https://lightstep.com/blog/deployment-strategies-for-opentelemetry/): An article on the lightstep blog but a core committer to the otel project. Seems like the first step is to install the otel collector everywhere. This lets you lift and shift instrumented data to any backend metrics / traces host that supports the otel protocol. (Which is many of the big ones : prometheus, datadog, sumologic, lightstep, etc.) Step 2 is instrumenting apps which is slower / harder for sure. He recommends starting with the most important work flow through an app end to end so people can see the value and start to get excited
