<script>
    import Countup from 'svelte-countup';
    import PanelBox from "$lib/components/PanelBox.svelte"
    export let initial = 0;
    export let value = 100;
    export let duration = 1000;
    export let step = 1;
    export let roundto = 1;
    export let format = true;
    export let title = "";
  </script>
<div
class="flexbox">
  <div class="countup">
    <Countup 
      {initial}
      {value}
      {duration}
      {step}
      {roundto}
      {format}
    />
  </div>
  <div class="label">
    <h2>{title}</h2>
  </div>
</div>
  
<style>
  .flexbox {
    width:fit-content;
    height: fit-content;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
  }
  .countup {
    font-size: 3em;
    text-align: center;
  }

</style>