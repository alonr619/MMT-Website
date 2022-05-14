<script>
    export let pic;
    export let name;
    // export let position;

    import Text from '$lib/components/Text.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
</script>

<PanelBox width="21em">
    <div class="person-flex">
        <div class="person-pic">
            <img class="person-img" src={pic} alt={name} width="160" height="160"/>
        </div>
        <div class="person-details">
            <p style="color: black; font-size: 1.2em;font-weight:300;">{name}</p>
            <!-- <Text text={position} /> -->
        </div>
    </div>
    <br class="person-br" />
</PanelBox>

<style>
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
        padding-left: 5px;
        text-align: center;
    }
    .person-pic{
        min-width:0;
    }
</style>