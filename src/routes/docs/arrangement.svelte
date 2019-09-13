<svelte:head>
	<title>Arrangement</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<div class="article-meta">
  <h1>Arrangement</h1>
</div>
<div class="article-inner">
  <h3 id="Details"><a href="#Details" class="headerlink" title="Details"></a>Details</h3>
  <p>Arrangement classes that you can use with fluide. </p>
  <h3 id="Grid-order"><a href="#Grid-order" class="headerlink" title="Grid order"></a>Grid order</h3>
  <Code html='<div class="row row-margin grid-example">
  <div class="sm-12 lg-6 sm-order-1 lg-order-2 cell"><div>sm-12 sm-order-1 lg-order-2 lg-6</div></div>
  <div class="sm-12 lg-6 sm-order-2 lg-order-1 cell"><div>sm-12 sm-order-2 lg-order-1 lg-6</div></div>
</div>' />
  <h3 id="Text-alignment"><a href="#Text-alignment" class="headerlink" title="Text alignment"></a>Text alignment</h3>
  <Code html='<div class="row row-margin grid-example">
  <div class="sm-12 lg-6 text-left lg-text-center cell"><div>text-left lg-text-center</div></div>
  <div class="sm-12 lg-6 text-right lg-text-left cell"><div>text-right lg-text-left</div></div>
</div>' />
</div>