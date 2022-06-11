<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Image from '$lib/components/Image.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';
    import sponsorTiers from '$lib/sponsorTiers';
</script>

<svelte:head>
	<title>Partners and Sponsors</title>
</svelte:head>

<PageHeader title="Partners & Sponsors" description="THE ORGANIZATIONS MAKING MMT POSSIBLE" button_url="https://contestdojo.com/" button_text="Register on ContestDojo!"/>

<Section>
    <br /> <br />
    <Heading text="Sponsors and Partners" size={4} textColor="#1B9AAA" />
    <FlexBox>
        <PanelBox width="60%" style="min-width: 360px;">
            <p style="font-size: 1.2em; margin: 5px">Thank you to our sponsors and partners for supporting the Mustang Math Tournament and our vision of providing a fun, collaborative team competition to motivated and bright middle school students!<br><br>
            Interested in sponsoring or partnering? Take a look at our <Link target="_blank" url="https://docs.google.com/presentation/d/1h2_5qUYBZybu6CEsQBB2FKEuYc0BitbsnBrLiRUCgJA/edit?usp=sharing" text="sponsorship information" />! You can contact us at <Link target="_blank" url="mailto:mustangmathtournament@gmail.com" text="mustangmathtournament@gmail.com" />.</p>
        </PanelBox>
    </FlexBox>
</Section>

{#each sponsorTiers as lvl}
    <Section>
        <br /> <br />
        <Heading text="{lvl.name}" size={3} textColor={lvl.headerColor} />
            <FlexBox wrap={true} align="stretch">
                {#if lvl.sponsors.length > 0}
                    {#each lvl.sponsors as sponsor}
                        <PanelBox borderRadius="20px" width="40%" style="max-width: 300px; min-height: 250px; min-width: 250px;">
                            <a target="_blank" href={sponsor.link} style="height: 100%; display: flex; align-items: center;">
                                <img src={sponsor.url} alt={sponsor.alt} style="max-width: 100%;">
                            </a>
                        </PanelBox>
                    {/each}
                {:else}
                    <p>Become our first {lvl.singular}!</p>
                {/if}
            </FlexBox>
    </Section>
{/each}