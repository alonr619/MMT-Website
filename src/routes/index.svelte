<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import Text from '$lib/components/Text.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import FlexItem from '$lib/components/FlexItem.svelte';
	import Table from '$lib/components/Table.svelte';
	import Image from '$lib/components/Image.svelte';
	import Box from '$lib/components/Box.svelte';
	import Section from '$lib/components/Section.svelte';
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
	<title>Mustang Math Tournament</title>
</svelte:head>

<div style="margin-left:2%; margin-right:2%">
    <Section>
    	<Heading text="Mustang Math Tournament" size={4} textColor="#177012" />
        <Button text="Register for MMT 2022" backgroundColor="#1B9AAA" textColor="white" borderRadius=2 />
    	<Heading text="MMT 2022 on May 28!" size={2} textColor="#177012" />
    </Section>
    <hr style="color: #E58F65"/>
    
    <Section>
        <Heading text="Mission Statement Header" size={2} textColor="#1B9AAA" />
        <Text text="Mission Statement" />
        <Heading text="Sponsors" size={2} textColor="#1B9AAA" />
        {#each sponsorTiers as lvl}
                <Section>
                        <Heading text="{lvl.name} Sponsors" size={1.5} />
                        <FlexBox wrap={true}>
                                {#each lvl.sponsors as sponsor}
                                        <Image url={sponsor.url} alt={sponsor.alt} link={sponsor.link} />
                                {/each}
                        </FlexBox>
                </Section>

        {/each}
    </Section>
</div>
