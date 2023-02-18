---
layout: post
title: "SRECon2022 talk: Backend API Design for SREs"
---

[Source](https://www.youtube.com/watch?v=i7zbiRAEKgs&list=PLbRoZ5Rrl5lcxKstRta9sS6MiidjtkUM_&index=34)

# Asynch
How do you decide if an operation should be sync or async?
- Backend requests should return < 30s. Server side logic should wind down relatively quickly.
- Might the op be interrupted? If you have to stop something and then get it started again you'll have to write code to figure out where to get started again.
- CRUD should not be async. Reach into db, return. Usually quick. Not always true but most of the time this is a good rule of thumb.
- Switching an api from sync to async is expensive for clients. They have to re-write for a different messaging pattern. Async op usually returns an id that the client uses to poll for status of the requested work.

# Distinguish between client / server errors
- If a client asks for a resource that doesn't exist, this should be 4xx. (Don't want it to affect our slo)
- Insufficient resources to process op is a server error.
- Default to being an infra error if you're not sure. You'll be notified and can decide if it should be client later.

# Write good documentation
- Should relate to how a user would want to use op, method, endpoint, etc

# Test your api by using it yourself
- Integration tests are great
- Eat your own dog food
