<!-- Component for that shadow box with glow on hover thing -->
<script>
    export let width = "auto";
    export let height = "auto";
    export let margin = "10px";
    export let padding = "10px";
    export let borderRadius = "15px";
</script>

<div class="panel-box" style="width: {width}; height: {height}; margin: {margin}; padding: {padding}; border-radius: {borderRadius}">
    <slot></slot>
</div>

<style>
    .panel-box {
        background-color: white;
        box-shadow: 5px 10px 10px rgb(0,0,0,0.1);
        opacity: 0.8;
        transition: 0.5s;
    }
    
    .panel-box:hover{
        box-shadow: 10px 20px 10px rgb(0,0,0,0.1);
        opacity: 1;
    }
</style>