<script>
    import Heading from '$lib/components/Heading.svelte';
    import Header from '$lib/header/Header.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    import Newsletter from '$lib/components/Newsletter.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';

    // need to do this to make the animation play on page load
    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";
 
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
	<title>Mustang Math Tournament</title>
</svelte:head>

<section>
    <PageHeader title={windowWidth > 600 ? "Mustang Math" : "MM"} description="Mustang Math [MM] is an online middle school contest designed around values of collaboration, love for mathematics, and fun!" button_text="Sign up for classes" button_id="signUpForClasses" button_url="/classes" height={88.2}/>
</section>