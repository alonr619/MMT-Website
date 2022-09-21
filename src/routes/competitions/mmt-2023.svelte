<script>
    import PageHeader from "$lib/components/PageHeader.svelte";
    let windowWidth;
</script>

<svelte:head>
    <title>MMT 2023</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader
    title="MMT 2023"
    description="Coming April 29th, 2023!"
    button_url="https://contestdojo.com/"
    button_text="Register on ContestDojo!"
    button_id="registerOnContestDojo"
/>
<br /> <br />
