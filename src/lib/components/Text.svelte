<script>
	export let text;
    export let textColor = "black";
    // export let format = "none";
    // export let backgroundColor = "inherit";
    export let align = "left";
</script>

<p style="color:{textColor}; text-align: {align}">{text}</p>
