---
layout: page
title: Working with Codex
permalink: /codex/
---

# Planning prompts

> I want to enable custom, unobtrusive update notifications and installs by customizing SPUUserDriver. Let's start by planning the custom UI we'll need. We'll ONLY work on UI. Create a plan for creating SwiftUI views that can show the various states that are required by SPUUserDriver. I think the best place for these to show up is in the macOS window titlebars on the top-right. Create a plan to put it there. Consult the oracle.

## Develop session

* "Consult the oracle" kicks an agent into a "deeper thinking" mode which often produces better results
* Starts with a plan because he doesn't know what the feature should look like and do yet and he won't get a lot of value out of sending an agent off to write a bunch of code initially
* The plan is saved to a file like spec.md and often included as context in future conversations
* Uses AI for inspiration
  * Getting from 0 to 1 is hard and is like staring at a blank slate
  * Use the AI to give you something ... anything
  * Often the first iteration is thrown away
  * Sometimes he does the work manually
  * Almost always he has a better sense of what he wants after working with it
* Be able to tell when the agent is producing junk
* Review everything and for stuff that isn't understood he will try to learn about it
* He learns in parallel with the agent (doesn't walk away after a green bar)

## Cleanup session

* Agent is asked to refactor and add documentation
* Documenation helps future work by humans and agents
* Agents work better if they can review code and written documenation
* Refactoring well means a human has understood everything and not blindy accepted what an agent has written
* "Cleanup == anti-slop session"

# Failure and what to do next

* Sometimes you can't get an agent to do what you want it to
  * Along the way it's best to be learning about what you're trying to do
  * You're prompts should be getting closer to the correct work you want to see
  * You can choose to
    * Put the work down for now and move on to something else (Maybe after more context is available the agent performs better)
    * Or do it manually

# Scaffolding out a feature

* Sometimes starting with a few empty classes, methods, and documentation is a good strategy
* "Fill in the black" or "Draw the rest of the owl" are patterns ai is good at

# Sometimes helpful starting prompts

* "I broke a bunch of things, please fix my mess"

# Links

* [Vibing a Non-Trivial Ghostty Feature](https://mitchellh.com/writing/non-trivial-vibing): Mitchell Hashimoto vibe codes an update feature in ghostty
