<script>
    import { fade } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import { query_selector_all } from 'svelte/internal';
  
    let isInView;
  
    export let text;
    export let textColor = "black";
    export let bold = true;
    export let italic = false;
    export let boxed = false;
    export let size = "";
    export let marginLeft = "";
    export let align = "center";
    export let className = "";
</script>
<div
class="wrapper"
use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
on:inview_change={(event) => {
  const { inView, entry, scrollDirection, observer, node} = event.detail;
  isInView = inView;
}}
>
{#if isInView}

<h1 transition:fade={{delay:100, duration:300}} style = "text-align: {align}; margin-left: {marginLeft}; color:{textColor}; font-weight:{bold ? "bold" : "normal"}; font-style: {italic ? "italic" : "normal"}; {size!=="" ? "font-size: " + size + "em;" : ""};" class="{boxed ? "boxed" : ""} {className}"> {text} </h1>
{:else}
<h1  style = "text-align: {align}; margin-left: {marginLeft}; color:{textColor}; font-weight:{bold ? "bold" : "normal"}; font-style: {italic ? "italic" : "normal"}; {size!=="" ? "font-size: " + size + "em;" : ""};" class="{boxed ? "boxed" : ""} {className}">  ‎  </h1>

{/if}
</div>
<style>
    .boxed {
        padding: 10px;
        border: 2px solid black;
    }
    h1{
        margin: 0.1em;
    }
</style>


  
