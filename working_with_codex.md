---
layout: page
title: Working with Codex
permalink: /codex/
---

# Patterns

* RPI - research, plan, implement
    * Start with gpt in planning mode and ask it to read code related to a task
    * Gpt will generate a plan based on what it thinks the changes should be
        * Iterate on the plan with gpt
    * Only then have it start writing code

* Agent harness
    * Ask gpt to do something
    * Let gpt do what it will
    * Review the work
    * For any aspect that does match how you think the logic should be organized
      or work, write that back to the
      agents.md file so gpt has a good chance of not doing that again
    * Note: It has been observed that a gpt working in a healthy code base will
      try to emulate the patterns it finds!

* Test first
    * Verification of results is hugely important in this new age where gpt is
      writing our code for us
    * Ask gpt to write a test to make sure something works
    * As it writes new code, it must run the tests to make sure they still work

* Subagents
    * When output degrades because of too much context, consider running
      multiple agents looking at particuler aspects (eg explorer, tester,
      reviewer, security reviewer, etc)
    * There should be a supervisor agent delegating tasks to subagents and
      reviewing results
    * Worth repeating that subagents are not always helpful - a single agent
      with a well fitting context window is super powerful and enough most of
      the time

* Skills
    * Capturing tool use and process workflows in reusable skills is powerful
    * First do something with an agent from start to finish
    * Then say "turn this into a skill"
    * [The skill that make new skills](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)

# Helpful starter prompts

These days some of the best prompts are short and simple. I usually start in
plan mode so the agent and I can talk about the goal before it starts work. I do
like to see bigger tasks broken down into smaller ones.

* turn this into a skill
* write a test for ...
* draw an architecture diagram for this project
* break this down into smaller tasks
* document how this project works

# Scaffolding out a feature

* Sometimes starting with a few empty classes, methods, and documentation is a
  good strategy
* "Fill in the blanks" or "Draw the rest of the owl" are patterns ai is good at

# Links

* [Vibing a Non-Trivial Ghostty Feature](https://mitchellh.com/writing/non-trivial-vibing):
  Mitchell Hashimoto vibe
  codes an update feature in ghostty
* [The 7 Prompting Habits of Highly Effective Engineers](https://sketch.dev/blog/seven-prompting-habits):
  Nice list here of ways to think about asking for help:
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
* [How to write a great agents.md: Lessons from over 2,500 repositories](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/):
  Guidance on writing prompts for subagents. Are subagents still the way to go?
* [Example of claude skill by clickhouse](https://github.com/ClickHouse/agent-skills/tree/main/skills/clickhouse-best-practices):
  Looks like a lot of information to pack into the session context. How well
  does this work I wonder ...

# [How Programming Changed](https://blog.puzzmo.com/posts/2025/12/9/tech-2025/#how-programming-changed): "70% of my lines of code is now written by Claude Code" :/

Great article! The section on the impact claude code had on this developer's
workflow is wild.

> 2025 was a epochal year for the field of programming. LLMs got good enough.
> I’m finding myself using Claude Code
> almost every time I open up my editor, and it’s capabilities feels to have had
> quite a boost with the introduction of
> Sonnet 4.5. For the engineers who use Claude Code in our team, we’re finding
> it can drastically speed up, or allow for
> parallel work. If I had to guess, I’d estimate about 70% of my lines of code
> is now written by Claude Code.
>
> 6 month down the line I’m still regularly impressed by Claude’s ability to
> understand our codebase, and I can find
> that I can make requests which span multiple sub-projects “add a ‘display
> name’ to this model, and make it editable in
> the studio” would make the correct changes to the db, the GraphQL SDL layer,
> the application API layer, the backend
> would get forms and fields updated. This sort of thing is the bread and butter
> of a well defined system, and the
> tooling
> continues to impress.
>
> We’ve explored the idea of having Claude Code or Copilot running on web/hosted
> infrastructure, personally, I’ve found
> it uninteresting. While these tools occasionally can do a one-shot exactly
> what we were looking for, most of the time
> you need to clone the branch and make your own changes. Could have just asked
> locally. I think it’s useful for making
> something for you to come to later, (e.g. you’re in a lot of meetings in a
> row, or you’re off for the day and want to
> have something to start with tomorrow) but to me the right abstraction is
> still that the tool is running locally and
> being supervised/guided by a developer.
>
> Because of Claude Code, I feel like I am continually asking myself: how do I
> make this codebase more explicit and each
> abstraction boundary more obvious? We’ve moved the monorepos to contain all
> context and code about their scopes, I’ve
> worked to remove as many ‘any’s as possible and I test out every new feature
> for Claude Code.
>
> I even started a meetup with a friend to get the chance to talk to others who
> are figuring out this strange new piece
> of technology. I’d like to do a final introspection on using Claude Code on
> this blog after this one is shipped.
