<script>
    import Heading from '$lib/components/Heading.svelte';
    import DropdownArchive from '$lib/components/DropdownArchive.svelte';
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<section>
	<Heading text="Archive" textColor="#177012" />
    <DropdownArchive year="2021" tests={[["Mounting Mayhem", "archive/2021/MountingMayhem.pdf"], ["Bucking Bingo", "archive/2021/BuckingBingo.pdf"]]} answers="archive/2021/Answers.pdf" />
</section>