---
layout: post
title: "Otel Honeycomb Java Agent Project"
---

I did a code read of this project this morning and learned a few things:

* I haven't really spent much time with gradle. It's pretty clean and readable compared to Maven I think although many of the directives there are very foreign. :) Maybe I can guess at what some do lol
* There is modularization going on here for what seems like a pretty small project which increases the complexity a bit and made the read harder. eg In the agent module / subcomponent / whatever there is one class - the Agent - which refers to EnvironmentConfiguration which is nowhere to be found. It's in another module that has TWO classes ... it and one other. Why the splitting?! Anywho ... that was interesting too. I'm sure there's a good reason there.
* The code was beautiful. I will look back to this work from time to time if I ever need inspiration on how to express something. :)

[Github](https://github.com/honeycombio/honeycomb-opentelemetry-java)
