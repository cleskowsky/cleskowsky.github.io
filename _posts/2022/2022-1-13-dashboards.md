---
layout: post
title: "Dashboards"
---

Apparently it's dashboard day today lol!

* [5 Dashboard Design Best Practices](https://www.influxdata.com/blog/5-dashboard-design-best-practices/?ck_subscriber_id=185275687): How to make a dashboard that serves a specific purpose and considers who will be using it. 3 broad kinds : operational (near real-time), analytic (drill down, dimensional, not real-time), strategic (higher level than analytic, not real-time)
  * Information hierarchy - Users look in the top left corner first and move outward from there. Most impactful info should be positioned here and sized appropriately
  * Consistent layout - Use of titles, legends, axes, scale should be consistent / well-thought-out for the data you're looking at
  * Provide context - Explain to people what they're looking at (use of titles, subtitles, tooltips etc)
  * The first 5 seconds - A user should be able to find what they need in < 5s
  * Performance - Make sure your dashboard is usable with real datasets (toy dashboards only work with tiny amounts of data)
* [Obvious Ownership: A Sensible Humane Registry](https://developers.soundcloud.com/blog/obvious-ownership-humane-registry?ck_subscriber_id=185275687): Sound cloud's solution to a directory of services -> team owners so that people can ask "Who owns this thing?"
* [Notes on the perfidy of dashboards](https://charity.wtf/2021/08/09/notes-on-the-perfidy-of-dashboards/): Dashboards are good at showing business metrics and metrics related to well known processes. Often used as starting points for an investigation. (Finding a place to jump in deeper) You can lose a lot of context with them though if they're based exclusively on metrics. Metrics record a timestamp, a label (eg http_requests.failed) and a value. You don't necessarily know endpoint, query parameters, timings to service dependencies, in context errors, etc. Wide events give you this. (Observability)
