<script>
    export let url;
    export let alt;
    export let height = "";
    export let width = "";
</script>

{#if height === "" && width === ""}
<img url={url} alt={alt} />
{:else if height === "" }
<img url={url} alt={alt} width={width} />
{:else if width === ""}
<img url={url} alt={alt} height={height} />
{:else}
<img url={url} alt={alt} width={width} height={height} />
{/if}