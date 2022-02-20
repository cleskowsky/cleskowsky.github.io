---
layout: post
title: "Platform engineering links"
---

I found an amazing thread the other day about a concern that sits between operations / sre and product engineers. Platform engineering. (Developer experience, platform, tools?) I have a bit of reading to do! :) This stuff is super interesting to me!

* [A twitter thread that links to many interesting posts](https://twitter.com/danielbryantuk/status/1494614263016660998?s=12)
* [Dev control planes (video)](https://www.youtube.com/watch?v=qtSS_uCBSas)
* [Holistic dev experience (video)](https://www.youtube.com/watch?v=KGbw2c40q9Q)

* [The Rise of Platform Engineering](https://softwareengineeringdaily.com/2020/02/13/setting-the-stage-for-platform-engineering/)
* [The top 10 fallacies in platform engineering](https://humanitec.com/blog/top-10-fallacies-in-platform-engineering)
* [What's 🔥 in Enterprise IT/VC #262](https://whatshot.substack.com/p/whats-in-enterprise-itvc-262?utm_source=url)
* [Developer-Led Landscape: 2021 Edition](https://tylerjewell.substack.com/p/developer-led-landscape-2021-edition?utm_source=url)
* [Developer Control Planes: A Platform Builder’s Point of View](https://www.getambassador.io/developer-control-plane/developer-control-planes-a-platform-builders-point-of-view/)

* [Developer Control Planes: A Platform Architect's Point of View](https://www.getambassador.io/developer-control-planes/developer-control-planes-a-platform-architects-point-of-view/)
  * Full cycle developers in the netflix sense
  * Push responsibility of owning / running prod left towards developers
  * Kubernetes shop from early days (2017ish)
  * Developers don't get direct access to production but they have a gitops like workflow with pull requests, reviews for changes, multiple eyes on deck before acceptance
  * There is a team that is focused on the boundary between devs and the platform - documentation, onboarding, examples, tech talks, learning + improvement
    * They provide real world examples of how their teams solved specific problems using their platform tools
    * They have a golden path base project to encourage people to start with a known stack but allow teams to choose their own tools
    * They consider tool sprawl a problem? (Seems like a conflict with former)
  * They started with rails, ported to nodejs and are now running golang :/
