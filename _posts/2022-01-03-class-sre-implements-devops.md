---
layout: post
title: "Class SRE Implements DevOps"
---

A story told in 10 parts ...

[Source](https://youtube.com/playlist?list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj)

# What is DevOps?

* Set of practices and culture that try to break down tension between development and ops
  * 1 big source of tension is that developers write features and want to see users get those new features quickly. Operators on the other hand are interested in system safety - availability is king
  * Speed vs safety (Can we have both? Spoiler alert: Yes!)
* 5 aspects
  * Reduce organizational silos
  * Accept failure as normal
  * Implement gradual change (Tiny batches are safe)
  * Leverage tooling and automation (Reduce chance of mistakes)
  * Measure everything (That matters)
* SRE
  * Share ownership of prod with developers
  * Blameless postmortems (SLOs and error budgets)
  * Canaries (Roll outs to small % of fleet / users). Promote forward with confidence
  * Measure toil and automate it away
  * Measure toil and reliability of systems

# SLIs, SLOs, SLAs, oh my!

"Product developers and Operators", "How to define reliabiliy vs availability"

* Want a way to define availability (uniquely for a service) that is based on metrics over time. This is the service level indicator (SLI). For your metric - eg latency - what is considered good and bad. Whenever you look at that metric if you're outside the bounds of what is considered good you're bad ... regardless of whether the work eventually completed
* An slo is an agreement among stakeholders inside the business that concretely defines what healthy looks like over longer periods of time. If an SLI is computed over the previous 5mins an SLO may be computed over 30days. Breaching an SLO is serious business. Convincing management and product that reliability becomes top priority when this happens is a critical part of putting an SLI, SLO type program in place
* SLAs are an agreement between the business and customers that describes what they should expect in terms of availability and what happens if that commitment isn't met (eg credits, refunds, etc)

SLIs and SLOs as a way to make the definition of availability concrete is a neat concept.

# Now SRE everyone else

* Our customers should probably understand what our SLOs are
* Anyone using our service by way of an api has a dependency on a thing that will affect their availability ultimately. They should understand about the reliability goals of our service so they can plan accordingly
* Google has CREs (Customer reliability engineers) that are SREs that are facing outwards. Work between customers and our platform

# Managing risks as an SRE

* Identify sources of bad minutes you might see and estimate their impact to the system (eg upgrades that require taking the system down, backups that degrade service, ddos attacks)
* Add them all up. If you're within your error budget you're done ... there's no work here!

# Actionable alerting for SREs

"Automated system that verifies you can login, add an item to a cart and checkout"

* Tie alerting to error budget consumption
* Fast burn vs slow burn alerts (Want to see major rare issues + small frequent issues)
* A lot of times we alert on stuff that doesn't matter to the user

# Observatibility of distributed systems

* Logs, metrics, traces ?? (Slightly different from the messaging from Honeycomb. Although maybe not much)
* Traces are a good starting point. They contain context about individual requests even as they cross process boundaries

# Incident management

* Responsibilities in an incident: Commander (overall decision making responsibility), communicator, Ops lead (+ subject matter experts)
* How do incidents get declared?

# Postmortems and retrospectives

* Who participated in the event?
* What happened? When did it start? What was impacted? How bad was it? How was it resolved? How long did it take to resolve? Did you make any temporary changes?
* Blameless ... no faulting or firing if a mistake was made
* "What did you know at the time when you restarted that process?"
* The individual is not at fault. The fact that the system allowed a dangerous operation to be carried out is where the problem probably is. You have much more control over the latter
