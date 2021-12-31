---
layout: post
title: "Observability @ Tucows"
---

I found an amazing series of articles talking about opentelemetry and the road to observability written by the team @ tucows I'd like to be able to use as a reference in the future and add notes of my own as I go! So great ... :)

* [Unpacking observability](https://storiesfromtheherd.com/unpacking-observability-a-beginners-guide-833258a0591f): Begins by describing what issue investigation could be like with thoughtful, pervasive instrumentation. Wide events with a focus on spans and traces. "Know what normal looks like in prod". OpenTelemetry lets you collect this stuff and send to a backend of my choosing. (Honeycomb and datadog are 2 examples of services that are otel compatible)
* [Definitions! Logs, events, traces and spans](https://medium.com/dzerolabs/observability-journey-understanding-logs-events-traces-and-spans-836524d63172): Excellent. Logs are what we're pumping out pretty much exclusively at work these days. Unstructured and without much context (inconsistent context?) in terms of the broader event a particular message belongs to. Events add structure, spans are containers for strongly related events and traces hold related spans
