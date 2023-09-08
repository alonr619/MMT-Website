<!-- Component for that shadow box with glow on hover thing -->
<script>
  export let width = "unset";
  export let height = "unset";
  export let margin = "10px";
  export let padding = "10px";
  export let borderRadius = "5px";
  export let style = "";
  export let boxSizing = "border-box";
</script>

<div
  class="panel-box"
  style="width: {width}; height: {height}; margin: {margin}; padding: {padding}; border-radius: {borderRadius}; box-sizing: {boxSizing}; {style}"
>
  <slot />
</div>

<style>
  .panel-box {
    background-color: transparent;
    opacity: 0.8;
    transition: 0.5s;
    width: 100%;
  }

  .panel-box:hover {
    background-color: transparent;
    opacity: 1;
  }
</style>
