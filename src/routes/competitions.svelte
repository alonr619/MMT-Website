<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';

    let background0 = "right-arrow.png";
    let background1 = "right-arrow.png";

    function toggleBackground0() {
        if (background0 === "right-arrow.png") {
            background0 = "right-arrow-shaded.png";
        } else {
            background0 = "right-arrow.png";
        }
    }

    function toggleBackground1() {
        if (background1 === "right-arrow.png") {
            background1 = "right-arrow-shaded.png";
        } else {
            background1 = "right-arrow.png";
        }
    }
</script>

<svelte:head>
	<title>Competitions</title>
</svelte:head>

<PageHeader title="Competitions" description="CHECK OUT OUR UPCOMING COMPETITIONS" button_url="https://contestdojo.com/" button_text="Register on ContestDojo!" button_id="registerOnContestDojo"/>
<section style="padding: 30px;">
    <PanelBox>
        <div on:mouseenter={toggleBackground0} on:mouseleave={toggleBackground0}>
            <a class="headerButton" href="/competitions/mmt-2023">
                <p class="headerButton" id="MMT2023">MMT 2023</p>
                <img height="25px" class="headerButton" src={background0} alt="Right-facing arrow icon" />
            </a>
        </div>
    </PanelBox>
    <PanelBox>
        <div on:mouseenter={toggleBackground1} on:mouseleave={toggleBackground1}>
            <a class="headerButton" href="/competitions/individual">
                <p class="headerButton" id="individual">Individual</p>
                <img height="25px" class="headerButton" src={background1} alt="Right-facing arrow icon" />
            </a>
        </div>
    </PanelBox>
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
</style>