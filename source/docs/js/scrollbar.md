---
layout: doc
type: js
order: 1
title: Scrollbar
submenu:
  Details: Details
  Basic usage: Basic-usage
---

### Details
By this module you can add customizable scrollbar.

### Basic usage
{% code html %}
<div class="scrollbar" style="height: 200px">
  <div class="row">
    <div class="sm-12 cell">
      <div>
        <p>Some sample content</p>
        <p>Some sample content</p>
        <p>Some sample content</p>
        <p>Some sample content</p>
        <p>Some sample content</p>
        <p>Some sample content</p>
        <p>Some sample content</p>
      </div>
    </div>
  </div>
</div>
<script>
  new Fluide.Scrollbar('.scrollbar')
</script>
{% endcode %}
