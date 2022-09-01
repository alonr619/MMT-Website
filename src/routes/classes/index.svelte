<script>
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import Dropdown from '$lib/components/Dropdown.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let scheduleData = [
        { "Week": "1", "Date": "October 15, 2022", "Topics Covered": "Topic A, Topic B, Topic C" },
        { "Week": "2", "Date": "October 22, 2022", "Topics Covered": "Topic A, Topic B, Topic C" },
        { "Week": "3", "Date": "October 29, 2022", "Topics Covered": "Topic A, Topic B, Topic C" },
        { "Week": "4", "Date": "November 6, 2022", "Topics Covered": "Topic A, Topic B, Topic C" },
    ]

</script>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<PageHeader title="Classes" description="High quality, student-focused classes of varying level" button_url="https://contestdojo.com/" button_text="Indicate your interest for classes!" button_id="registerOnContestDojo"/>
<br /> <br />
<Heading text="Mustang Math Classes" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a odio ex. Curabitur fermentum, velit vel sagittis iaculis, eros ligula lobortis turpis, quis porta nulla nisl dignissim orci. In sagittis enim at est aliquam volutpat. Aenean vel molestie est. Ut tempor faucibus quam nec ullamcorper. Proin at velit ornare, ultricies enim at, sagittis nisi. Suspendisse lacinia placerat leo. Suspendisse luctus sem risus, ut ultrices mauris eleifend ac. Fusce aliquet vulputate lacus, vitae semper neque condimentum nec. Etiam aliquet imperdiet eros eu rutrum. Nullam eleifend, ipsum a interdum sagittis, ex lorem vestibulum lectus, at commodo orci augue ut magna. Ut lorem odio, mattis ac lacus at, congue sagittis nulla. Vivamus dignissim tellus vitae turpis venenatis maximus.</p>

        <p style="font-size: 1.5em; text-align: center;">Vivamus sit amet ex facilisis, rhoncus eros eget, vulputate mi. Fusce orci nulla, pellentesque ut auctor fermentum, facilisis vitae quam. Nam luctus enim sit amet metus condimentum ultrices. Nulla ac quam ornare, lacinia quam in, pharetra urna. Suspendisse cursus felis nec est volutpat tincidunt. Etiam varius, libero a volutpat malesuada, quam mauris consectetur velit, et semper leo ipsum in dolor. Vestibulum at odio magna. Cras auctor mi ut tortor sollicitudin eleifend. Phasellus rutrum velit ut rutrum sagittis. Curabitur rutrum est mauris, in imperdiet justo interdum.</p>
    </PanelBox>
</div> <br />
<br />

<Heading text="Topic-Based Courses" size={2.5} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Competition imgSource="classes/fx.png" competition="Algebra" description="The second best subject. Key topics include: " />
        <Competition imgSource="classes/dice.png" competition="Combinatorics" description="The best subject. Key topics include: " />
        <Competition imgSource="classes/compass.png" competition="Geometry" description="The most hotly debated subject. Key topics include: " />
        <Competition imgSource="classes/numbers.png" competition="Number Theory" description="The most ignored subject. Key topics include: " />
    </FlexBox>
</div> <br />

<Heading text="Algebra Classes Schedule" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<style>
    .headerButton {
        display: flex;
        padding: 10px;
        margin: auto;
        justify-content: center;
        align-items: center;
    }

    p.headerButton {
        align-self: center;
        font-size: 1em;
        margin: 5px;
        margin-right: 20px;
        font-weight: 700;
    }

    .headerButton:hover {
        text-decoration: none;
    }

    .effect {
		text-align: center;
		display: inline-block;
		position: relative;
		text-decoration: none;
		text-transform: capitalize;
		width: 30%;
		overflow: hidden;
	}

	/* effect-1 styles */

	.effect.effect-1 {
		transition: all 0.2s linear 0s;
	}

	.effect.effect-1:before {
		content: '\f178';
		font-family: FontAwesome;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 0;
		top: 0;
		opacity: 0;
		height: 100%;
		width: 40px;
		transition: all 0.2s linear 0s;
	}

	.effect.effect-1:hover {
		text-indent: -20px;
	}

	.effect.effect-1:hover:before {
		opacity: 1;
		text-indent: 0px;
	}
</style>
