---
layout: post
title:  "Hiring Notes"
---

# Contents

* How I currently think about [**Interview Structure**](#interview-structure)
* A few of my favourite [**Interview Questions**](#interview-questions) I like to ask
* How I've done [**Live Coding**](#live-coding) before and how it's worked / not worked
* [Impactful Interviews](/assets/2023/Impact_Interview_1page_Guide.pdf)

# Values

A few great ones to ingrain in team culture:

* Candor
* Diversity
* Optimism
* Rigor
* Transparency
* Courage
* Empathy
* Resilience
* Teamwork
* Urgency
* Curiosity
* Humor
* Responsibility
* Thriftiness
* Versatility

# Interview Structure

* Phone screen
* Technical Interview
  * Talk about the company and role we're hiring for
  * Past behaviour type questions that come up looking at a candidate's resume and experience
  * Code together-type exercise
  * Design together type exercise
  * Thanks for your time. Do you have any questions for us?
* Talk about how the interview went with second interviewer
* Decide

It shouldn't take a long time to get through this process. Assuming a candidate is exploring other opportunities is usually a pretty safe bet. Remember to respect a candidate's time and the energy they put into meeting with me.

# Interview Questions

## What are they looking for?

We have a role we're trying to fill and likewise the candidate is trying to grow in specific ways given their personal story. Part of the interview should be figuring out whether there is a good fit in this regard. Nobody will be happy if this doesn't quite line up.

* Why are you leaving your current company?
* What are you looking for? How are you looking to grow next in your career?
* Describe the position we’re hiring for to the candidate. Does this sound like a good fit for you? What do you think?
* For a production support type position
    * Have you ever had to carry the pager? Be a first responder / member of an incident response team?
    * How do you feel about that kind of work?

## Past behaviour

* What are you most proud of accomplishing during this time?
* What were the trouble spots, the things you struggled with, during this time?
* Can you tell us about a time when you were under a lot of pressure at work and what you did to get through it?
* Have you had to make time management or prioritization decisions with your time? Can you think of a time when you had to push back on a request? How did you do that?

## Technical questions

I'm trying to get at basic understanding here rather than familiarity with specific technologies. Often these can be asked within the context of a candidates previous work experience. They should be able to speak to the development process in past roles, how code was deployed, how the system was monitored, etc (Sometimes familiarity depends on role and size of company. People may not have as much breadth if they've only ever worked at big companies.)

* How do you deploy an application without downtime?
* Describe how an application in your environment gets from development into production. What are the steps in your build + delivery pipelines?
* What happens when you open up your browser (doesn't matter which) and navigate to google.com?
* Latency seems to have doubled over the last 6 hours. Where do you start looking, how do you start debugging?
* What are some of your favorite tools for visibility, instrumentation, and debugging?
* Tell me about a time when you saved your production environment. How did you identify the problem? How did you fix it? What did you do to make sure it didn’t recur? Diagram the system you currently run. Do you have any criticism of the architecture you just outlined?
* Tell me about the last time you caused a production outage. What happened, how did you find out, how was it resolved, and what did you learn?

## Questions from incident.io

I really like these!

* What's an example of an interesting problem, which you've really enjoyed solving?
* What’s an example of a time when you’ve made compromises to deliver something quickly? How did you decide on the approach?
* How would you improve our product?
* We all collect valuable experiences throughout our careers. What’s an example of something you’ve learned, feel pretty strongly about, and would want to share with the team here?
* What does "having impact" mean for you, and what do you do that has the biggest impact in your current job?

Prep tips

* Come with great examples which you’d be happy and comfortable talking about in depth, rather than pre-polished or rehearsed responses. We usually ask several follow-up questions.
* Try and answer honestly and from your own perspective. We want to hear how you think and what you care about, not what you think we care about.
* These questions touch on things which matter to us, the way we work and the work we do, and we imagine they’ll probably matter to you, too. While we’ll be leading the conversation, we love getting questions in return!

Incident's process isn't far off our at CMD for hiring in the Ops team.

![incident hiring process](/assets/images/incidentio_hiring_process.png)

**Links**

* [Why every software engineering interview should include ops questions](https://charity.wtf/2021/08/21/why-every-software-engineering-interview-should-include-ops-questions/)
* [Our engineering interview process](https://incident.io/blog/our-engineering-interview-process)

# Live Coding

* [Six Coding Interview Formats to Replace LeetCode Bullshit](https://hoffm.medium.com/six-coding-interview-formats-to-replace-leetcode-84f3c770b5c1): Live coding styles that do not include advent of code style problems with brute force + optimal solutions that must be found. More in line with what people will actually be doing in their day.

# Design question

* Let's work on a build pipeline together! What should go in there? What do we need to worry about? It's an open-ended question so let it go wherever it will.

# What we look for in a resume

* Demonstrated expertise, not keywords
  * Show how you acquired and use that skill in your job
  * Share your expertise on public channels such as: StackOverflow answers, open source contributions, papers, blog posts
* We look for people who get things done
  * Initiative - Can you start something that matters?
  * Persistence - Can you see those hard things through? Getting other people on board, making them feel safe and like participants, following up, etc
* We look for unique perspectives (Do they have any interesting projects and are unique? Or interesting life experience? Or writing? that demonstrates a different point of view?)
* We care about impact, not meaningless metrics - Relate to business objectives and team impact
* 1 pagers are great but if you have more to say 2 is fine

[Source](https://huyenchip.com/2023/01/24/what-we-look-for-in-a-candidate.html): Well this was great ...