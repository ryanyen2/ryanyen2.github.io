---
layout: post
title: "The Language We Forgot We Could Speak"
date: 2026-02-08 09:00:00 -0500
categories: blog
breadcrumb: "Blog > The Language We Forgot We Could Speak"
---

**Author**: Ryan Yen


### **Preface**
We often take for granted that the progress of technology is driven purely by technical advances, forgetting that it is equally a social and cultural product. The way we have thought about programming languages for seventy years, as formal, rigid, machine-oriented, is not an inevitability but a habit, one shaped by the constraints of earlier machines that we carried forward long after those constraints began to soften. 

This piece stands from the perspective of a future roughly twenty years out, written as a memoir of sorts, a reflection on an essay I wrote during my PhD and the semiformal programming research I was betting my career on at the time. It traces what changed, what held up, the cultural shifts that I envisioned in how people relate to computation, the genuine challenges of collaboration and standardization, the regulatory concerns that emerged when interpretation layers sat between human intent and machine execution, and the quiet hope that if we follow certain principles, the future might still bend toward something good.

Rather than targeting a single industry sector, the piece focuses on domain scientists and experts that cuts across sectors, marine biologists, radiologists, urban planners, epidemiologists, whose work is fundamentally computational but whose thinking lives in their own domain artifacts, including equations, clinical shorthand, sketched diagrams, spatial models. These are people who have always needed computation but have been forced to abandon their own notation to access it. 

Honestly, it is a deeply cathartic thing to write a piece like this <img src='/assets/images/icons/good-face.svg' alt='Work with Cat Icon' style='width: 24px; height: 24px; vertical-align: top;'> to sit inside the future I once only envisioned and find that the bet paid off more or less as I'd hoped. If that were the whole story, it would be comfortable. But comfort isn't the whole story. As thrilling as it is to see this future taking shape, I am equally worried by it, the technical debt these systems create, the potential for misuse, the fragility of an interpretation layer that could silently drift, and the lingering possibility that the vision hasn't fully arrived and maybe never will. But that's the beauty of the future, no one owns it, no one gets to be certain about it, and writing toward it is always an act of faith as much as prediction.

---

### **Part I: The Reef**

I'd been tracking thermal stress on a reef in Fiji, and the satellite baseline was drifting again.
A recurring problem.
On my screen, the bleaching projection pipeline was laid out the way I'd built it. Formal Python at the base for the data pipelines and computation. But the surface layer, the part I actually worked with daily, was a mix of handwritten formulas and visual annotations.

The temperature threshold lived in that surface layer as a simple assignment, a formal variable set to a hand-drawn number. When I picked up my stylus and drew a strikethrough over the old value, replacing 30.5 to 31.2, I was editing the program itself. 

That number fed into the formal Python beneath it, the part that computed raw thermal stress from the satellite data. The computation ran. The numbers changed. And then the sketched visualization underneath updated in response, the curve shifting to reflect the new stress values.

<img src="/assets/images/semi-formal/semiformal_example.svg" alt="Example of Semiformal Programming Interface" style="width: 50%; height: auto; margin: 20px 0;">

But the system didn't just recompute. It inferred.

That threshold fed into a weighted stress calculation I'd sketched weeks ago, a hand-drawn function combining raw stress with a duration factor. When the formal layer finished computing new stress values, the system looked at my sketched function and proposed an adjustment. A thin annotation appeared alongside the original, rendered in the same hand-drawn style. 

A shifted curve with a dotted extension where it had extrapolated my intent downstream.
The inference was visible, in my notation, in the same space where I'd made the edit.
If the system had misread my intent, I would have seen that too. 
The curve bending wrong, numbers drifting unexpectedly. And I would have refined the sketch to correct it, the conversation happening entirely in the visual language I'd established. The conversation between me and the machine happens entirely in my notation. 
While most of my application is still Python. The data pipelines, the infrastructure, the execution layer. The parts I actually think about and tweak daily live in a layer of math notation and sketches.

The reef is still dying, by the way.
Better tools don't change what the tools are pointed at. But that's a different essay.

---

### **Part II: Prophecy, Revisited**

That night, I pulled up an old article I'd written. An article submitted it to the MIT Envisioning the Future of Computing Prize back in 2026.
Reading it now, I laughed a few times. The prose was slightly overwrought. Some of the claims I made about the future were too bold. But overall, it held up. 

That was the time when I was doing my research on semiformal programming with my lab, building systems that let people mix natural language with formal code, sketches with functions, imprecise intent with precise execution. The article's central argument was simple, at least in retrospect. 

> Instead of writing natural language prompts to generate code from an LLM, what if we treated the informal artifacts themselves as the program? The sketches, the shorthand, the equations. Not input to a translator, but the thing that runs. Staying in the program, at the user's own level of abstraction, available to keep tweaking without ever dropping into code.
> 

The idea that a person's own notation, their own squiggly diagrams and half-formed equations, could *be* the program itself was not obvious to anyone at the time. Every programming language in existence was a formally defined mathematical object. Rigid syntax, unambiguous semantics. We wrote in the machine's terms.

---

But the vision wasn't even new. We're just not living in that world yet. And the reason... I think Grace Hopper said it best: 'Humans are allergic to change. We love to say, "We've always done it this way."'

In 1966, Jean Sammet published "The Use of English as a Programming Language" in *Communications of the ACM* (Sammet, 1966). She was imagining a future where machines could understand human language directly. Not translate it into something rigid, but understand it.

She knew the machines of 1966 couldn't do this. But she could see where things were headed.

Thirteen years later, Edsger Dijkstra wrote "On the Foolishness of 'Natural Language Programming'" (Dijkstra, 1979). His argument was precise. Natural language is ambiguous. Computers need unambiguous instructions, the details that natural language could not provide. Considering English as a programming language wasn't just technically hard. It was a category error. 

> From one gut feeling I derive much consolation: I suspect that machines to be programmed in our native tongues […] are as damned difficult to make as they would be to use. (Dijkstra, 1979)
> 

With the machines that existed in 1979, he was right. Those machines were rigid, literal, unforgiving. They couldn't infer. They couldn't fill gaps. Formal languages weren't a preference. They were a necessity. And until now, we still use formal language as it provides details about requirements that we needed.

But Sammet wasn't wrong either. She was early. 

For seventy years after, "programming language" meant a language for computers, not for humans. We kept climbing the ladder of abstraction, from machine code to assembly to FORTRAN to Python, each rung promising to be more readable, more intuitive. But each rung introduced its own concepts, its own rules, its own ways of breaking. The fundamental demand never changed. Translate your thinking into the machine's terms before it will listen.

Going further back, before programming languages existed at all, the word "computer" meant a person. In 1945, about a hundred women worked as human computers at the University of Pennsylvania, calculating artillery trajectories (Light, 1999). A physicist would hand them an equation, some beautiful ambiguous thing full of implicit assumptions and contextual shortcuts. The human computers would expand it, fill in the gaps, interpret the shorthand. They were flexible interpreters between messy intent and precise execution.

When ENIAC arrived, six of those women became its first programmers. But the machine couldn't do what they had done. It couldn't infer, couldn't tolerate shortcuts. Every operation had to be stated. So we adapted. We learned to be more rigid. And we stayed rigid for seventy years.

---

### **Part III: The Bottleneck Moves**

When I wrote my essay in 2026, large language models had just shown that you could describe what you wanted in plain English and the model would generate code.

The headlines were ecstatic. "The End of Programming." "No Code Required." By 2025, Andrej Karpathy had coined "vibe coding" to describe this practice of fully giving in to the vibes, letting the LLM generate all the code while the human provides goals and feedback in natural language (Karpathy, 2025).

But a funny thing happened in the two years that followed.

Most people still couldn't code.

Natural language prompts produced code in an entirely separate form from the input. A person described what they wanted in a sentence. The model responded with an artifact written in a different language, governed by different rules, expressing details the person never specified. 

And as the models improved, the gap widened. 

A single line of English could generate an entire codebase. The model was filling in hundreds of decisions the user hadn't consciously made. Variable names, data structures, error handling strategies, architectural choices.

Scientists and domain experts thought they finally wouldn't have to code. But they still had to evaluate whether those inferred decisions matched their actual intent. And there was no mechanism to do that, because their intent had never been expressed at that level of detail. In most cases, when we're first building tools or exploring data, we genuinely don't have clear thoughts on many of those decisions yet (Kery, 2017).

The evidence for this problem was already accumulating. 

Non-experts trying to steer LLMs through prompts explored prompt designs opportunistically, not systematically, and struggled in ways echoing earlier end-user programming systems (Zamfirescu-Pereira et al., 2023). Beginning programmers and Code LLMs tended to misread each other, and if students who already had basic programming skills struggled, then the full natural language-to-code task must be very challenging indeed for true novices (Nguyen et al., 2024). Scientists using Code LLMs were typically confident they could catch errors, but user logs revealed several instances where unintended behaviors were introduced that could have scientific ramifications (Drosos et al., 2025).

The pattern was consistent. The bottleneck didn't disappear. It moved.

---

### **Part IV: Notation as Program**

What semiformal programming proposed was different in a specific way. The notation itself was the program, not input to a code generator. And instead of describing what you wanted in natural language and receiving back generated code, you worked directly in your domain's notation. 

Where you had certainty, you wrote precise formal code. Where you were still exploring, you sketched, annotated, or wrote in your domain's shorthand. The interpretation layer inferred the rest, but critically, it rendered its inferences back in the same notation you'd used.

Return to the reef scenario. When I changed that temperature threshold value, I wasn't prompting an LLM to regenerate my thermal stress pipeline. I was editing a value that was already part of the program. The formal Python computed new stress values. The sketched visualization updated reactively. 

And when the system inferred that my downstream weighting function should adjust, it showed me that inference as a sketched curve, rendered in the same hand-drawn style I'd established. Not as generated Python code I'd need to review and accept. As a visual proposal I could immediately evaluate because it was in my language.

This solved the vibe coding problem that even hundreds of decisions that a code generator makes implicitly, I was making explicitly, but only at the level of detail I cared about. No context switch to generated code. No wondering whether variable names or error handling matched my intent, because those details never surfaced to the layer I was working in.

The system learned my notation over time, assigning computational semantics to my marks.
Once a sketched curve meant something, reusing that pattern produced the same behavior. The program became a living document where some parts were precise and some parts were sketches, and both executed.

---

### **Part V: The Vernaculars**

This idea was genuinely hard to sell at the beginning.
The models weren't stable enough. They drifted, they hallucinated. The same sketch might get interpreted differently across different models. 

But the idea really took off around 2031, when the interpretation layer got reliable enough that practitioners started quietly incorporating semiformal elements into real workflows. At first it was about speed. Less boilerplate, faster iteration, more time thinking about the actual problem.

But then something else happened. 
People started building software that was malleable and highly customizable. Applications that weren't frozen artifacts but living documents you could converse with in your own terms, without ever touching "source code." My reef application isn't a fixed program I wrote once. It's a layered thing. Python underneath for what needs to be rock solid. My sketches and math on the surface for what I'm always adjusting. And the interpretation layer in between, doing the work that human computers did in 1945.

And once that pattern proved itself, it spread.
What it enabled was that scientists and domain experts across fields could work computationally without first translating their expertise into a programmer's vocabulary. Each domain found its own version of the same principle: stay in your notation, let the machine meet you there.

Healthcare was one of the earliest adopters outside of research. 
Consider how a radiologist works with a diagnostic imaging pipeline today. She opens a chest X-ray in her clinical workspace. The underlying classifier is formal, a convolutional neural network with precisely defined architecture. 

But the test sets annotation system is semiformal. 
She circles a region of interest on the image with her stylus, draws an arrow to the margin, and writes in her clinical shorthand: *GGO, peripheral, R lower*. The system interprets the annotation as a labeled bounding box with tissue classification. It renders its interpretation back onto the same image: a shaded overlay on the region it believes she indicated, with a label showing the inferred classification and confidence score. 

If the boundary is wrong, she adjusts it. If the classification is off, she crosses out the label and writes the correction. The conversation is entirely visual, entirely on the image itself, in the vocabulary she already uses in her clinical notes.

When bias audits revealed that diagnostic models performed unevenly across demographic groups, the same semiformal principle applied. 
Clinicians could open what amounted to a semiformal spreadsheet, part formal data schema, part annotated clinical judgment. A column might contain structured patient data; the adjacent cell might hold a handwritten note: *underrepresented, rural Indigenous communities, n < 30, weight ×2*. The system inferred a rebalancing strategy from the annotation and showed the proposed adjustment as a highlighted redistribution in the same spreadsheet view, a modified weight column the clinician could review and edit directly. 

The machine learning pipeline underneath remained formal and auditable. 
But the decisions about what "fair" meant in this clinical context were expressed by the people who understood fairness in that domain, in their own terms, without needing to understand the pipeline itself.

The common thread across domains that adopting semiformal programming workflow wasn't the specific notation. 
It was that scientists and practitioners, people whose primary expertise was in medicine or urban systems or marine ecology rather than in software engineering, could direct computational processes in the language of their own discipline. A radiologist's clinical shorthand, an urban planner's 3d modelling, a marine biologist's written LaTex formula: each became their domain-specific program.

---


### **Part VI: The Challenges**

But I need to be honest about what went wrong.

In my 2026 essay, I worried about collaboration. If everyone writes in their own notation, how does anyone share work? Python meant the same thing to everyone who wrote Python. My squiggly sketches don't necessarily mean the same thing as my colleague's in Fiji.

I had a hypothesis about how this might resolve. 
Sociolinguistics had already studied exactly this kind of convergence. When people share a goal, they naturally adjust their communication styles toward each other. Not because anyone mandates it, but because mutual understanding requires it (Giles et al., 2023). When groups engage in shared activity over time, they develop common vocabulary and negotiated conventions that emerge from use rather than from top-down standardization (Wenger, 1998). Members converge not to lose individuality but to enable communication (Eckert & McConnell-Ginet, 1992).

I suspected something like folksonomy would happen (Trant, 2009), the way users on early social platforms organically converged on shared hashtags without anyone dictating which tags to use. A community would gravitate toward common marks simply because shared marks are more useful than private ones.

While this is largely what played out, in the early days of widespread adoption, there were genuine disasters. 
Research teams couldn't merge their models because their notations were mutually unintelligible. Companies tried to onboard new engineers and found that the "codebase" was a personal artifact only its creator could read. For a while, it looked like semiformal programming might fragment the field worse than it helped.

But gradually, domain by domain, shared patterns began to crystallize. 
Marine biologists working on thermal stress developed shared conventions for expressing bleaching thresholds. It happened the way any community develops shared slang: through use, repetition, and the slow pressure of needing to be understood. 

Corporations began publishing what amounted to "semiformal language protocols," internal style guides that defined which notations carried which computational semantics within their organization. 

It was not unlike how circuit diagram symbols converged to international standards over decades of engineering practice, or how musical notation evolved from idiosyncratic marks to a system musicians worldwide can read, or how UML emerged because the software engineering community had too many competing visual notations and needed common ground (Booch, Rumbaugh, & Jacobson, 1999). In each case, convergence was driven by communicative need, not by committee.

That said, the convergence is uneven, and I suspect it always will be. 
Some fields developed tight conventions quickly. Others remain fragmented. Different domains have different tolerance for ambiguity. Each found its own level of formality. Where failure is catastrophic, more formal. Where flexibility helps more than rigidity, more informal.

---
### **Part VII: There will be Code**

So where does this leave us?

I'm glad the idea took off, though the path surprised me. The concept of "programming language" has genuinely shifted toward the human side. People in the same field share notation the way people from the same culture share slang. They understand each other, more or less, with room for personal variation. Not the rigid universality of Python, but not chaos either.

Something in between.

But "something in between" is exactly where the hard design questions live. Semiformal systems are powerful because they are flexible. They are dangerous for the same reason. The interpretive layer that makes a radiologist's shorthand executable is the same layer that can silently drift when a model updates, inferring a subtly different meaning from the same annotation.

This is why formal languages are not going away (Martin, 2009). 
The most important development wasn't about notation at all. It was about verification. Teams learned, sometimes the hard way, to write formal test specifications alongside their semiformal programs. Even if the program itself is sketchy and interpretive, the tests are precise. The interpretation layer can drift, can be nondeterministic, can update with new model versions. But the tests catch it.

Regulation focused on the right place. 
The artifact that a domain expert edits is not the same artifact that executes on the machine, and the interpretation layer between them is where risk concentrates. Medical device software requires formal verification beneath any semiformal interface. Aviation systems still use rigid languages for flight-critical code. Financial systems enforce deterministic test suites that run on every model update.

The transformation was foundational. 
For seventy years, the bottleneck on what humanity could build with computers was the requirement that humans think like compilers. Removing that bottleneck didn't just help programmers. It helped the marine biologist, the teacher, the urban planner, the epidemiologist, the agronomist. None of them needed to learn Python. They needed the machine to learn them.
That is the highest net positive transformation AI has offered. Not replacing human thinking but making it executable. Not generating code on behalf of people, but eliminating code as the mandatory intermediary between intention and action.

---

### **Part VIII: The Last Compiler**

I want to end with a prediction, because I made one twenty years ago and the tradition feels important, even if I'll be embarrassed by it later.

Right now, every semiformal system still transpiles to a formal host language for execution. My sketches become Python. The interpretation layer is sophisticated, but at the bottom of the stack, there's still a compiler, still the old rigid machinery.

I don't think that has to be permanent.
We're approaching a point where the generation and interpretation speed of language models are essentially real-time. If the model can interpret a sketch as fast as I can draw it, and execute the interpretation as fast as I can observe it, then the formal code in between becomes an implementation detail that could, in principle, be eliminated.

I'm imagining something like semiformal execution. Not compilation from informal to formal to machine code, but direct, continuous interpretation of the semiformal artifact itself. The model doesn't generate code from your sketch. It runs your sketch. With a human-in-the-loop reinforcement learning process that keeps the interpretation honest, a system that treats execution not as a one-time translation but as an ongoing conversation between intent and behavior.

This would mean fundamentally rethinking the compiler. Not as a formal-to-formal translator but as a real-time interpreter of mixed human expression.

Is this realistic? I genuinely don't know. It might take another twenty years. Sammet made a prediction in 1966 that took sixty years to arrive.

Well, I guess being wrong in the short term and right in the long term looks exactly the same as being wrong, until suddenly it doesn't.

---

### References

Booch, G., Rumbaugh, J., & Jacobson, I. (1999). *The Unified Modeling Language User Guide*. Addison-Wesley.

Dijkstra, E. W. (1979). On the foolishness of "natural language programming." *EWD667*.

Drosos, I., et al. (2025). How scientists use large language models to program. *CHI '25*.

Eckert, P., & McConnell-Ginet, S. (1992). Think practically and look locally: Language and gender as community-based practice. *Annual Review of Anthropology, 21*, 461-490.

Giles, H., Edwards, A. L., & Walther, J. B. (2023). Communication accommodation theory: Past accomplishments, current trends, and future prospects. *Language & Communication, 93*, 3-12.

Karpathy, A. (2025, February 2). "There's a new kind of coding I call 'vibe coding'..." [Post]. X.

Kery, M. B., & Myers, B. A. (2017, October). Exploring exploratory programming. In 2017 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC) (pp. 25-29). IEEE.

Light, J. (1999). When computers were women. *Technology and Culture, 40*(3), 455-483.

Martin, R. C. (2009). Clean code: a handbook of agile software craftsmanship. Pearson Education.

Nguyen, S., et al. (2024). How beginning programmers and Code LLMs (mis)read each other. *CHI '24*.

Sammet, J. E. (1966). The use of English as a programming language. *Communications of the ACM, 9*(3), 228-230.

Trant, J. (2009). Studying social tagging and folksonomy: A review and framework.

Wenger, É. (1998). *Communities of Practice: Learning, Meaning, and Identity*. Cambridge University Press.

World Economic Forum. (2025). *Future of Jobs Report 2025*.

Zamfirescu-Pereira, J. D., et al. (2023). Why Johnny can't prompt: How non-AI experts try (and fail) to design LLM prompts. *CHI '23*.