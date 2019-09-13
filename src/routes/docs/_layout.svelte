<script>
  import { onMount } from 'svelte'

  import { stores } from '@sapper/app';
  const { page, preloading, session } = stores();

  let menuVisible = true
  $: menuVisible

  let currentPath = typeof document !== 'undefined' ? document.location.pathname : ''
  $: currentPath

  page.subscribe(({ path, params, query }) => {
    currentPath = path
  })

  var toggleMenu = (event) => {
    menuVisible = !menuVisible
  }
</script>

<main>
  <section class="docs">
    <div class="menu-mobile" class:opened={!menuVisible} on:click={toggleMenu}><div></div></div>
    <aside class:expanded={menuVisible}>
      <div class="current"></div>
      <ul>
          <li class:current={ currentPath == '/docs' }><a href="/docs">Getting started</a></li>
      </ul>
      <div class="sep">CSS</div>
      <ul>
        <li class:current={ currentPath == '/docs/container' }><a href="/docs/container">Container</a></li>
        <li class:current={ currentPath == '/docs/grid' }><a href="/docs/grid">Grid</a></li>
        <li class:current={ currentPath == '/docs/spacing' }><a href="/docs/spacing">Spacing</a></li>
        <li class:current={ currentPath == '/docs/arrangement' }><a href="/docs/arrangement">Arrangement</a></li>
        <li class:current={ currentPath == '/docs/table' }><a href="/docs/table">Table</a></li>
      </ul>
      <div class="sep">JS</div>
      <ul>
        <li class:current={ currentPath == '/docs/scrollbar' }><a href="/docs/scrollbar">Scrollbar</a></li>
      </ul>
    </aside>
    <div class="wrapper"><slot></slot></div>
  </section>
</main>