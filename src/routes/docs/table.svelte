<svelte:head>
	<title>Table</title>
</svelte:head>

<script>
  import Code from '../../components/Code.svelte'
</script>

<div class="article-meta">
  <h1>Table</h1>
</div>
<div class="article-inner">
  <h3 id="Details"><a href="#Details" class="headerlink" title="Details"></a>Details</h3>
  <h3 id="Basic-usage"><a href="#Basic-usage" class="headerlink" title="Basic usage"></a>Basic usage</h3>
  <Code html='<table>
  <thead>
    <tr>
      <th>Name</th>
      <th width="50">Age</th>
      <th width="200">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Anna Kovalsky</td>
      <td>22</td>
      <td>anna@kowalky.test</td>
    </tr>
    <tr>
      <td>John Smith</td>
      <td>52</td>
      <td>johnsmith@email.com</td>
    </tr>
  </tbody>
</table>' />
  <h3 id="Scrolling-table"><a href="#Scrolling-table" class="headerlink" title="Scrolling table"></a>Scrolling table</h3>
  <Code html='<div class="table-scroll">
  <table>
    <thead>
      <tr>
        <th width="250px" style="display: block">Title</th>
        <th width="50">Date</th>
        <th>Contant</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem ipsum dolor sit amet</td>
        <td>23.01.2019</td>
        <td style="display: block; white-space: nowrap;">Vivamus tincidunt dictum diam nec euismod. Curabitur ultricies ullamcorper nisi, vitae tempor mi suscipit in.</td>
      </tr>
      <tr>
        <td>Curabitur vel malesuada lectus.</td>
        <td>01.04.2018</td>
        <td style="display: block; white-space: nowrap;">Donec tristique vel felis eget porta. Sed ac urna sem. Nam vestibulum tincidunt luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sit amet iaculis ante. Duis in orci sit amet elit auctor semper in eu nisi.</td>
      </tr>
    </tbody>
  </table>
</div>' />
</div>