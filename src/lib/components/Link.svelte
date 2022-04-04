<script>
    export let url;
    export let text = url;
    export let textColor = "blue";
    export let visitedColor = "purple";
</script>

<style>
    a {
        color: var(--normal-color);
    }
    a:visited {
        color: var(--visited-color);
    }
</style>

<a href={url} style="--normal-color: {textColor}; --visited-color: {visitedColor}">
    <slot>
        {text}
    </slot>
</a>
