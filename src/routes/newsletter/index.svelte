<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import DropdownArchive from '$lib/components/DropdownArchive.svelte';

    const issues = {
        2022: [[["November"], ["Online", "/newsletter/2022/nov"], ["PDF", "TO BE IMPLEMENTED"]]],
        2023: [[["No issues yet!"]]]
    };

    const years = [2022, 2023];
</script>

<svelte:head>
	<title>Newsletter</title>
</svelte:head>

<PageHeader title="Newsletter" description="Check Out Our Newsletter" button_url="/newsletter/2022/nov" button_text="Newest Issue" button_id="registerOnContestDojo"/>
<section style="padding: 30px;">
    <Heading text="All Issues" size={2.5} textColor="#1B9AAA" />
    {#each years as year, i}
    <DropdownArchive id="showDropdown" year={year} tests={issues[year]}/>
    {/each}
</section>
