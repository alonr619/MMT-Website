<script>
    export let title;
    export let description;
    export let button_url;
    export let button_text;
    export let button_id="";
    export let height = 85;
    export let button2_url;
    export let button2_text;
    export let button2_id;
    export let target = "_blank";

    import Heading from '$lib/components/Heading.svelte';
    import Header from '$lib/header/Header.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    // need to do this to make the animation play on page load
    let visible = false;
 
    onMount(() => {
        visible = true;
    })

    let y;
</script>

<svelte:window bind:scrollY={y}/>
<div class="header flex" style="height: {height}vh;">   

    {#if visible}
        <div class="minidiv">
            <Heading className="glow" text={title} textColor="black" />
            <div class="flex"><div class="headerline"></div></div>
            <p class="descript" style="font-weight: 300; font-size: 22px; color: black;">{description}</p>
            <div class="flex">
                <div class="topbuttons">
                    <Link url={button_url} target={target} className="registrationButton" text={button_text} textColor="white" visitedColor="white" id={button_id} button_id={button_text} />
                </div>
            </div>
            {#if button2_url}
            <div class="flex">
                <div class="topbuttons">
                    <Link url={button2_url} target={target} className="registrationButton2" text={button2_text} textColor="white" visitedColor="white" id={button2_id} button_id={button2_text} />
                </div>
            </div>
            {/if}
        </div>
    {/if}
</div>


<style>
.header {
	text-align: center;
    background-color: #FFFBF0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    z-index: 2;
}

@media (max-width: 700px) {
    .header {
        background-color: #FFFBF0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }
}

.svg {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
}

.minidiv {
    z-index: 9;
    margin: 20px;
}

.headerline {
	border-bottom: 1px solid black;
	height: 20px;
	width: 60%;
	min-width: 300px;
}

</style>
