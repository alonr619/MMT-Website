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
        { "Week": "1", "Dates": "October 17-October 23, 2022", "Topics Covered": "Introduction & Basic Review" },
        { "Week": "2", "Dates": "October 24-October 30, 2022", "Topics Covered": "Systems of Equations" },
        { "Week": "3", "Dates": "October 31-November 6, 2022", "Topics Covered": "Inequalities" },
        { "Week": "4", "Dates": "November 7-November 13, 2022", "Topics Covered": "Sequences & Series" },
        { "Week": "5", "Dates": "November 14-November 20, 2022", "Topics Covered": "Functions & Their Graphs" },
        { "Week": "6", "Dates": "November 21-November 27, 2022", "Topics Covered": "Polynomials" },
        { "Week": "7", "Dates": "November 28-December 4, 2022", "Topics Covered": "Contest Tricks" },
        { "Week": "8", "Dates": "December 5-December 11, 2022", "Topics Covered": "Special Topics" },
    ]

</script>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<PageHeader title="Classes" description="High quality, student-focused classes of varying level" button_url="https://tinyurl.com/MMClassInterestForm" button_text="Indicate your interest for classes!" button_id="registerOnContestDojo"/>
<br /> <br />
<Heading text="Summary" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><b>Mustang Math classes</b> bring together students from around the world with one thing in common: an outstanding passion for math. Our highly qualified instructors prepare students for competitions in a fun and engaging way. Beyond instruction, we want to build a <b>community</b> of students and teachers sharing their love of math.</p>
        <p style="font-size: 1.5em; text-align: center;">These classes will be run year-round and will be split into 4 main topics: Algebra, Combinatorics, Number Theory, and Geometry, each run for <b>8 weeks</b>. Instructive sessions will run for <b>90 minutes</b> every week over Zoom. Additionally, teachers will hold <b>office hours</b> each week, during which students can seek assistance with the content or ask any lingering questions. Each class will have <b>10-15 students</b> and, depending on the interest we receive, there may be multiple classes run for each level. The total cost for 8 weeks of classes will be <b>$80</b> with financial aid available.</p>
    </PanelBox>
</div> <br />
<br />

<Heading text="Topic-Based Courses" size={2.5} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Competition imgSource="classes/fx.png" competition="Algebra" description="Invariably fun. Key topics include Polynomials, Sequences, and Inequalities." />
        <Competition imgSource="classes/dice.png" competition="Combinatorics" description="You can always count on it. Key topics include Counting Techniques, Distinguishability, and Probability " />
        <Competition imgSource="classes/compass.png" competition="Geometry" description="Just plane interesting. Key topics include Similar Triangles, Circles, and 3D Geometry" />
        <Competition imgSource="classes/numbers.png" competition="Number Theory" description="Prime learning material. Key topics include Primes, Bases, Modular Arithmetic" />
    </FlexBox>
</div> <br />


<Heading text="Algebra Class Details" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Our first class will be on Algebra and will start on the week of October 17th, 2022. There are currently 2 levels of classes planned, Beginner Algebra (AMC 8 level) and Intermediate Algebra (AMC 10/12 level).  See below for the weekly breakdown of topics! If you’re interested in participating in these classes, make sure to fill out the <b><a href = https://tinyurl.com/MMClassInterestForm>interest form</a></b>.</p>
    
    </PanelBox>
</div> <br />
<br />

<Heading text="Algebra Classes Schedule" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<Heading text="One-on-One Tutoring" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Do you prefer a smaller learning environment with more personalized instruction? Mustang Math will also be offering one-on-one tutoring! One-on-one sessions will be more flexible with instruction tailored specifically towards the student’s needs. Pricing is flexible depending on level of instruction required, and will be generally more than our group classes. Do note that instructor availability may be limited. If you are interested in one-on-one tutoring, email us at <a target="_blank" href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a>.</p>
    </PanelBox>
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
</style>
