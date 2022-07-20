---
layout: post
title:  "Monitorama"
---

# About

Monitorama US 2022 happened in June and the videos have just become available on vimeo. (July 17, 2022) I've picked a few sessions I'll watch and take notes for.

# Monitorama PDX 2022 - Adrian Cockcroft - Monitoring Carbon

* [Source](https://vimeo.com/730384182?embedded=false&source=vimeo_logo&owner=6548926)
* Europe has made it the law of the land that companies will have to make auditable data around their carbon footprint for all aspects of the business
* Other countries are following (eg USA which is 2 years or so behind) but since Europe will touch aspects of the supply chain in other countries it sounds like we're all going to have to participate (If we want to continue to do business in the EU :))
* AWS, Google Cloud, Azure all are starting to collect the data and make it available. It's a hard problem to solve. How do you calculate the carbon footprint of a vm on a hypervisor, on a server, on a rack, in a datacenter, at night, ...
* There's an economic model that says if you spend 1Mill$ on the cloud your footprint is 159 tonnes or some such. Crude and a bit simplistic but it's a starting place and something auditors are currently accepting

Great talk ! :)

# Monitorama PDX 2022 - Sophia Russell - The little SLI that could

* [Source](https://vimeo.com/730488164?embedded=false&source=vimeo_logo&owner=6548926)
* Central sre team championed the use of slis, slos to dev teams
* Hard to get buy in for lots of instrumentation work / training on ideas and how to implement them in existing code. There were other things to do!
* Simplified the goal (start with slis around latency, errors, availability)
* Simplified the system - fewer components, frameworks, different ways of doing the same thing
* Had a false start by trying to go in with custom metrics

# Monitorama PDX 2022 - Joy Scharmen - Starting smart and planning for growth what I wish I knew

* [Source](https://vimeo.com/730487793?embedded=false&source=vimeo_logo&owner=6548926)
* Lovely talk with a small number of things that will make running small, important services much more joyful. I suspect these practices scale up well beyond small systems but I digress ...
* Keep the system simple. You probably don't actually need kubernetes and can get away with an autoscaling group
* Document your decisions (Decision journal)
* Monitoring, alerts
* Instrument your code
* When in doubt don't wake up a human
* What is one metric from your system that says you're up / down?
* Resilience without human intervention. It doesn't scale
* "Start your platform small and grow from there ..."
