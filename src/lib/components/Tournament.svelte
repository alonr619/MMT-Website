<script>
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Link from '$lib/components/Link.svelte';

    export let title;
    export let imgSource;
    export let description;
    export let button_url;
    export let button_text;
</script>

<PanelBox width="15em" height="20em" borderRadius="15px">
    {#if imgSource}
    <div class="competition-img">
        <img alt={title} src={imgSource} />
    </div>
    {/if}
    <p class="title-p">{title}</p>
    <p class="desc-p">{description}</p>
    {#if button_url}
    <div class="flex">
        <div class="button">
            <Link url={button_url} className="tournamentButton" text={button_text} textColor="white" visitedColor="white" id={button_text} button_id={button_text} />
        </div>
    </div>
    {/if}
</PanelBox>

<style>
    .competition-img{
        margin: 10%;
    }
    .title-p{
        font-size: 1.5rem;
        text-align: center;
    }
    .desc-p{
        font-size: 1rem;
        text-align: center;
    }
    img{
        max-width: 5em;
        margin: auto;
        display: block;
        width: 50%;
    }
</style>