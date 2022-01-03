---
layout: post
title: "Class SRE Implements DevOps"
---

A story told in 10 parts ...

[Source](https://youtube.com/playlist?list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj)

There's just so much great material in this series!!

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
  * Sidenote: How available should a service be? Engineering beyond what users need / would annoy them is a waste of energy that could have gone into the product
* An slo is an agreement among stakeholders inside the business that concretely defines what healthy looks like over longer periods of time. If an SLI is computed over the previous 5mins an SLO may be computed over 30days. Breaching an SLO is serious business. Convincing management and product that reliability becomes top priority when this happens is a critical part of putting an SLI, SLO type program in place
* SLAs are an agreement between the business and customers that describes what they should expect in terms of availability and what happens if that commitment isn't met (eg credits, refunds, etc)

SLIs and SLOs as a way to make the definition of availability concrete is a neat concept.

# Risk and error budgets

* What's our goal for availability of a service
* It's a decision to be made with product team and business
* Higher availability comes with more complexity and cost
* Some risk exists in systems always
* How much uptime will a service have
* Difference between actual uptime and target uptime is the error budget. If you want 99% availability you can tolerate 1% downtime within a SLO window
* Executive team has to buy into error budgets for error budgets to work. It has to be enforceable or why bother

# Toil and toil budgets

* Manual work required by the system, repetitive
* 1 off tasks are not worth automating
* How do you measure toil? Can be easy if you can devote a person to it full time on a rotating schedule
* Keep amount of toil balanced with project work
* Some amount of toil isn't terrible - eg might be a good way for a new team member to cut their teeth

SRE project work includes "Performance, reliability, utilization, monitoring"
