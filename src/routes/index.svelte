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

<div style="margin-left:2%; margin-right:2%">
    <Section>
    	<Heading text="Mustang Math Tournament" size={4} textColor="#177012" />
            <Link url="https://www.contestdojo.com"><Button text="Register for MMT 2022" backgroundColor="#1B9AAA" textColor="white" borderRadius=2 fontSize=2 /></Link>
    	<Heading text="MMT 2022 on May 28!" size={2} textColor="#177012" />
    </Section>
    <hr style="color: #E58F65"/>
    
    <Section>
        <p id="missionStatement">The Mustang Math Tournament (MMT) is an online middle school contest hosted by experienced high school and college students, designed to get participants excited about working together on math problems. MMT is unique in its fun, distinctive formats (like our bingo round) and team-based structure. We started amidst the COVID-19 pandemic, hoping to broaden the reach of mathematics during challenging times, and have stuck with our core values of collaboration, love for mathematics, and fun ever since.</p>
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
                <Image url="sponsors/atomicgrader.png" alt="Atomic Grader" width="40%" />
                <Image url="sponsors/contestdojo.png" alt="Contest Dojo" width="40%" />
        </FlexBox>
    </Section>
</div>

<style>
        #missionStatement{
                margin-left: 10em;
                margin-right: 10em;
        }
</style>