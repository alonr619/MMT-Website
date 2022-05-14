<script>
    export let url;
    export let alt;
    export let link = "";
    export let height = "";
    export let width = "";
    export let target = "_self";
    export let className = "";
</script>

<!-- Warning: spaghetti code -->

{#if link === ""}

    {#if height === "" && width === ""}
        <img src={url} alt={alt} class={className} />
    {:else if height === "" }
        <img src={url} alt={alt} width={width} class={className} />
    {:else if width === ""}
        <img src={url} alt={alt} height={height} class={className} />
    {:else}
        <img src={url} alt={alt} width={width} height={height} class={className} />
    {/if}

{:else}

    {#if height === "" && width === ""}
        <a href={link} target={target} class={className}>
        <img src={url} alt={alt} class={className} />
        </a>
    {:else if height === "" }
        <a href={link} target={target} class={className}>
        <img src={url} alt={alt} width={width}  class={className}/>
        </a>
    {:else if width === ""}
        <a href={link} target={target} class={className}>
        <img src={url} alt={alt} height={height} class={className} />
        </a>
    {:else}
        <a href={link} target={target} class={className}>
        <img src={url} alt={alt} width={width} height={height} class={className} />
        </a>
    {/if}

{/if}

<style>
    img {
        max-width: 100%;
    }
</style>