---
layout: layouts/base.njk
pageClass: parents 
templateEngineOverride: njk, md
---

<h2>{{ title }}</h2>
<p class="date">
  First note entered on <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main>
  {{ content | safe }}
</main>
