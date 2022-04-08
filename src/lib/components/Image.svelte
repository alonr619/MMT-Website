<script>
    export let url;
    export let alt;
    export let link = "";
    export let height = "";
    export let width = "";
</script>

<!-- Warning: spaghetti code -->

{#if link === ""}

    {#if height === "" && width === ""}
        <img src={url} alt={alt} />
    {:else if height === "" }
        <img src={url} alt={alt} width={width} />
    {:else if width === ""}
        <img src={url} alt={alt} height={height} />
    {:else}
        <img src={url} alt={alt} width={width} height={height} />
    {/if}

{:else}

    {#if height === "" && width === ""}
        <a href={link}>
        <img src={url} alt={alt} />
        </a>
    {:else if height === "" }
        <a href={link}>
        <img src={url} alt={alt} width={width} />
        </a>
    {:else if width === ""}
        <a href={link}>
        <img src={url} alt={alt} height={height} />
        </a>
    {:else}
        <a href={link}>
        <img src={url} alt={alt} width={width} height={height} />
        </a>
    {/if}

{/if}
