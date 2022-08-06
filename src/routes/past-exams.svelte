<script>
    import Heading from '$lib/components/Heading.svelte';
    import DropdownArchive from '$lib/components/DropdownArchive.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Past Exams</title>
</svelte:head>

<PageHeader title="Past Exams" description="CHECK OUT PAST PROBLEMS" button_url="https://contestdojo.com/" button_text="Register on ContestDojo!" button_id="registerOnContestDogo"/>
<section>
    <br />
    <DropdownArchive id="showDropdown" year="2021" tests={[["Mounting Mayhem", "archive/2021/MountingMayhem.pdf"], ["Bucking Bingo", "archive/2021/BuckingBingo.pdf"], ["Relay Rodeo", "archive/2021/RelayRodeo.pdf"], ["Gallop Set 1", "archive/2021/Gallop Set 1.pdf"], ["Gallop Set 2", "archive/2021/Gallop Set 2.pdf"], ["Gallop Set 3", "archive/2021/Gallop Set 3.pdf"], ["Gallop Set 4", "archive/2021/Gallop Set 4.pdf"], ["Gallop Set 5", "archive/2021/Gallop Set 5.pdf"], ["Gallop Set 6", "archive/2021/Gallop Set 6.pdf"], ["Gallop Set 7", "archive/2021/Gallop Set 7.pdf"], ["Gallop Set 8", "archive/2021/Gallop Set 8.pdf"]]} answers="archive/2021/Answers.pdf" results="archive/2021/Results.pdf" />
    <DropdownArchive id="showDropdown" year="2020" tests={[["Mounting Mayhem", "archive/2020/MountingMayhem.pdf"], ["Unbridled Approximation", "archive/2020/UnbridledApproximation.pdf"], ["Gallop Set 1", "archive/2020/Gallop Set 1.pdf"], ["Gallop Set 2", "archive/2020/Gallop Set 2.pdf"], ["Gallop Set 3", "archive/2020/Gallop Set 3.pdf"], ["Gallop Set 4", "archive/2020/Gallop Set 4.pdf"], ["Gallop Set 5", "archive/2020/Gallop Set 5.pdf"], ["Gallop Set 6", "archive/2020/Gallop Set 6.pdf"], ["Gallop Set 7", "archive/2020/Gallop Set 7.pdf"], ["Gallop Set 8", "archive/2020/Gallop Set 8.pdf"]]} answers="archive/2020/Answers.pdf" results="archive/2020/Results.pdf" />
    <br /><br /><br /><br /><br /><br /><br />
</section>