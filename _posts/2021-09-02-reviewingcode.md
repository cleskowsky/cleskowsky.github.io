---
layout: post
title:  "Reviewing Code"
category: code
---

# The most important advice I've ever read about reviewing code

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The best PR reviews I’ve ever got included comments on: <br><br>- concurrency bugs<br>- software layering<br>- how to write better tests<br><br>The worst PR review I’ve ever got told me to make functions smaller. <br><br>That’s why I get so triggered whenever “clean code” is wheeled out in PR reviews.</p>&mdash; Cindy Sridharan (@copyconstruct) <a href="https://twitter.com/copyconstruct/status/1317277666823741440?ref_src=twsrc%5Etfw">October 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<br>

# Reading

* [Thoughtful code reviews](https://about.gitlab.com/blog/2021/03/09/tips-for-better-code-review/): as practiced at Gitlab
* [Conventional comments](https://conventionalcomments.org/): is an idea I like a lot. Make your intent obvious when you say something about code and include as much context as you can
  * eg suggestion (security): I think there may be an issue here …

Code reviews are a most excellent opportunity to share experience about a program or the way a team thinks about work! The goal is to share context, and potentially relevant personal experience with the author about a problem / solution, and to spot things that could bite you. Nitpicking is not helpful!

# The Review

* Does it work? 😆
* Show me the tests! Seeing tests brings me joy! 🥰
* Is it easy to understand and written simply? Avoid the clever. Readability is super important. This can’t be overstated
* Focus on the interesting bits. Eg:
  * Concurrency
  * New libraries / dependencies
    * What’s the license? LGPL and Apache licenses are acceptible (Others could be onerous and should be scrutinized. Avoid copyleft …)
  * Error handling (See below)
  * Remote calls
    * What if your dependency isn’t available or slow to respond? Have we thought about the failure case? (Timeouts [both connection, read], circuit breaker)
    * Retries if it makes sense (idempotent action), and backoff
  * Db usage
    * Can we be caching here
    * Do we have / need an index for this? Is the new feature on a hot code path?

# Error Handling

* Are exceptions being captured and an error report being created for issues we can do something about?
  * Yes – bad configuration in a client, or module leading to failure
  * No – bad user input (eg Somebody entered a birthdate in a form not in the right format causing our input validation layer to fail)
* Otherwise log (Or maybe log in addition to?)
* Handle specific exceptions you know may be thrown, and include a generic handler for everything else
* Propagate errors out to the places where they can be handled

# My favourite code review links

* [Testing in the Twenties with Tim Bray](https://www.tbray.org/ongoing/When/202x/2021/05/15/Testing-in-2021)
* [One Shopify engineer’s list](https://shopify.engineering/great-code-reviews)
* [Google Code Review Guidelines](https://github.com/google/eng-practices/blob/master/review/reviewer/looking-for.md)
* [Here’s something from the point of view of the code author](https://mtlynch.io/code-review-love/) (On bringing reviewers joy …)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The best PR reviews I’ve ever got included comments on: <br><br>- concurrency bugs<br>- software layering<br>- how to write better tests<br><br>The worst PR review I’ve ever got told me to make functions smaller. <br><br>That’s why I get so triggered whenever “clean code” is wheeled out in PR reviews.</p>&mdash; Cindy Sridharan (@copyconstruct) <a href="https://twitter.com/copyconstruct/status/1317277666823741440?ref_src=twsrc%5Etfw">October 17, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>