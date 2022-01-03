---
layout: post
title: "Class SRE Implements DevOps"
---

A story told in 10 parts ...

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
