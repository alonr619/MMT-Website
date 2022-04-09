<script>
    import Heading from '$lib/components/Heading.svelte';
    import DropdownArchive from '$lib/components/DropdownArchive.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<section>
    <br />
	<Heading text="Archive" textColor="#177012" />
    <Text text="2022: Register Now!" size=2 marginLeft=2 />
    <Link url="https://www.contestdojo.com"><Button alignment="left" text="Register for MMT 2022" backgroundColor="#1B9AAA" textColor="white" borderRadius=2 fontSize=1.5 width=20 /></Link>
    <DropdownArchive year="2021" tests={[["Mounting Mayhem", "archive/2021/MountingMayhem.pdf"], ["Bucking Bingo", "archive/2021/BuckingBingo.pdf"], ["Gallop Set 1", "archive/2021/Gallop Set 1.pdf"], ["Gallop Set 2", "archive/2021/Gallop Set 2.pdf"], ["Gallop Set 3", "archive/2021/Gallop Set 3.pdf"], ["Gallop Set 4", "archive/2021/Gallop Set 4.pdf"], ["Gallop Set 5", "archive/2021/Gallop Set 5.pdf"], ["Gallop Set 6", "archive/2021/Gallop Set 6.pdf"], ["Gallop Set 7", "archive/2021/Gallop Set 7.pdf"], ["Gallop Set 8", "archive/2021/Gallop Set 8.pdf"]]} answers="archive/2021/Answers.pdf" results="archive/2021/Results.pdf" />
    <br /><br /><br /><br /><br /><br /><br />
</section>