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

<Section color="#177012">
	<Heading text="Happening on May 28, 2022" size={2} textColor="white" />
	<Box color="white">
		<Heading text="Mustang Math Tournament" size={4} textColor="white" />
		<Text text="A Math Tournament for Middle Schoolers!" align="center" size={1.5} textColor="white" />
	</Box>
	<Heading text="Register Now!" size={3} textColor="white" />
</Section>

<Section color="#177012">
	<Text text="A Fun, Unique Math Competition for Middle Schoolers!" align="center" size={2} textColor="white" />
	<Button text="Register for MMT 2022!" />
</Section>