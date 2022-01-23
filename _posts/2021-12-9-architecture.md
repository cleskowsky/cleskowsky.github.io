---
layout: post
title: "Architecture"
---

# Keep it simple

* [Choose boring technology](https://mcfunley.com/choose-boring-technology): Bringing in a new technology is expensive to a business, and a team. Everyone has to learn how it works, how to support it, and how it fails. Make sure you do this for good reasons

# Batch jobs

* Job scheduling at Dropbox: Requirements:
  * Priority scheduling
  * At least once execution
  * Only 1 instance of a job is running at a time (no concurrent execution of the same job)
  * SLA: Guaranteed start time of a job after submission is 5 seconds (95th)
  * High availability of the platform
  * Tasks should be idempotent since they can be restarted on failure

# Hexagonal

[Hexagonal Architecture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749): A Netflix blog post talking about organizing a program into layers, and responsibilities in the [Hexagonal Way](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))). The principle objects they call out are business entities, repositories, services, data sources, and transports. Seems to me like you can go a long way with just these concepts and come to a well factored program.

![netflix hexagonal architecture](/assets/images/netflix_hexagonal_architecture.png)

## Concepts

* Entities
* Repositories
* Services
* Data sources
* Transports

# Links

* [4+1 architectural view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model)
* [Decomposing the monolith](https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity): Shopify talks about the benefits and drawbacks of both monolithic and microservice architectures. They decided they didn't want the overhead of microservices but did want to strengthen the boundaries between functional areas within their monolithic app. (eg shipping rate calc vs tax calc)
