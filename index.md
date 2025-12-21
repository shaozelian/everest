---
layout: default
title: 🏠 Home
nav_order: 1
search_exclude: true
---

<div class="homepage-hero" markdown="block">

![Coffee & Books]({{ '/assets/images/coffee-book.avif' | relative_url }})

> Embracing the power of less. I find my peace in elegant simplicity, prioritizing the essentials over the excess.
> {: .fs-6 .fw-300 }
> I find my greatest joy in life's smallest, quietest details.
> {: .fs-6 .fw-300 }
> ![Wikipedia]({{ '/assets/images/Wikipedia-logo-v2.svg' | relative_url }}){: width="24" }
> [MINIMALISM (making more with LESS)](https://en.wikipedia.org/wiki/Minimalism)
> {: .fs-3 .fw-300 }

</div>

---

## Recent Articles

{% assign articles = site.html_pages | where_exp: "item", "item.path contains 'docs/'" | where_exp: "item", "item.date" | sort: "date" | reverse %}

<div class="latest-articles" markdown="0">
  {% for article in articles limit:5 %}
    <div class="article" markdown="0">
        <div class="title fs-6 fw-300" markdown="0">
            <a href="{{ article.url | relative_url }}">{{ article.title }}</a>
        </div>
        <div class="meta-data">      
        {% if article.author %}
            <span class="author">👤 {{ article.author }}</span>
        {% endif %}

        {% if article.date %}
            <span> | 📅 Created: {{ article.date | date: "%Y-%m-%d" }}</span>
        {% endif %}

        {% if article.last_modified_at %}
            <span> | 📅 Last updated: {{ article.last_modified_at | date: "%Y-%m-%d" }}</span>
        {% endif %}

        {% if article.tags %}
            | 🏷️ Tags: 
            {% for tag in article.tags %}
                <span class="label label-purple" style="font-size: 9px !important">{{ tag }}</span>
            {% endfor %}
        {% endif %}
        </div>
        <div class="Excerpt">
            {% if article.excerpt %}
                {{ article.excerpt | strip_html | truncatewords: 30 }}
            {% else %}
                {{ article.content | strip_html | truncatewords: 30 }}
            {% endif %}
        </div>
    </div>
  {% endfor %}
</div>
