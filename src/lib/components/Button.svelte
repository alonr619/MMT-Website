<script>
    export let text;
    export let onClick;
    export let textColor = "black";
</script>

<button on:click={onClick} style="color: {textColor}">{text}</button>
