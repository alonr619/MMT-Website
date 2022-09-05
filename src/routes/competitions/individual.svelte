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
    <!--ol> REGISTRATION INFROMATION COMING SOON
        <li>Our registration is managed by <a target="_blank" sveltekit:prefetch href="https://contestdojo.com">ContestDojo</a> - if you are a coach for a math team, or just a parent registering your child, you should create a Coaches account on ContestDojo. Note - it may ask you to affirm that you are an 'official representative' for your organization - you can just click that checkbox to move on, we don't require you to be an official representative at MMT.</li>
        <li>Once you create your coaches account, you can click the little 'register' button for MMT 2022. Once you do that, you can add your students to your portal, buy the 'seats' for your students through Stripe, and create and organize your organization's teams! Registration cost is $10 per participant. If you have need for a partial or full fee waiver, please email us at <a target="_blank" href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a> detailing your request.</li>
        <li>Once added to the coaches portal, students should receive an email from ContestDojo detailing how to login to their account. Students should look for this email and login so that they may try taking the 'ContestDojo Practice Round' in their portals with their team! This is helpful in making sure that they understand how our test portal works and are all set for competition day!</li>
        <li>You should be all set to go for the tournament! As always, email us at <a target="_blank" href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a> if you have any confusion or issues!</li>
    </ol-->
    <strong class="registration-other">Registration will open up soon on ContestDojo!</strong> <br />
</Dropdown> <br />

<!-- Heading text="The Individual Round" size=2.5 textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </PanelBox>
</div -->

<Heading text="Schedule" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper" style="margin-left: 5.5vw; margin-right: 5.5vw; justify-content: center;">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
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
