---
layout: post
title:  "Making my bookmarks app"
---

# Learnings

* Security rules should be default deny with specific allows. I learned this when I discovered the h2 console was public because I forget to make a specific deny rule for it. We shouldn't have to remember all our protected urls and have to be really careful this way. Nothing is available by default except for a few public things like the login, and signup pages.
* Websites have public pages and protected pages. Even on public pages there may be controls that only logged in users can see. It's probably a good idea to think about this up front.