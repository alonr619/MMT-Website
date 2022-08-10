<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Competitions</title>
</svelte:head>

<PageHeader title="Competitions" description="CHECK OUT OUR UPCOMING COMPETITIONS" button_url="https://contestdojo.com/" button_text="Register on ContestDojo!" button_id="registerOnContestDojo"/>
<section style="padding: 30px;">
    <Dropdown mainText="Individual" id="showDropdown">
        <p>
            Information coming out soon! For now, join our <Link url="linktomailinglist" text="Mailing List" textColor="#1c6825" visitedColor="#1c6825" />
        </p>
    </Dropdown>
    <Dropdown mainText="MMT 2023" id="showDropdown">
        <p>
            Information coming out soon! For now, join our <Link url="linktomailinglist" text="Mailing List" textColor="#1c6825" visitedColor="#1c6825" />
        </p>
    </Dropdown>
</section>