<script>
    export let text;
    function nullFunction(){
        let aRandomVariable = 0;
    }

    export let onClick = nullFunction();
    export let textColor = "black";
    export let backgroundColor = "white";
    export let alignment = "center"; // left, center, or right
    export let width = 30; // This is a percentage, not in em
    let marginCenter = (100-width)/2;
    let marginRight = 100-width;
    export let fontSize = 1.5; // This is in em
    export let height = 3; // This is in em
    export let borderRadius = 0; // Also in em
</script>

<button on:click={onClick} style="height: {height}em; color: {textColor}; background-color: {backgroundColor}; font-size: {fontSize.toString()}em; --width-button: {width.toString()}%; --margin-center: {marginCenter.toString()}%; --margin-right: {marginRight.toString()}%; border-radius: {borderRadius}em">{text}</button>

{#if alignment === "center"}
<style>
    button{
        margin-left: var(--margin-center);
    }
</style>
{:else if alignment === "right"}
<style>
    button{
        margin-left: var(--margin-right);
    }
</style>
{:else if alignment === "left"}
<style>
    button{
        margin-left: 2em;
    }
</style>
{/if}

<style>
    button{
        border: none;
        width: var(--width-button);
        margin-bottom: 10px;
        cursor: grab;
    }
</style>
