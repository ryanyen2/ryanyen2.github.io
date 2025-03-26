---
layout: default
title: Blog
permalink: /blog/
---

# Blog

Welcome to my <span class="annotation-highlight">thoughts and projects</span> collection. Here you'll find posts about my work, interests, and ideas.

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}" class="read-more">Read more...</a>
  </li>
  {% endfor %}
</ul>

## Topics

Some key topics I write about:

- <span class="annotation-underline">Design Thinking</span>
- <span class="annotation-underline">Technical Projects</span>
- <span class="annotation-underline">Research</span>

See my [[About]] page for more about my background. 