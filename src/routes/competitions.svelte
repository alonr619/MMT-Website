<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let competitions = [
        {
            title: "MMT 2023",
            location: "mmt-2023"
        },
        {
            title: "Individual",
            location: "individual"
        }
    ]
</script>

<svelte:head>
	<title>Competitions</title>
</svelte:head>

<PageHeader title="Competitions" description="CHECK OUT OUR UPCOMING COMPETITIONS" button_url="https://contestdojo.com/" button_text="Register on ContestDojo!" button_id="registerOnContestDojo"/>
<section style="padding: 30px;">
    {#each competitions as competition, i}
    <PanelBox>
        <div>
            <a class="headerButton" href="/competitions/{competition.location}">
                <p class="headerButton effect effect-1" id={competition.location}>{competition.title}</p>
            </a>
        </div>
    </PanelBox>
    {/each}
</section>

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