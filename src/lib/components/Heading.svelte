<script>
    export let text;
    export let textColor = "black";
    export let bold = true;
    export let italic = false;
    export let boxed = false;
    export let size = "";
</script>

<h1 style = "color:{textColor}; font-weight:{bold ? "bold" : "normal"}; font-style: {italic ? "italic" : "normal"}; {size!=="" ? "font-size: " + size + "em;" : ""};" class="{boxed ? "boxed" : ""}"> {text} </h1>

<style>
    .boxed {
        padding: 10px;
        border: 2px solid black;
    }
    h1{
        margin: 0.1em;
    }
</style>