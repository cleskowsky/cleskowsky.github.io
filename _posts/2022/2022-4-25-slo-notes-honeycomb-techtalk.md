---
layout: post
title: "SLO Notes from Honeycomb TechTalk"
---

- Most slos look like
    - Must be fast enough
    - Must complete (Not erroring)
    - Can maybe make this 1 slo? Slowness bakes in error or not
- SLIs tell you what a good or bad request is
- Want customer happiness but this is hard to measure
    - We end up measuring easy stuff
    - Fast latencies
    - Errors
    - "Variable of true or greater interest"
    - How do you measure satisfaction
    - Surveys are 1 way but usually come too late
- Don't want to put too much energy into the platform
    - Only want it to be reliable enough
    - ... Enter error budgets
- SLOs can be wrong. eg If you find one that by definition has been running in a degraded mode for months and customers aren't complaining, maybe a conversation with product about whether this slo is even correct
- Honeycomb resets SLOs when then burn through a budget completely and want to be able to keep tracking it (As opposed to it running forever as 0 budget :))

