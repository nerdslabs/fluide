<svelte:head>
	<title>Spacing</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<div class="article-meta">
  <h1>Spacing</h1>
</div>
<div class="article-inner">
  <h3 id="Details"><a href="#Details" class="headerlink" title="Details"></a>Details</h3>
  <p>Classes for controlling margin and padding. Apply a class based on <code>(p|m)(l|r|t|b|v|h)-[0-20]</code>. You can
    also use this classes with breakpoints, for example: <code>md-mv-10</code>.</p>
  <h3 id="Basic-usage"><a href="#Basic-usage" class="headerlink" title="Basic usage"></a>Basic usage</h3>
  <Code html='<div class="row row-margin">
  <div class="sm-12 lg-6 cell"><div class="pl-10 pv-4">.pl-10</div></div>
  <div class="sm-12 lg-6 cell"><div class="mt-10 lg-mt-0 lg-pv-4">.mt-10.lg-mt-3</div></div>
</div>' />
  <h3 id="SCSS-variables"><a href="#SCSS-variables" class="headerlink" title="SCSS variables"></a>SCSS variables</h3>
  <table>
    <thead>
      <tr>
        <th>Variable</th>
        <th>Default value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>$spacing-points</code></td>
        <td><code>10</code></td>
      </tr>
    </tbody>
  </table>
</div>