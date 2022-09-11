<script>
    import Heading from '$lib/components/Heading.svelte';
    import DropdownArchive from '$lib/components/DropdownArchive.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Study Resources</title>
</svelte:head>

<PageHeader title="Resources" description="Study for upcoming tournaments or classes with these resources!" button_url="https://mm-training-portal.vercel.app/" button_text="Check out our training portal" button_id="trainingPortal"/>

<section>
    <Heading text="Mini Lectures" size={2.5} textColor="#1B9AAA" />
</section>

<section>
    <Heading text="Youtube Videos" size={2.5} textColor="#1B9AAA" />
</section>

<section>
    <Heading text="Past Exams" size={2.5} textColor="#1B9AAA" />
    <DropdownArchive id="showDropdown" year="2021" tests={[["Mounting Mayhem", "archive/2021/MountingMayhem.pdf"], ["Bucking Bingo", "archive/2021/BuckingBingo.pdf"], ["Relay Rodeo", "archive/2021/RelayRodeo.pdf"], ["Gallop Set 1", "archive/2021/Gallop Set 1.pdf"], ["Gallop Set 2", "archive/2021/Gallop Set 2.pdf"], ["Gallop Set 3", "archive/2021/Gallop Set 3.pdf"], ["Gallop Set 4", "archive/2021/Gallop Set 4.pdf"], ["Gallop Set 5", "archive/2021/Gallop Set 5.pdf"], ["Gallop Set 6", "archive/2021/Gallop Set 6.pdf"], ["Gallop Set 7", "archive/2021/Gallop Set 7.pdf"], ["Gallop Set 8", "archive/2021/Gallop Set 8.pdf"]]} answers="archive/2021/Answers.pdf" results="archive/2021/Results.pdf" />
    <DropdownArchive id="showDropdown" year="2020" tests={[["Mounting Mayhem", "archive/2020/MountingMayhem.pdf"], ["Unbridled Approximation", "archive/2020/UnbridledApproximation.pdf"], ["Gallop Set 1", "archive/2020/Gallop Set 1.pdf"], ["Gallop Set 2", "archive/2020/Gallop Set 2.pdf"], ["Gallop Set 3", "archive/2020/Gallop Set 3.pdf"], ["Gallop Set 4", "archive/2020/Gallop Set 4.pdf"], ["Gallop Set 5", "archive/2020/Gallop Set 5.pdf"], ["Gallop Set 6", "archive/2020/Gallop Set 6.pdf"], ["Gallop Set 7", "archive/2020/Gallop Set 7.pdf"], ["Gallop Set 8", "archive/2020/Gallop Set 8.pdf"]]} answers="archive/2020/Answers.pdf" results="archive/2020/Results.pdf" />
</section>

<style>
    section {
        padding: 10px;
    }
</style>