<svelte:head>
	<title>Grid</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<div class="article-meta">
  <h1>Grid</h1>
</div>
<div class="article-inner">
  <div class="article-entry" itemprop="articleBody">
    <h3 id="details">Details</h3>
    <p>Grid is based on <strong>Flexbox</strong>.</p>
    <h3 id="responsive">Responsive</h3>
    <table>
      <thead>
        <tr>
          <th id="breakpoint_class">Breakpoint class</th>
          <th id="breakpoint_minimal_width">Breakpoint minimal width</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>sm-#</code></td>
          <td><code>&gt; 0px</code></td>
        </tr>
        <tr>
          <td><code>md-#</code></td>
          <td><code>&gt; 640px</code></td>
        </tr>
        <tr>
          <td><code>lg-#</code></td>
          <td><code>&gt; 1024px</code></td>
        </tr>
        <tr>
          <td><code>xl-#</code></td>
          <td><code>&gt; 1200px</code></td>
        </tr>
      </tbody>
    </table>
    <h3 id="basic-usage">Basic usage</h3>
    <Code html='<div class="row">
  <div class="sm-12 lg-6 cell">
    <div>sm-12 lg-6</div>
  </div>
  <div class="sm-12 lg-6 cell">
    <div>sm-12 lg-6</div>
  </div>
</div>' />
    <h3 id="margins-between-cells">Margins between cells</h3>
    <Code html='<div class="row row-margin">
  <div class="sm-12 lg-6 cell">
    <div>sm-12 lg-6</div>
  </div>
  <div class="sm-12 lg-6 cell">
    <div>sm-12 lg-6</div>
  </div>
</div>' />
    <h3 id="auto-sizing">Auto sizing</h3>
    <Code html='<div class="row row-margin">
  <div class="sm-6 lg-4 cell">
    <div>sm-6 lg-4</div>
  </div>
  <div class="sm-6 lg-auto cell">
    <div>sm-6 lg-auto</div>
  </div>
</div>' />
    <h3 id="scss-variables">SCSS variables</h3>
    <table>
      <thead>
        <tr>
          <th id="variable">Variable</th>
          <th id="default_value">Default value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>$grid-columns</code></td>
          <td><code>12</code></td>
        </tr>
        <tr>
          <td><code>$grid-column-gutter</code></td>
          <td><code>10px</code></td>
        </tr>
        <tr>
          <td><code>$grid-breakpoints</code></td>
          <td><code>( sm: 0, md: 640px, lg: 1024px, xl: 1200px, xxl: 1440px, )</code></td>
        </tr>
        <tr>
          <td><code>$grid-breakpoints-classes</code></td>
          <td><code>( sm, md, lg, xl, )</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>