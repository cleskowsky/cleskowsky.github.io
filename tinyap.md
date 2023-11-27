---
layout: page
title: tinyap
permalink: /tinyap/
---

* Add a mongo driver and spring data for persistent storage
* I'm going to remove the logging servlet filter for now. I don't know what to do about long-running tasks in the system and logging of progress. I wouldn't want to lose this partial data. (Logging servlet emits an event only at the end of work)