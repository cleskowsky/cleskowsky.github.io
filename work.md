---
layout: page
title: Work
permalink: /work/
---

* [Architecture](/2021/12/09/architecture.html)
* [Code](/2021/12/09/code.html)
  * [Reviewing Code](/code/2021/09/02/reviewing-code.html)
  * [APIs](/code/2021/08/29/apis.html)
  * [VIDEO: Simplicity Matters by Rich Hickey](https://www.youtube.com/watch?v=rI8tNMsozo0)
  * [4 + 1 Architectural view model](https://en.wikipedia.org/wiki/4%2B1_architectural_view_model#:~:text=4%2B1%20is%20a%20view,system%20engineers%2C%20and%20project%20managers.)
* [Process](#process)
* [Production](/2023/1/8/production.html)
* [Project Management](#project-management)
* [SRE](#sre)
* [Security](#security)
  * Input validation (Anti-corruption layer)
  * Output encoding
  * [Vulnerability Scanning](/videos/2021/08/29/vulnerability-scanning.html)
* [UI/UX](#ui/ux)

# People

* [1 on 1s](#1-on-1s)
* [Burnout](#burnout)
* [Growth](#growth)
* [Hiring Notes](/2021/09/14/hiring-notes.html)
* [Tech Leads](#tech-leads)
* [How gitlab onboards engineers](https://about.gitlab.com/blog/2022/07/21/quickly-onboarding-engineers-successfully/): This is a great high level overview of how gitlab onboards new team members

# Tech Leads

* [Tom's learnings after becoming a tech lead](https://tomgamon.com/posts/things-i-have-learned-new-tech-lead/): I like these. I bet he was feeling like an imposter for quite awhile before coming to these insights. Going from an individual contributor to a leader can be a bumpy road ...

# Burnout

Sometimes I find stories about people who have taken on too much (work? responsibility?) and have to step back an reset. It's hard to tell when it's happening to you or somebody you know because often a person looks totally normal right up until the crash. I think I've experienced something like this myself and find reading about it helps me remember those times.

It's super important for teams to be aware that this sort of thing can be (and probably is) happening.

* [Burning out and quitting](https://mayakaczorowski.com/blogs/burnout)

# SRE

![google sre in a nutshell](/assets/images/google_sre_in_a_nutshell.jpg)

* [Shared reliability collab model @ booking.com](https://www.honeycomb.io/blog/how-teams-collaborate-at-booking-com/): A very neat walk through of a model of managing production that involves dev teams and ops.
  * [My post](https://cleskowsky.github.io/2022/02/03/bookingcom-reliability-collaboration-model.html)

# Process

* [Cut Out Time Estimates on Roadmaps: Get Into a Product Delivery Rhythm](https://www.honeycomb.io/blog/product-strategy-and-roadmap-timing/): Product delivery process used at Honeycomb. Tight deadlines for most things are de-emphasized a bit it seems. Work is picked up in chunks of varying size and progress updated at regular cadences (the idea is with this kind of process spending time drilling into trying to figure out exactly how long something will take to complete is a fool's errand):
  * yearly - The roadmap is updated yearly but often changes. Headings are: in progress, next and planned
  * quarterly - OKRs. Much more likely to be happening. Company aligns around these ideas. Not necessarily specific at this level.
  * 6 weeks - Things get real
  * 2 weeks - Updates provided broadly about what has changed since last time by functional area
  * weekly - 30m demo days to show off work in progress
  * daily - Team syncs. "Keep talking about the work and make sure everyone's got the plot". I like this language!

# Project Management

![This is probably a bit more about product management but it's so good! :)](/assets/images/alethia_delivre_product_management.png)

![Peter Bourgon on starting a new project](/assets/images/peter_bourgon_new_project.png)

* SMART
  * Specific: Know exactly what you're doing and not doing!
  * Measurable: There's gotta be a real win here with key metrics that you can measure and compare with the previous state of the system
  * Attainable: The team can actually do it. (Necessary partners and other assets / resources are in play and can be reached!)
  * Relevant: The needle will be moved in terms of what the business is trying to achieve
  * Time boxed: projects have to end and should deliver value to make the time investment worthwhile!

![Product management advice less is more](/assets/images/product_management_advice_aakash.png)

* Principle 1: More is not better
  * Start with the minimal, most important information:
  * user story
  * success criteria
  * design/ mock
  * Then, add in additional layers.
  * Fewer people will read long specs.  And even fewer will walk away with the right takeaways.

# Growth

- [On Being A Senior Engineer](https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/)
- [Talking with tech leads](https://www.amazon.ca/Talking-Tech-Leads-Novices-Practitioners/dp/150581748X)
- [Stuck? Do something.](https://world.hey.com/jamis/stuck-do-something-c54521ab)

![Liz Fong-Jones on being a principle engineer](/assets/images/liz_fongjones_principle_engineer.png)

# 1 on 1s

Some questions I've found revealing in the past:

* What's on your mind? is a good starter. It's open ended. It lets the other participant lead with anything they're thinking about.
* How do you like your work to be recognized? Publicly, privately, within the group?
* What's your favourite pastry? Nice little ice breaker and gives you an idea of something to bring in for the team at some point. :)

Stuff to ask once or twice a year:

* How would you like to grow in your skills, job, career?
* Are you feeling a sense of purpose in what you're doing?
* What are we doing as a team / company that you think could be improved?
* What are we not doing?

Other 1 on 1 truths

* If there's nothing to say that's find too. Just agree to skip this time and reconnect for the next

Are 1-1's a waste of time?

* They're not a status update. You have other places to get project status. They're time for your direct report to talk goals, feedback and mid- long- term things
* The direct report should own the agenda. You can share a doc of past topics but if there's nothing to say it's ok to cancel
* Good questions start conversations
  * How do you think that went?
  * What will you do differently next time?
  * What’s the consequence if we don’t do that?
  * What other approaches have you tried?
* It's ok to be light and casual sometimes (Don't have to always be heavy!)

[Source](https://lauratacho.com/blog/how-can-i-make-my-1-1s-less-boring)

# UI/UX

Adding a few of my favourite links for UI related concerns for now

* [Designing for different states in the UI](https://uxdesign.cc/designing-for-different-ui-states-87d60130f85f)
* [Hick's Law: Time to make a decision vs complexity of choices to choose from](https://lawsofux.com/en/hicks-law/)
* [A note on inclusion in design from the apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/foundations/inclusion)
