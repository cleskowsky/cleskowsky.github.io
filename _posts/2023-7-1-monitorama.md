---
layout: post
title: "Notes: Monitorama"
---

I'll write down a few thoughts across the 3 days worth of talks that are things I really want to reinforce in my own head. I'm unsure these are all ideas that I should be driving towards, but they are making me think right now.

* Use histogram type visualization as a way to retain more data (closer to raw but not quite) that can show more info about how a service works
* Traces should be considered first class citizens in a monitoring platform beside logs and metrics
* Instrument your code!
* Slis, slos, rates vs raw counts (# of matching events / all events)
* Ben Rockwood is using playwright with github actions to do production monitoring
  * Every 30m kick off e2e testing with a client in a couple different regions
  * Pump results into a discord channel
  * [Mondoohq/simmons](https://github.com/mondoohq/simmons)
  * 3m time to run the full suite
* Github actions is an automation tool (so is Jenkins!)

# Live streams from the event

* [2023 Monitorama Live Stream Day 1](https://www.youtube.com/watch?v=CRJcc1TqBhM)w
* [2023 Monitorama Live Stream Day 2](https://www.youtube.com/watch?v=AAkUKsLRlu8)

# And a few slides that I like a lot

![Definition of observability](/assets/2023/observability.png)
