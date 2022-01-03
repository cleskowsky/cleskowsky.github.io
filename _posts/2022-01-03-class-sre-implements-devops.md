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
Add