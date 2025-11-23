---
layout: page
title: Working with Codex
permalink: /codex/
---

# Planning prompts

## Starting a planning session 1

> I want to enable custom, unobtrusive update notifications and installs by customizing SPUUserDriver. Let's start by planning the custom UI we'll need. We'll ONLY work on UI. Create a plan for creating SwiftUI views that can show the various states that are required by SPUUserDriver. I think the best place for these to show up is in the macOS window titlebars on the top-right. Create a plan to put it there. Consult the oracle.

## Starting a planning session 2

> I've got an idea I want to talk through with you. I'd like you to help me turn it into a fully formed design and spec (and eventually an implementation plan)
> Check out the current state of the project in our working directory to understand where we're starting off, then ask me questions, one at a time, to help refine the idea.
> Ideally, the questions would be multiple choice, but open-ended questions are OK, too. Don't forget: only one question per message.
> Once you believe you understand what we're doing, stop and describe the design to me, in sections of maybe 200-300 words at a time, asking after each section whether it looks right so far.

## Starting a planning session 3

![Start planning session prompt screenshot](/assets/2025/chatgpt_planning_prompt.png)

Developer created file called prompt.md

## Add multiplayer to a simple game

Chatgpt suggested this one:

> I have a simple turn-based game written in Python using Pygame. I want to add multiplayer support so that two players can play against each other over the internet. The game is currently single-player only. Can you help me plan out how to implement this feature? Please provide a step-by-step plan, including any necessary changes to the game's architecture, networking considerations, and how to handle player turns and synchronization. Let's start with a high-level overview of the steps involved.

Alternate start from [a 5m codex video](https://www.youtube.com/watch?v=iqNzfK4_meQ):

> Write a plan to implement multiplayer

# Develop session

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

# Cleanup session

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

# Codex commands

* init - reads files in a directory and generates an agents.md file
* approvals - read only for the llm or directory only (auto) or full access
* model - switch to a simpler / harder reasoning model
* codex resume - continues a session started previously

# Links

* [Vibing a Non-Trivial Ghostty Feature](https://mitchellh.com/writing/non-trivial-vibing): Mitchell Hashimoto vibe codes an update feature in ghostty
* [The 7 Prompting Habits of Highly Effective Engineers](https://sketch.dev/blog/seven-prompting-habits): Nice list here of ways to think about asking for help:
  * "Draw the rest of the owl"
  * Checklist
    * Write Plan
    * Write a checklist
    * Do the checklist
    * Delete the checklist
  * Just tell it to try something (if it gets it wrong it's fine)
  * Throughput > latency (Start multiple tasks at once)
  * Try giving a goal not detailed instructions and commands to validate work
  * Git it to summarize a long article or documentation
* [Vibe engineering](https://simonwillison.net/2025/Oct/7/vibe-engineering/): Simon proposes a step past "vibe coding" where an agent is able to plan, design, code and crucially test their output while maintaining quality. He talks about working with existing code bases rather than greenfield ones. The better we get at automation and describing our tools, thinking, and process to documentation the better our agents will get. Allegedly. :)
* [How to write a great agents.md: Lessons from over 2,500 repositories](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/): Guidance on writing prompts for subagents. Are subagents still the way to go?
* [Third Stage Engineering](https://www.brendangregg.com/blog//2025-11-17/third-stage-engineering.html): Performance considers hardware, software, and whatever tuning you have to go to get the most out of a system