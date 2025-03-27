---
layout: post
title: "Semi-formal Programming"
date: 2023-05-20 10:00:00 -0500
categories: blog
breadcrumb: "Blog > Semi-formal Programming"
---

# Semi-formal Programming

Semi-formal programming represents an intermediate approach between formal, strictly-typed programming languages and informal natural language instructions. It aims to bridge the gap between how humans think about problems and how computers execute solutions.

## Why Semi-formal?

Traditional programming requires developers to translate their mental models into rigid syntax and structures that computers can understand. This translation process introduces cognitive load and potential errors.

On the other hand, fully natural language programming (like [[prompting]] LLMs) lacks precision and predictability.

Semi-formal programming seeks a middle ground by:

1. Allowing more flexible and intuitive expression of intent
2. Maintaining sufficient structure for reliability and verification
3. Reducing the gap between thinking and implementing

## Approaches to Semi-formal Programming

Several paradigms explore this space:

- **Visual Programming**: Tools like Scratch and Blueprints provide visual metaphors that are more intuitive while maintaining structure
- **Literate Programming**: Weaving code and documentation together as in Jupyter notebooks
- **Constraint-based Programming**: Defining what should be true rather than explicit steps
- **[[Domain Specific Languages]]**: Creating mini-languages tailored to specific problem domains

## Connection to My Research

My work on [[Code Shaping]] explores how free-form sketching can serve as a semi-formal interface for code editing. Rather than writing exact syntax, developers sketch approximate shapes and structures, which are then interpreted and formalized by the system.

Similarly, [[CoLadder]] investigates how multi-level block abstractions can provide different levels of formality when working with generative code systems.

## Future Directions

I believe semi-formal programming will become increasingly important as we develop more sophisticated ways to translate between human intent and machine execution. Future research might explore:

- Bidirectional translation between formal and informal representations
- Adaptive interfaces that adjust formality based on context
- Multi-modal input combining sketching, natural language, and formal code

Let me know your thoughts on semi-formal programming approaches in your own work! 