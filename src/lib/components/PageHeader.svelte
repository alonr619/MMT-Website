<script>
    export let title;
    export let description;

    import Heading from '$lib/components/Heading.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import { fly } from "svelte/transition";
</script>

<div class="header flex"><div in:fly="{{ y: -20, duration: 700 }}">
    <Heading className="glow" text={title} textColor="white" />
    <div class="flex"><div class="headerline"></div></div>
    <p style="font-weight: 300; margin-top: 30px; font-size: 22px; color: white;">{description}</p>
    <Link url="https://www.contestdojo.com" target="_blank" className="topbuttons" text="Register Now" textColor="white" visitedColor="white" />
</div></div>

<style>

</style>