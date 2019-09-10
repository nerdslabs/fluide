---
layout: doc
type: css
order: 3
title: Arrangement
submenu:
  Details: Details
  Grid order: Grid-order
  Text: Text-alignment
---

### Details
Arrangement classes that you can use with fluide. 

### Grid order
{% code html %}
<div class="row row-margin grid-example">
  <div class="sm-12 lg-6 sm-order-1 lg-order-2 cell"><div>sm-12 sm-order-1 lg-order-2 lg-6</div></div>
  <div class="sm-12 lg-6 sm-order-2 lg-order-1 cell"><div>sm-12 sm-order-2 lg-order-1 lg-6</div></div>
</div>
{% endcode %}

### Text alignment
{% code html %}
<div class="row row-margin grid-example">
  <div class="sm-12 lg-6 text-left lg-text-center cell"><div>text-left lg-text-center</div></div>
  <div class="sm-12 lg-6 text-right lg-text-left cell"><div>text-right lg-text-left</div></div>
</div>
{% endcode %}