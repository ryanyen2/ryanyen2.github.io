---
layout: post
title: "The Untold Story of Code Shaping"
date: 2025-03-27 10:00:00 -0500
categories: blog
breadcrumb: "Blog > Code Shaping"
use_math: true
use_syntax_highlighting: true
---

If you are looking at this, it means you are as gossipy as I am. Well, this is no hot tea to spill, but I want to talk more about the insider scoop of [[Code Shaping]] <img src="/assets/images/icons/draw-pad.svg" alt="Draw Pad Icon" style="width: 24px; height: 24px; vertical-align: top;" />.

### Code Shaping is Not a System Paper

We deliberately framed **Code Shaping** as a paradigm rather than presenting it purely as a "system" paper. The primary reason behind this choice is our focus: we're less concerned about the technical and engineering specifics (like runtime optimization or integration with existing IDEs) and more invested in exploring how users interact conceptually with this new paradigm.

That doesn't mean we disregard engineering entirely. Yet, the most challenging and interesting part, and the core focus of our exploration, lies in navigating the conceptual interplay between canvas, AI, and code itself.

This conceptual focus is also why we intentionally avoided the typical system-paper “template”: formative study → build a system → evaluate → outperform baseline → Hooray (I’ve tried this before, and personally, I think it does not make any sense). Instead, we adopted an iterative approach, one without a predefined endpoint. With each iteration, we encountered both successes and failures. If you find the time to look into the paper, please pay special attention to the results sections across these iterations, they embody the true heart of our exploration.

### (No) Future Work?

I'm genuinely grateful that this paper has resonated so widely (some also made it into Instagram reel and went viral!). Many have asked me: "What’s next?" The honest, albeit brief, answer is: **I don’t yet see an approach that we are confident enough to move forward.**

Perhaps my brain isn't big enough, or maybe I haven’t thought deeply enough. But every time I attempt the next iteration or prototype, I find myself stuck between expressivity of sketch and the rigidity of code. While Code Shaping opens intriguing possibilities and could significantly enhance "vibe coding," problems arise when trying to give users more control than merely relying on AI model performance.

When we start patching formal structures to sketches, such as assigning explicit properties to sketches to help AI interpret them (akin to [Ink&Switch’s Inkbase](https://www.inkandswitch.com/inkbase/)), we inadvertently constrain the natural expressivity of users. Suddenly, users aren’t freely externalizing their thoughts; they're conforming their expressions to match the predefined system properties. In doing so, we risk losing the spontaneous, intuitive nature that makes stylus-based interactions appealing.

This tension became vividly clear in our adoption of command brush in the second iteration, which was essentially a failure. Users didn't want special brushes or predefined constraints that help the AI "understand." Instead, they wanted freedom of expression, even at the risk of ambiguity and misunderstanding by the AI. 

> <img src="/assets/images/icons/idea.svg" alt="Idea Blob Icon" style="width: 24px; height: 24px; vertical-align: middle;"> If we constrain the system too much, the interaction no longer serves the user’s genuine intentions, it serves the developer's preconceived understanding.


That's why now I'm approaching to this problem with a different angle, which we explored in [[Semi-Formal Programming]].

### I Almost Gave Up

The emotional rollercoaster is familiar territory for researchers. Throughout this project, I often questioned myself… is this work genuinely interesting? Is it practically useful? Is it generative enough to spark new ideas or provoke thought?

A significant internal conflict emerged from feedback conversations. One particularly powerful and valid criticism was: “But we don’t code on tablets.” And it's true, this practical reality kept nudging at me, pressing me to think about how we could make this approach more directly useful and integrate it seamlessly into everyday workflows.

However, a conversation with Dan provided a valuable perspective shift. He reminded me of something fundamental: the beauty of academia, particularly as a student researcher, is that we have the luxury of exploring ideas free from immediate practical constraints, free from worrying about commercial viability, product-market fit, or appeasing investors and managers. And he’s right. This freedom allows us to explore alternative, imaginative ways of interacting with code, even when those explorations don't neatly translate into immediate practicality.

We were fortunate that the paper received recognition as a Best Paper. However, this acknowledgment doesn't invalidate the skepticism or critical questions raised, it only highlights different values and approaches to research. Ultimately, the questions posed from the opposite side are still relevant and important, and they push us to think deeper and more rigorously.

In the end, Code Shaping is about exploring alternative paradigms and different ways of expressing and interacting with code, especially recognizing that some ideas are hard to capture fully in words. That, perhaps, is where its true value lies.