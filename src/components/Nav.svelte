<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
  
  $: scrolled = false

  var headerScrolled = (event) => {
    if ((event.target.documentElement || event.target).scrollTop > 0) {
      scrolled = true
    } else {
      scrolled = false
    }
  };

  let currentPath = typeof document !== 'undefined' ? document.location.pathname : ''
  $: currentPath

  page.subscribe(({ path, params, query }) => {
    currentPath = path
  })

	export let segment, scrolled;
</script>

<svelte:window on:load={headerScrolled} on:scroll={headerScrolled} on:scroll={headerScrolled}/>

<header class:scrolled={scrolled} class:home={currentPath == '/'}>
  <div class="container full">
    <div class="row">
      <div class="sm-4 lg-6 cell">
        <a class="logo" href="/">
          <img src="/images/logo.svg" alt="">
          <span>fluide</span>
        </a>
      </div>
      <div class="sm-8 lg-6 cell text-right">
        <nav>
          <a class="main-nav-link" href="/">Home</a>
          <a class="main-nav-link" href="/docs">Docs</a>
          <a href="https://github.com/nerdslabs/fluide" class="stars" target="_blank"><img alt="github" src="https://img.shields.io/github/stars/nerdslabs/fluide.svg?style=social&label=Stars"></a>
          <div class="search-algolia"><input type="text" placeholder="Search..."></div>
        </nav>
      </div>
    </div>
  </div>
</header>