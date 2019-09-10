---
layout: doc
type: css
order: 5
title: Spacing
submenu:
  Details: Details
  Basic usage: Basic usage
---

### Details
Classes for controlling margin and padding. Apply a class based on `(p|m)(l|r|t|b|v|h)-[0-20]`. You can also use this classes with breakpoints, for example: `md-mv-10`.

### Basic usage
{% code html %}
  <div class="row row-margin">
    <div class="sm-12 lg-6 cell"><div class="pl-10 pv-4">.pl-10</div></div>
    <div class="sm-12 lg-6 cell"><div class="mt-10 lg-mt-0 lg-pv-4">.mt-10.lg-mt-3</div></div>
  </div>
{% endcode %}

### SCSS variables
| Variable                    | Default value                                                                  |
| --------------------------- |--------------------------------------------------------------------------------|
| `$spacing-points`             | `10`                                                                       |