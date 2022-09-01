<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Image from '$lib/components/Image.svelte';
    let windowWidth;
</script>
<svelte:head>
    <title>Individual</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader title="Individual" description="More information coming soon..." button_url="https://contestdojo.com/" button_text="Register on ContestDojo!" button_id="registerOnContestDojo" />
<br /> <br />