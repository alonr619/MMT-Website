<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Image from '$lib/components/Image.svelte';
    let windowWidth;
    const scheduleData = [
        { "Day": "11/11 to 11/18", "Start Time (PT)": "All Day", "Event": "Problem of the Day" },
        [ "11/19", "9:00 AM", "Opening Ceremony" ],
        [ "11/19", "9:30 AM", "Testing" ],
        [ "11/19", "10:40 AM", "Awards Ceremony" ]
    ];
</script>
<svelte:head>
    <title>3MT</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader title="Mustang Mini Math Tournament" description="NOVEMBER 19, 2022: 9AM - 11AM PT" button_url="https://contestdojo.com/" button_text="Registration will open up soon on ContestDojo!" button_id="registerOnContestDojo" />

<br /><br />

<Dropdown mainText="Registration Instructions and Information" showContent={true} id="showDropdown">
    <strong>COST:</strong> $5 per participant <br /> <br />
    <strong class="registration-other">Registration will open up soon on ContestDojo!</strong> <br />
</Dropdown> <br />

<Heading text="Schedule" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20} tableStyle="margin-left: auto; margin-right: auto"/>
            <p style="margin-top: 2px; margin-bottom: 0px;">*Schedule subject to change. Note that there is built-in buffer time to explain instructions and assist with technical difficulties.*</p>
        </PanelBox>
    </FlexBox>
</div> <br />

<Heading text="Divisions" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw; font-size: 1.5em;">
    <PanelBox>
        <p>The divisions in 3MT are as follows:</p>
        <ul style="opacity: 0.8;">
            <li>Grades 6 and below: Foal Division</li>
            <li>Grades 7: Colt Division</li>
            <li>Grades 8: Stallion Division</li>
        </ul> 
        <p>Students may choose to compete in a higher division than they were originally assigned. Student <u><strong>may not</strong></u> compete in a lower division than they were originally assigned.</p>
    </PanelBox>
</div> <br />
