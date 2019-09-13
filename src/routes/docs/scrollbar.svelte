<svelte:head>
	<title>Scrollbar</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<h3 id="Details"><a href="#Details" class="headerlink" title="Details"></a>Details</h3>
<p>By this module you can add customizable scrollbar.</p>
<h3 id="Basic-usage"><a href="#Basic-usage" class="headerlink" title="Basic usage"></a>Basic usage</h3>
<Code html='<div class="scrollbar" style="height: 200px">
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
<script type="text/javascript">
  new Fluide.Scrollbar(".scrollbar")
</script>' />