---
layout: post
title: "Notes: Minimum viable architecture"
---

Start with:

want to get a site up

* for really early staging companies, paper prototyping is better than reaching for tech to validate an idea
  * google ads?
  * friends?
  * do you yourself need the thing you want to start a business around?
* monolith
* good observability
* platform as a service type hosting situation
* continuous integration
* 1 click deploy
* a framework that allows for rapid development
* feature flags

Next:

want to scale a team, processes, safety, allow change

* can go on as above for years! Many companies stay there. Good! Small simple systems let operators and developers sleep at night. but maybe deployment becomes, slow, hard, risky ...
* start thinking more about scalability
* lifecycle of software owned by devs end-to-end
* platform team, devtools
* sync -> async flows
  * event queue
  * use of an event based architecture in more places
* shift to languages with better performance characteristics (jvm langs, go, ...)
* functional db partitioning
* monolith + possibly other services
* investment in automated testing of microservice apis

![Randy Shoup identifies 3 different lifecycle phases of a minimum viable architecture in a conference talk. They are starting, scaling, and optimizing. When starting prefer tools that help developers move faster and a monolithic software design. In scaling, consider microservices to allow different concerns to evolve at difference rates, with safety, with release management owned by development teams. Optimizing is where you start to prioritize to prefer stabilizing changes, the team is smaller, and your looking for wins to make the system easier to maintain.](/assets/2023/minimum_viable_architecture_yow2022.png)

[source](https://www.youtube.com/watch?v=9Q7GANXn02k)