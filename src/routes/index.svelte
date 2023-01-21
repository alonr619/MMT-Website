<script>
    import Heading from '$lib/components/Heading.svelte';
    import Newsletter from '$lib/components/Newsletter.svelte';
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    // need to do this to make the animation play on page load
    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";
    let show = false;
 
    onMount(() => {
        visible = true;
    })

    function toggleBackground() {
        if (background == "right-arrow.png") {
            background = "right-arrow-shaded.png";
        } else {
            background = "right-arrow.png";
        }
    }

    let y;
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Stanford Math Tournament</title>
</svelte:head>

<div class="outside" style="height: 100vh;">
    <div class="header flex">
        <div class="minidiv">
            {#if windowWidth > 600}
            <Heading className="glow" text="Stanford Math Tournament" textColor="black" />
            {:else}
            <Heading className="glow" text="SMT" textColor="black" />   
            {/if}
            <div class="flex"><div class="headerline"></div></div>
            <p class="descript" style="font-weight: 300; font-size: 22px; color: black;">The Stanford Math Tournament [SMT] is a high school math tournament run by students from Stanford University. We are passionate about providing a high quality and challenging event to students interested in mathematics globally.</p>
            <a sveltekit:prefetch href="/competitions/mmt-2023" class="headerButton">
                <div class="headerButton" on:mouseenter={toggleBackground} on:mouseleave={toggleBackground}>
                    <p class="headerButton" id="signupforsmt">Register for SMT 2023!</p>
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                </div>
            </a>
            <br />
            <!--<button class="sign-up" on:click={() => {show = !show;}}><i class="fa-regular fa-newspaper"></i> Sign Up for our Newsletter</button>--> 
        </div>
    </div>
</div>

<style>
.outside {
    background-color: #FFFBF0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
}

@media (max-width: 700px) {
    .outside {
        background-color: #FFFBF0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
}

.header {
	text-align: center;
    position: relative;
    height: calc(100% - 70px);
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
    max-width: 80%;
}

.headerline {
	border-bottom: 1px solid black;
	height: 20px;
	width: 60%;
	min-width: 300px;
}

div.headerButton {
    display: flex;
    background-color: #981C1D;
	border-radius: 50px;
    padding: 10px;
	color: white;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 300px;
}

p.headerButton {
    color: white;
    align-self: center;
    font-size: 1em;
    margin: 5px;
    margin-right: 20px;
}

a.headerButton:hover {
    text-decoration: none;
}

</style>