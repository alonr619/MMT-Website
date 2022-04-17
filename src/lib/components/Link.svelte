<script>
    export let url;
    export let text = url;
    export let textColor = "blue";
    export let visitedColor = "purple";
    export let className = "";
    export let target = "_self";
</script>

<style>
    a {
        color: var(--normal-color);
    }
    a:visited {
        color: var(--visited-color);
    }
</style>

<a href={url} style="--normal-color: {textColor}; --visited-color: {visitedColor}" class={className} target={target}>
    <slot>
        {text}
    </slot>
</a>
