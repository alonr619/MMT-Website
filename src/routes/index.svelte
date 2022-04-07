<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import Text from '$lib/components/Text.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import FlexItem from '$lib/components/FlexItem.svelte';
	import Table from '$lib/components/Table.svelte';
	import Image from '$lib/components/Image.svelte';
	import Box from '$lib/components/Box.svelte';
	import Section from '$lib/components/Section.svelte';
	
	let buttonClickCount = 0;
    // function for testing Button
    function clickButton() {
        buttonClickCount++;
    }
</script>

<svelte:head>
	<title>Mustang Math Tournament</title>
</svelte:head>

<Section>
	<Heading text="Mustang Math Tournament" size={4} textColor="#177012" />
    <Box color="inherit" bgcolor="#1B9AAA">
        <Heading text="Register for MMT 2022" />
    </Box>
	<Heading text="MMT 2022 on May 28!" size={2} textColor="#177012" />
</Section>
<hr />

<Section>
    <Heading text="Mission Statement Header" size={2} textColor="#1B9AAA" />
    <Text text="Mission Statement" />
    <Heading text="Sponsors" size={2} textColor="#1B9AAA" />
    <!-- sponsor stuff will go here -->
    <Heading text="Subscribe to our Newsletter" size={2} textColor="#1B9AAA" />
</Section>
