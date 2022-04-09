<script>
	export let text;
    export let textColor = "black";
    export let align = "left";
    export let bold = false;
    export let italic = false;
    export let boxed = false;
    export let size = "";
    export let marginLeft = "";
</script>

<p style="margin-left: {marginLeft}em; color:{textColor}; text-align: {align}; {bold ? "font-weight: bold;" : ""} {italic ? "font-style: italic;" : ""} {size !== "" ? "font-size: " + size.toString() + "em;" : ""}" class={boxed ? "boxed" : ""}>{text}</p>

<style>
    .boxed {
        padding: 10px;
        border: 2px solid black;
    }
</style>