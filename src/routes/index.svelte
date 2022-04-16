<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import Image from '$lib/components/Image.svelte';
	import Section from '$lib/components/Section.svelte';
        import Link from '$lib/components/Link.svelte';
    let sponsorTiers = [
            {
                    "name": "Stallion",
                    "sponsors": [
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                    ]
            },
            {
                    "name": "Colt",
                    "sponsors": [
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                    ]
            },
            {
                    "name": "Foal",
                    "sponsors": [
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                            {
                                    "url": "about-us-images/alon-ragoler.png",
                                    "alt": "tech carry",
                                    "link": "https://cia.gov"
                            },
                    ]
            }
    ];
</script>

<svelte:head>
	<title>Mustang Math Tournament (MMT)</title>
</svelte:head>

<Section>
        <div class="header flex"><div>
                <h1 class="glow">Mustang Math Tournament</h1>
                <div class="flex"><div class="headerline"></div></div>
                <p style="font-weight: 300; margin-top: 30px; font-size: 22px; color: white;">HAPPENING MAY 28TH</p>
                <a href="https://www.contestdojo.com" target="_blank" class="topbuttons">Register Now</a>
        </div></div>
</Section>

<div style="margin-left:2%; margin-right:2%">
    <Section>
            <br />
        <Heading text="Welcome to MMT." size={2} textColor="#1B9AAA" />
        <p id="missionStatement" style="text-align: center;">The Mustang Math Tournament (MMT) is an <b>online middle school contest</b> hosted by experienced high school and college students, designed to get participants excited about working together on math problems. MMT is unique in its <b>fun, distinctive formats</b> (like our bingo round) and team-based structure. We started amidst the COVID-19 pandemic, hoping to <b>broaden the reach of mathematics</b> during challenging times, and have stuck with our <b> ore values of collaboration, love for mathematics, and fun</b> ever since.</p>
        <Heading text="Sponsors" size={2} textColor="#1B9AAA" />
        <!--{#each sponsorTiers as lvl}
                <Section>
                        <Heading text="{lvl.name} Sponsors" size={1.5} />
                        <FlexBox wrap={true}>
                                {#each lvl.sponsors as sponsor}
                                        <Image url={sponsor.url} alt={sponsor.alt} link={sponsor.link} />
                                {/each}
                        </FlexBox>
                </Section>

        {/each} -->
        <FlexBox wrap={true}>
                <div style="max-width: 40%;"><Image url="sponsors/atomicgrader.png" alt="Atomic Grader" link="https://atomicgrader.com" width="100%" target="_blank" /></div>
                <div style="max-width: 40%"><Image url="sponsors/contestdojo.png" alt="Contest Dojo" link="https://www.contestdojo.com" width="100%" target="_blank" /></div>
        </FlexBox>
        <br />
    </Section>
</div>

<style>
        #missionStatement{
                margin-left: 10em;
                margin-right: 10em;
        }
</style>