<script>
    export let pic;
    export let name;
    // export let position;

    import Text from '$lib/components/Text.svelte';
    import Heading from '$lib/components/Heading.svelte';
</script>

<div class="person-box">
    <div class="person-flex">
        <div class="person-pic">
            <img class="person-img" src={pic} alt={name} width="160" height="160"/>
        </div>
        <div class="person-details">
            <Heading text={name} size="1.5"/>
            <!-- <Text text={position} /> -->
        </div>
    </div>
    <br class="person-br" />
</div>

<style>
    .person-box{
        background-color: white;
        width: 21em;
        padding: 10px;
        border-radius: 15px;
        margin: 10px;
        box-shadow: 5px 10px 10px rgb(0,0,0,0.1);
        transition: 0.5s;
        opacity: 0.8;
    }
    .person-box:hover{
        box-shadow: 10px 20px 10px rgb(0,0,0,0.1);
        opacity: 1;
    }
    .person-br{
        width: 5px;
    }
    .person-flex{
        display: flex;
        width: 20em;
        height: 10em;
    }
    .person-img{
        margin: 3px;
        max-height: 100%;
    }
    .person-pic {
        min-width: 0;
    }
    .person-details {
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }
    .person-pic{
        min-width:0;
    }
</style>