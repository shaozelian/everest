---
layout: post
title: CSS border animiation
author: Shao Zelian
date: 2025-08-31
parent: CSS/HTML/JavaScript📚
tags: [css]
excerpt: To make border animated using css only
---

---

<style>

  .demo-card {
    margin: 0 auto;
    padding: 2em;
    width: 300px;
    background: #1c1f2b;
    text-align: center;
    border-radius: 30px;
    position: relative;
    color: white;
  }

  .demo-card h1{
    color: white;
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  .demo-card::after,
  .demo-card::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    padding: 0px;
    border-radius: 30px;
    animation: 3s spin linear infinite;
  }

  .demo-card::before {
    filter: blur(1.5rem);
    opacity: 0.9;
  }

  @keyframes spin {
    from {
      --angle: 0deg;
    }

    to {
      --angle: 360deg;
    }
  }
</style>

<div class="demo-card">
  <h1>Animate Borders</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et, natus
    impedit quae veniam optio a doloremque officiis beatae, itaque nesciunt nostrum quasi molestiae laudantium dolor
    asperiores soluta sint sed ratione cupiditate. Laudantium earum reiciendis enim.</p>
</div>
