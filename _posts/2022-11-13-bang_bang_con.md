---
layout: post
title:  "BangBangCon Notes, !!Con"
---

I look forward to this conference every year now. (I've been to the last 3 including this year's.) Such a great group of people that get together to talk about very personal, different and interesting projects + learnings around computers.

# Day 1

A bunch of talks today. I didn't write down much here. There were great ideas shared certainly.

- Computers and tech is accessible to everyone
- Not a zero sum game - we should all be able to participate equally
- Not all programmers speak english. Wouldn't it be great if code could be written in one's native language. Not always an easy leap to think in english. It's not just code though - all our communities and documentation targets an english audience.
- There was a fun talk about the evolution of typography, letter pressing, the font files and the kinds of information people are stuffing into them now. (Weight, style, letter glyphs, non-letter glyphs :))

# Day 2

This was a workshop day. I attended one lead by Char Stiles about shaders and performative art with code, shaders and music. Super cool! I'm going to have to play with some of these pointers she gave us in the 2hr session. I like how graphics programming is tangible ... you can see what your code change did.

Char Stiles’s Shader Workshop
http://charstiles.com/
https://bangbangcon.com/speakers.html#char-stiles
https://www.shader.place/
Graphics eng at Nvidia

she does a kind of performative art that is like live coding of shaders next to music (and other stuff? :))

3js. Javascript library for webgl
we’re playing with fragment shaders
one of the last steps in the graphics pipeline

shader
- takes coord (x,y)
- returns array of 4 elements [r,g,b,a] that is the colour of a pixel

Links
- https://threejs.org/
- https://www.shader.place

“Casting a position in the grid as a colour for the pixel”

“Light colours is additive”

![Shader place screenshot](/assets/images/2022/char_stiles_workshop.png)￼

Creative programming

q: When should you be using a shader for something vs doing it on cpu?
Need to develop an intuition for this
- Walk cycle is better to do on-cpu (An entity that should “walk” across a scene)

https://hexler.net/kodelife
Real-time GPU shader editor

shadertoy.com is a nice community of people playing with performative live-coding with shaders

“algo-rave” :)