---
title: Marx's Capital 
date: 2020-05-18
---

<ul class="listing">
{%- for page in collections.marx -%}
    <li>
        <a href="{{ page.url }}">{{ page.data.title }}</a> -
        <time datetime="{{ page.data }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
    </li>
{%- endfor -%}
</ul>


