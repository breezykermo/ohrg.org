---
layout: layouts/base.njk
pageClass: parents 
templateEngineOverride: njk, md
---

<div class="date">
    Posted on <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</div>
<h3>{{ title }}</h3>
<main>
  {{ content | safe }}
</main>
