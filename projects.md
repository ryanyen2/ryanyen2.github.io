---
layout: default
title: Projects
permalink: /projects/
---

# Projects

Here is a collection of <span class="annotation-highlight">notable projects</span> I've worked on. Each demonstrates different skills and approaches.

<div class="project-grid">
  {% for project in site.projects %}
  <div class="project-card">
    <h2>
      <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
    </h2>
    {% if project.date %}
    <span class="project-meta">{{ project.date | date: "%b %-d, %Y" }}</span>
    {% endif %}
    <p>{{ project.excerpt }}</p>
    <a href="{{ project.url | relative_url }}" class="read-more">View Project</a>
  </div>
  {% endfor %}
</div>

See my [[About]] page for more information about my background, or check out my [[Blog]] for my latest thoughts. 