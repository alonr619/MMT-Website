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

    let displayYears = [
        {id: '2021', name: '2021', expanded: false, rules: '2021 Rules', rules_url: 'https://docs.google.com/document/d/1_Oo7sRoh6GpaRUvgViFAAs-YakD5EfNNkB-jO9nIWNU/edit', tests: '2021 Tests and Answers', tests_url: 'https://drive.google.com/drive/folders/14BbtxijMKbcjLYSvUgr30BTvpUP31rAT', results: '2021 Results', results_url: 'https://docs.google.com/spreadsheets/d/1IS8LoXRyXPH2tPkXzguXUsxH36hO8EtShSvpWKPFMQQ/edit'},
        {id: '2020', name: '2020', expanded: false, rules: '2020 Rules', rules_url: 'https://docs.google.com/document/d/1eILII9FezLuRy6geEY48AX-vIpDR88QprL2FIq_bH64/edit', tests: '2020 Tests and Answers', tests_url: 'https://drive.google.com/drive/folders/16rPo9M3EXHbzWTYywqcvrOo1D28PZ8UJ', results: '2020 Results', results_url: 'https://docs.google.com/spreadsheets/d/1WcNchAV4QgIDSnAHVXLLJUnrs-vbFT9apiw-h1azTA4/edit'},
    ];

    function handleClick() {
        alert("Hello");
    }
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<section>
	<Heading text="Archive"/>
</section>

{#each displayYears as year}
    <FlexBox direction="column" align="left" indent="2em" size="2em">
        <div>{year.name}</div>
    </FlexBox>
    <FlexBox direction="column" align="left" indent="5em" size="1.5em">
        <div><a href={year.rules_url} target="_blank" rel="noreferrer noopener">{year.rules}</a></div>
    </FlexBox>
    <FlexBox direction="column" align="left" indent="5em" size="1.5em">
        <div><a href={year.tests_url} target="_blank" rel="noreferrer noopener">{year.tests}</a></div>
    </FlexBox>
    <FlexBox direction="column" align="left" indent="5em" size="1.5em">
        <div><a href={year.results_url} target="_blank" rel="noreferrer noopener">{year.results}</a></div>
    </FlexBox>
{/each}