<script lang="ts">
  //File is for reference only, not used anywhere in code
  
  
  import { fade } from 'svelte/transition';
  import { inview } from 'svelte-inview';
  import { query_selector_all } from 'svelte/internal';

  let isInView;

  
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
    <div in:fade class="box">
      <h3>Appears from nowhere</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
        adipisci nihil iste.
      </p>
    </div>

  {/if}
</div>

<style>
  .wrapper {
    margin-top: 30px;
  }

  .box {
    width: 300px;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    border-radius: 10px;
  }
</style>