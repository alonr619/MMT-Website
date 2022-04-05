<script>
    export let url;
    export let alt;
    export let height = "";
    export let width = "";
</script>

{#if height === "" && width === ""}
<img src={url} alt={alt} />
{:else if height === "" }
<img src={url} alt={alt} width={width} />
{:else if width === ""}
<img src={url} alt={alt} height={height} />
{:else}
<img src={url} alt={alt} width={width} height={height} />
{/if}