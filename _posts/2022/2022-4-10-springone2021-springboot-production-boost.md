---
layout: post
title: "SpringOne 2021 SpringBoot Production Boost"
---

# Configuring Spring

* Great top to bottom watch through of a new springboot service including:
  * Rest controller
  * Domain object
  * Repository object for querying db
  * Spring data
  * Flyway for migrations
  * Actuator for monitoring, health probes
  * Testcontainers for testing locally with postgres (and other dependencies)

![configuring spring](/assets/images/2022/springboot_config_strategies.png)

[Source](https://springone.io/2021/sessions/spring-boot-production-boost)

# Integration Patterns

* Gregor Hohpe talks about mapping enterprise integration patterns to aws bits (eg lambda, eventbridge, gateway, etc)
* You end up with a system of many tiny little things
* Monitoring / observability overhead is high
* Deploy pipelines are probably many (1 per component)
* ...

[Source](https://www.youtube.com/watch?v=ttJAIQf7cTw)