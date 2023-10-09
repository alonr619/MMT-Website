<!-- Component for that shadow box with glow on hover thing -->
<script>
  import { fade, fly } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { query_selector_all } from 'svelte/internal';
  
  let isInView;
  
  export let width = "unset";
  export let height = "unset";
  export let margin = "10px";
  export let padding = "10px";
  export let borderRadius = "5px";
  export let style = "";
  export let boxSizing = "border-box";
  export let time = 0;
</script>

<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-0%' }}
  on:inview_change={(event) => {
    const { inView, entry, scrollDirection, observer, node} = event.detail;
    isInView = inView;
  }}
>
  {#if isInView}

<div  transition:fade={{duration:1000, delay:time}} class="panel-box"  style="width: {width}; height: {height}; margin: {margin}; padding: {padding}; border-radius: {borderRadius}; box-sizing: {boxSizing}; {style}">
  <slot />
</div>

{:else}
<div  class="panel-box-hidden"  style="width: {width}; height: {height}; margin: {margin}; padding: {padding}; border-radius: {borderRadius}; box-sizing: {boxSizing}; {style}">
  <slot />
</div>
{/if}
</div>
<style>
  .panel-box {
    background-color: #ffffff;
    box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.1);
    opacity: 0.8;
    transition: 0.5s;
  }

  .panel-box-hidden{
    background-color: transparent;
    box-shadow: 5px 10px 10px rgb(0, 0, 0, 0.1);
    opacity: 0.8;
    transition: 0.5s;
  }

  .panel-box:hover {
    background-color: #ecf7f0;
    opacity: 1;
  }
</style>
