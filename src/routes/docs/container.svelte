<svelte:head>
	<title>Container</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<div class="article-meta">
  <h1>Container</h1>
</div>
<div class="article-inner">
  <h3 id="Details"><a href="#Details" class="headerlink" title="Details"></a>Details</h3>
  <p><strong>Default container <code>max-width</code> is <code>1200px</code></strong></p>
  <p>You can change it, if you use <code>SCSS</code> version of fluide by setting variable before mixins.<br></p>
  <Code preview={false} language="css" html='$global-width: 1200px;' />
  <h3 id="Basic-usage"><a href="#Basic-usage" class="headerlink" title="Basic usage"></a>Basic usage</h3>
  <Code preview={false} html='<div class="container"></div>' />
  <h3 id="Fluid"><a href="#Fluid" class="headerlink" title="Fluid"></a>Fluid</h3>
  <p>After adding class <code>fluid</code> to <code>container</code> it will have <code>100%</code> width but with margins on left and right side.</p>
  <Code preview={false} html='<div class="container fluid"></div>' />
  <p><br/></p>
  <p>Default margin is <code>10px</code>, you can change it by setting variable:</p>
  <Code preview={false} html='$grid-column-gutter: 10px;' />
  <h3 id="Full"><a href="#Full" class="headerlink" title="Full"></a>Full</h3>
  <p>After adding class <code>full</code> to <code>container</code> it will have <code>100%</code> width.</p>
  <Code preview={false} html='<div class="container full"></div>' />
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
        <td><code>$global-width</code></td>
        <td><code>1200px</code></td>
      </tr>
    </tbody>
  </table>
</div>