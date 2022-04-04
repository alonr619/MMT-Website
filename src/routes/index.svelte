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
	
	let buttonClickCount = 0;
    // function for testing Button
    function clickButton() {
        buttonClickCount++;
    }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Heading text="Hello!"></Heading>
	<Button text="Click me!" onClick={clickButton} textColor="red" />
    <Text text="Clicks: {buttonClickCount}" />

    <Link url="https://www.google.com/?1" />
    <Link url="https://www.google.com/?2" text="Google" />
    <Link url="https://www.google.com/?3" text="Google" textColor="green" />
    <Link url="https://www.google.com/?4" text="Google" textColor="green" visitedColor="gold" />
    <Link url="https://www.google.com/?5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="Google logo">
    </Link>
	<Heading text = "texting!" textColor = "blue" />
	<Input placeholder = "Enter an answer" placeholderColor="red" /> <br />
	<FlexBox direction="column" reverse={true} wrap={false} align="end" justify="evenly">
		<FlexItem color="blue">1</FlexItem>
		<FlexItem height=90>2</FlexItem>
		<FlexItem>3</FlexItem>
		<FlexItem color="red">4</FlexItem>
		<FlexItem>5</FlexItem>
		<FlexItem width=30>6</FlexItem>
		<FlexItem color="black">8</FlexItem>
		<FlexItem height=70 width=5>9</FlexItem>
	</FlexBox>
</section>