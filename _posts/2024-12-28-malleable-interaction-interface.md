---
layout: post
title: "Malleable Interaction Interface"
date: 2024-12-28 09:00:00 -0500
categories: publications
breadcrumb: "Publications > Malleable Interaction Interface"
---

# Malleable Interaction Interface

**Authors**: Ryan Yen



Malleable software, a vision proposed by Philip Tchernavskij in his 2019 PhD thesis, refers to interfaces that allow users to freely manipulate and recombine interactive elements, contrasting with traditional apps that offer limited, predefined interaction methods. In essence, malleable software provides a flexible canvas where users can shape their digital environment to match their needs and thought processes.

Building on this foundation, I would like to extend the concept to focus more deeply on the interaction between humans and these malleable interfaces. By considering the relationship between users and the system, we can examine how technology can adapt to human cognition rather than forcing humans to adapt to rigid technological constructs.

## Freedom of Expression

To better grasp this concept, let's follow Alicia, a data scientist, as she explores a new dataset: Alicia begins by searching the web for visualization tools suited to her data. After researching, she chooses Vega-Lite, a declarative programming language for creating interactive visualizations. Alicia opens a code editor and prepares to type the Vega-Lite code manually.

However, is Alicia confined to this single method? Not at all. She has multiple options for creating her visualization. She can write imperative code using D3.js, describe her desired plot to ChatGPT using natural language, use a low-code GUI interface like Tableau, or even sketch her visualization and convert it to code with Microsoft's SketchToCode.

To consider which approach is easier for Alicia to translate her thoughts into actions the system understands, we can evaluate the "directness" of each interaction based on the **distance between the user's intention** (plot visualization) **and the actual visual representation (code, image, sketches).** We can arrange Alicia's options on a spectrum of directness if she wants to articulate her thoughts about the bar chart in a visual format:

```
D3.js → Vega-Lite → Visual Programming Language → GUI → Output-Directed Programming → Freeform Sketching
```

As we move from left to right on this spectrum, the distance between her thought and representation generally decreases, meaning the expression of ideas becomes more natural to her thought process.

However, Alicia might not always think about the code in visual form. For example, if she wants to iterate through data, she might prefer a for loop or other linguistic equivalent. Hence, the ideal malleable interface would allow her to switch between these different modes of expression. This is the first and pivotal aspect of malleable interaction interfaces: the freedom they **afford users to express their intentions flexibly across various levels of abstraction**. Yet, this requires thoughtful design, as simply integrating all tools together and juxtaposing them with each other does not work effectively.

## Designing for Code Properties, Not Just Code

Having explored the spectrum of representations available to Alicia, let's investigate the malleable interaction interface from the perspective of code as an entity. Why use programming as an example context to discuss malleable interfaces? The key lies in the abstract and polymorphic nature of code itself.

Unlike physical objects with fixed forms, code is inherently shapeshifting. It lacks a definitive visual representation, instead adapting to the substrate in which it exists. This flexibility allows code to manifest in various forms:

- As syntactic language in a code editor
- As visual diagrams in UML
- As tangible output in the form of data visualizations or user interfaces

This chameleon-like quality of code makes it a perfect subject for exploring malleable interface interactions. However, this polymorphic nature makes designing the substrate to afford the malleability of code quite challenging.

This scenario illustrates a key principle in designing malleable interfaces: **focus on the essential properties required to perform a task, rather than on a specific tool or form**. In the context of code and programming interfaces, this means we should design for the properties of code - its logic, structure, and functionality - rather than constraining ourselves to think of code solely as text to be typed into an editor.

## Balancing Constraint and Freedom

While I've emphasized the benefits of flexibility in adjusting or lowering the distance between the human thinking process and visual representations, it comes with a significant trade-off. In a fixed scenario, the distance between cognition and the lowest-level programming language remains unchanged regardless of the chosen representation. Therefore, the more freedom users are granted (closer to the human side), the more ambiguous it becomes for the system to understand (further from the system side) what the human thought is. The relationship between the visual representation and its underlying meaning becomes more arbitrary and indirect. Users might have to work harder to ensure their free-form inputs are interpreted correctly by the system.

When a system offers a singular mode of expression, users learn how to adapt to it. For example, we are taught to "think like a programmer" in a CS101 crash course. In contrast, too much freedom can lead to frustration when attempting to pinpoint errors or perform simple tasks. Consider TLDraw's make-real demo, which allows users to generate working HTML, JS, and CSS code from a drawn UI. While initially empowering, it can become cumbersome when users need to make minor adjustments, such as changing the color of a single widget iteratively.

This balance between freedom and constraint is at the heart of designing effective malleable interfaces. The goal is to provide flexibility that matches users' natural thought processes while still offering enough structure to make the interface predictable and efficient to use.