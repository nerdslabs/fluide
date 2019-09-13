<script>
  export let html
  export let preview = true
  export let language = null

  import { onMount } from 'svelte'
  import hljs from 'highlight.js'
  import Fluide from 'fluide'

  hljs.configure({
    languages: ['html', 'css', 'scss', 'javascript']
  })

  let element
  $: element

  let toEval

  function evalWithVariables(func, vars) {
    return new Function("v", "with (v) { return (" + func +")}")(vars);
  }

  let code = ""

  onMount(async () => {
    if (typeof window.Fluide === 'undefined') {
      window.Fluide = Fluide
    }

    hljs.highlightBlock(element)

    code = html

    setTimeout(() => {
      let scripts = toEval.getElementsByTagName('script')
      for (let i = 0; i < scripts.length; i++) {
        evalWithVariables(scripts[i].innerHTML, { Fluide })
      }
    }, 300)
  })
</script>

<div class="code">
  <pre bind:this={element}>{html}</pre>
  {#if preview}
    <div class="preview" bind:this={toEval}>{@html code}</div>
  {/if}
</div>
