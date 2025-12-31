---
layout: default
title: 🏠 Home
nav_order: 1
search_exclude: true
---

<style>

.home-hero-container {
  display: grid;
  gap: 20px; /* 设置间距 */
  /* 默认：移动端单列（即两行效果） */
  grid-template-columns: 1fr;
}

.image-wrapper img {
  width: 100%;
  max-width: 300px; /* 限制图片最大宽度 */
  height: auto;
  display: block;
  border-radius: 20px;
}

/* 当屏幕宽度大于 768px 时切换为两列 */
@media (min-width: 768px) {
  .home-hero-container {
    /* 第一列固定宽度（或设为图片的最大宽），第二列占满剩余空间 */
    grid-template-columns: 300px 1fr; 
    align-items: start; /* 顶部对齐 */
  }
}

</style>

<script>

window.onload = function() {
    const now = new Date();
    const newYearTime = new Date('2026-01-01T00:00:00');
    if(now <= newYearTime){
        window.location.href = "{{ '/assets/labs/2026-countdown' | relative_url }}";
    }    
};

</script>

<div class="home-hero-container" markdown="html">
    <div class="image-wrapper p-1">
        <img src="{{ '/assets/images/coffee-book.avif' | relative_url }}" />
    </div>
    <div class="fs-6 fw-300 p-1" style="text-align: center;">
        <div>
            Embracing the power of less. <br/>
            I find my peace in elegant simplicity, prioritizing the essentials over the excess.
        </div>
        <hr/>
        <div class="fs-2 mt-3" style="text-align: center;">
            <i>I find my greatest joy in life's smallest, quietest details.</i>
        </div>
        <div class="fs-2 fw-300 mt-2" style="text-align: center" markdown="html">
            <img src="{{ '/assets/images/logos/wikipedia-logo-v2.svg' | relative_url }}" style="width:24px;" />
            <a href="https://en.wikipedia.org/wiki/Minimalism" target="_blank">MINIMALISM (making more with LESS)</a>
        </div>
    </div>
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
