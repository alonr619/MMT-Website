<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Image from '$lib/components/Image.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';

    let sponsorTiers = [
            {
                    "name": "Stallion Sponsors",
                    "singular": "Stallion Sponsor",
                    "sponsors": [
                            {
                                    "url": "sponsors/stallion/Wolfram.png",
                                    "alt": "Wolfram Alpha",
                                    "link": "https://www.wolfram.com/"
                            },
                    ]
            },
            {
                    "name": "Colt Sponsors",
                    "singular": "Colt Sponsor",
                    "sponsors": []
            },
            {
                    "name": "Foal Sponsors",
                    "singular": "Foal Sponsor",
                    "sponsors": []
            },
            {
                    "name": "Partners",
                    "singular": "Partner",
                    "sponsors": [
                            {
                                "url": "sponsors/partners/Atomic Grader.png",
                                "alt": "Atomic Grader",
                                "link": "https://atomicgrader.com/"
                            },
                            {
                                "url": "sponsors/partners/Berkeley Math Tournament.png",
                                "alt": "Berkeley Math Tournament",
                                "link": "https://bmt.berkeley.edu/"
                            },
                            {
                                "url": "sponsors/partners/ContestDojo.png",
                                "alt": "ContestDojo",
                                "link": "https://contestdojo.com/"
                            },
                            {
                                "url": "sponsors/partners/Lexington Math Tournament.svg",
                                "alt": "Lexington Math Tournament",
                                "link": "https://lhsmath.org/LMT/Home"
                            },
                            {
                                "url": "sponsors/partners/SIMCC.png",
                                "alt": "SIMCC",
                                "link": "https://simcc.org/"
                            }
                    ]
            }
    ];
</script>

<svelte:head>
	<title>Partners and Sponsors</title>
</svelte:head>

<PageHeader title="Partners & Sponsors" description="THE ORGANIZATIONS MAKING MMT POSSIBLE" />

{#each sponsorTiers as lvl}
    <Section>
        <br /> <br />
        <Heading text="{lvl.name}" size={3} textColor="#1B9AAA" />
            <FlexBox wrap={true} align="stretch">
                {#if lvl.sponsors.length > 0}
                    {#each lvl.sponsors as sponsor}
                        <PanelBox borderRadius="20px" width="30%" style="max-width: 300px; align-items: center; display: flex;">
                            <Image target="_blank" url={sponsor.url} alt={sponsor.alt} link={sponsor.link} />
                        </PanelBox>
                    {/each}
                {:else}
                    <p>Become our first {lvl.singular}!</p>
                {/if}
            </FlexBox>
    </Section>
{/each}