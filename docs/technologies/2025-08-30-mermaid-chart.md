---
layout: post
title: Mermaid Charts (Examples)
author: Shao Zelian
date: 2025-08-30
parent: 💻 Technologies
tags: [blog, markdown]
excerpt: Mermaid charts examples
---

## Gantt Diagram

~~~mermaid
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD

    section Section
    A task          :a1, 2014-01-01, 30d
    Another task    :after a1, 20d

    section Another
    Task in Another :a2, 2014-01-12, 12d
    another task    :after a2, 24d
~~~

## Mindmap Diagram

~~~mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
~~~


