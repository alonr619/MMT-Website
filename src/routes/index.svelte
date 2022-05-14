<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import Image from '$lib/components/Image.svelte';
	import Section from '$lib/components/Section.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Link from '$lib/components/Link.svelte';
    import sponsorTiers from '$lib/sponsorTiers';
</script>

<svelte:head>
	<title>Mustang Math Tournament (MMT)</title>
</svelte:head>

<PageHeader title="Mustang Math Tournament" description="MAY 28, 2022: 9 AM - 5 PM PT" />
<div style="margin-left:2%; margin-right:2%">
    <Section>
            <br />
        <Heading text="Welcome to MMT" size={2.5} textColor="#1B9AAA" />
        <p id="missionStatement" style="text-align: center;">The Mustang Math Tournament (MMT) is an <b>online middle school contest</b> hosted by experienced high school and college students, designed to get participants excited about working together on math problems. MMT is unique in its <b>fun, distinctive formats</b> (like our bingo round) and team-based structure. We started amidst the COVID-19 pandemic, hoping to <b>broaden the reach of mathematics</b> during challenging times, and have stuck with our <b>values of collaboration, love for mathematics, and fun</b> ever since.</p>
    </Section>
</div>

<style>
        #missionStatement{
                margin-left: 10vw;
                margin-right: 10vw;
        }
</style>