<script>
    import Card from "$lib/components/CardPanelBox.svelte";

    export let competition;
    export let imgSource;
    export let description;
    export let initials;
</script>

<Card width="17em" height="23em" {imgSource} {initials}>
    <a href="#{competition.toLowerCase()}">
        <div class="competition-img">
            <img alt={competition} src={imgSource} />
        </div>
        <p class="title-p">{competition}</p>
        <p class="desc-p">{description}</p>
    </a>
</Card>

<style>
    a {
        text-decoration: none;
        background-color: green;
    }
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