---
layout: doc
type: css
order: 2
title: Grid
submenu:
  Details: Details
  Responsive: Responsive
  Basic usage: Basic-usage
  Margins between cells: Margins-between-cells
  Auto sizing: Auto-sizing
  SCSS variables: SCSS-variables
---

### Details
Grid is based on **Flexbox**.

### Responsive

| Breakpoint class | Breakpoint minimal width |
| ---------------- |--------------------------|
| `sm-#`        | `> 0px`                  |
| `md-#`       | `> 640px`                |
| `lg-#`        | `> 1024px`               |
| `xl-#`       | `> 1200px`               |

### Basic usage
{% code html %}
<div class="row">
  <div class="sm-12 lg-6 cell"><div>sm-12 lg-6</div></div>
  <div class="sm-12 lg-6 cell"><div>sm-12 lg-6</div></div>
</div>
{% endcode %}

### Margins between cells
{% code html %}
<div class="row row-margin">
  <div class="sm-12 lg-6 cell"><div>sm-12 lg-6</div></div>
  <div class="sm-12 lg-6 cell"><div>sm-12 lg-6</div></div>
</div>
{% endcode %}

### Auto sizing
{% code html %}
<div class="row row-margin">
  <div class="sm-6 lg-4 cell"><div>sm-6 lg-4</div></div>
  <div class="sm-6 lg-auto cell"><div>sm-6 lg-auto</div></div>
</div>
{% endcode %}

### SCSS variables
| Variable                    | Default value                                                                  |
| --------------------------- |--------------------------------------------------------------------------------|
| `$grid-columns`             | `12`                                                                           |
| `$grid-column-gutter`       | `10px`                                                                         |
| `$grid-breakpoints`         | `( sm: 0, md: 640px, lg: 1024px, xl: 1200px, xxl: 1440px, )` |
| `$grid-breakpoints-classes` | `( sm, md, lg, xl, )`                                            |