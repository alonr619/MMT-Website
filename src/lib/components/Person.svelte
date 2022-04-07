<script>
    export let pic;
    export let name;
    export let position;

    import Text from '$lib/components/Text.svelte';
    import Heading from '$lib/components/Heading.svelte';
</script>

<div class="person-box">
    <div class="person-flex">
        <div class="person-pic">
            <img class="person-img" src={pic} alt={name} />
        </div>
        <div class="person-details">
            <Heading text={name} size="1.5" />
            <Text text={position} />
        </div>
    </div>
    <br width="5px" />
</div>

<style>
    .person-box{
        background-color: white;
        width: 21em;
        padding: 10px;
        border-radius: 25px;
        margin: 10px;
    }
    .person-flex{
        display: flex;
        width: 20em;
        height: 10em;
    }
    .person-img{
        height: 100%;
        margin: 10px;
    }
</style>