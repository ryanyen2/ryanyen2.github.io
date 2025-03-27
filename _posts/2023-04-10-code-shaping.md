---
layout: post
title: "Code Shaping: Iterative Code Editing with Free-form Sketching"
date: 2023-04-10 09:00:00 -0500
categories: publications
breadcrumb: "Publications > Code Shaping"
---

# Code Shaping: Iterative Code Editing with Free-form Sketching

**Authors**: Ryan Yen, Jian Zhao, Zhicong Lu, Can Liu

*Published in ACM CHI 2023*

## Abstract

Code editing typically involves precise textual modifications that require developers to translate their mental models into exact syntax. In this paper, we introduce Code Shaping, a novel interaction technique that allows developers to edit code through free-form sketching gestures that approximate the desired code structure. Our system interprets these informal sketches and translates them into formal code modifications, bridging the gap between human intent and programmatic implementation. We demonstrate how Code Shaping supports various editing operations including block creation, function extraction, and control flow modification through a more direct and intuitive interface.

## Key Contributions

1. A novel interaction technique that enables code editing through approximate structural sketches
2. A recognition system that translates free-form sketches into formal code edits
3. A user evaluation demonstrating improved editing efficiency and reduced cognitive load
4. Design guidelines for integrating sketching interactions with formal programming environments

## Relation to [[Semi-formal Programming]]

Code Shaping represents an implementation of [[Semi-formal Programming]] principles, offering a middle ground between precise textual code and informal visual expressions. By allowing developers to express their intent through sketches, we reduce the formality required during the ideation and modification phases of development.

## Video Demonstration

<div class="video-container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/example" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Future Work

Our ongoing research extends Code Shaping to support:

- Multi-user collaborative sketching for pair programming
- Integration with [[CoLadder]] for multi-level abstraction editing
- Adaptive recognition based on programming context and user patterns

## Paper and Resources

- [Full Paper (PDF)](https://example.com/code-shaping.pdf)
- [Source Code (GitHub)](https://github.com/example/code-shaping)
- [Interactive Demo](https://example.com/code-shaping-demo) 