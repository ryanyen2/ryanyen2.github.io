---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <h2>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <p>{{ post.excerpt }}</p>
  </li>
  {% endfor %}
</ul> 