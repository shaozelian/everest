---
layout: post
title: Timer ticker
author: Shao Zelian
date: 2025-10-20
parent: CSS/HTML/JavaScript📚
tags: [css, javascript]
excerpt: Timer ticker with HTML/CSS and Javascript
---

---

<style>
  .timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background: #353536ff;
    color: rgba(244, 244, 238, 1);
    font-family: monospace;
    font-size: 3rem;
  }
</style>

<div class="timer-container">
  <div id="clock"></div>
</div>

<script>

 
$(function(){  
     const clock = document.getElementById("clock");
     setInterval(updateTime, 1000);
    updateTime();
});  

    function updateTime() {
      const now = new Date();
      const time = now.toLocaleTimeString();
      clock.textContent = time;
    }

</script>
