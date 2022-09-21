<script>
    import Heading from '$lib/components/Heading.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { onMount } from "svelte";

    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";

    onMount(() => {
        visible = true;
    })

    function toggleBackground() {
        if (background == "right-arrow.png") {
            background = "right-arrow-shaded.png";
        } else {
            background = "right-arrow.png";
        }
    }

    let y;

    let scheduleData = [
        { "Class": "Intermediate", "Day of Week": "Sunday", "Time (PT)": "5:00-6:30 PM", "Instructors": "Anna & Harshil"},
        { "Class": "Beginner 1", "Day of Week": "Monday", "Time (PT)": "5:00-6:30 PM", "Instructors": "Ananya & Kiran" },
        { "Class": "Beginner 2", "Day of Week": "Wednesday", "Time (PT)": "7:00-8:30 PM", "Instructors": "Aarushi & Michael" },
        { "Class": "Office Hours 1", "Day of Week": "Sunday", "Time (PT)": "6:30-7:30 PM", "Instructors": "Variable" },
        { "Class": "Office Hours 2", "Day of Week": "Tuesday", "Time (PT)": "7:00-8:00 PM", "Instructors": "Variable" },
    ]
    
    let topicsData = [
        { "Week": "1", "Dates": "October 17-October 23, 2022", "Topics Covered": "Introduction & Basic Review" },
        { "Week": "2", "Dates": "October 24-October 30, 2022", "Topics Covered": "Systems of Equations" },
        { "Week": "3", "Dates": "October 31-November 6, 2022", "Topics Covered": "Inequalities" },
        { "Week": "4", "Dates": "November 7-November 13, 2022", "Topics Covered": "Sequences & Series" },
        { "Week": "5", "Dates": "November 14-November 20, 2022", "Topics Covered": "Functions & Their Graphs" },
        { "Week": "6", "Dates": "November 21-November 27, 2022", "Topics Covered": "Polynomials" },
        { "Week": "7", "Dates": "November 28-December 4, 2022", "Topics Covered": "Contest Tricks" },
        { "Week": "8", "Dates": "December 5-December 11, 2022", "Topics Covered": "Special Topics" },
    ]

    onMount(() => {
        if (windowWidth && windowWidth < 700) {
            for (var i = 0; i < topicsData.length; i++) {
                var string = topicsData[i]["Dates"];
                var stringBetter = string.replaceAll("October", "Oct.").replaceAll("November", "Nov.").replaceAll("December", "Dec.");
                topicsData[i]["Dates"] = stringBetter;
            }
            for (var i = 0; i < scheduleData.length; i++) {
                let string = scheduleData[i]["Day of Week"];
                let stringBetter = string.replaceAll("Sunday", "Sun.").replaceAll("Monday", "Mon.").replaceAll("Tuesday", "Tue.").replaceAll("Wednesday", "Wed.").replaceAll("Thursday", "Thu.").replaceAll("Friday", "Fri.").replaceAll("Saturday", "Sat.");
                scheduleData[i]["Day of Week"] = stringBetter;
                string = scheduleData[i]["Class"];
                stringBetter = string.replaceAll("Intermediate", "Int").replaceAll("Beginner", "Beg").replaceAll("Office Hours", "OH");
                scheduleData[i]["Class"] = stringBetter;
            }
        }

    })
</script>
<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<PageHeader title="Classes" description="High quality, student-focused classes of varying level" button_url="https://tinyurl.com/BeginnerAlgebraRegistration" button_text="Beginner Class Registration!", button2_url="https://tinyurl.com/IntermediateAlgebraReg" button2_text="Intermediate Class Registration!"/>


<br><br>

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
        <p style="font-size: 1.5em; text-align: center;">Our first class will be on Algebra and will start on the week of October 17th, 2022. There are currently 2 levels of classes planned, Beginner Algebra (AMC 8 level) and Intermediate Algebra (AMC 10/12 level).  See below for the weekly schedule and breakdown of topics! If you’re interested in participating in these classes, make sure to fill out the <b><a href = https://tinyurl.com/MMClassInterestForm>interest form</a></b>.</p>
    
    </PanelBox>
</div> <br />
<br />

<Heading text="Algebra Weekly Schedule" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={scheduleData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<Heading text="Topics Covered" size={2.5} textColor="#1B9AAA" />
<div class="schedule-wrapper">
    <FlexBox>
        <PanelBox>
            <Table data={topicsData} width="auto" headerColor="#1B9AAA" rowColors={["#A4D6AF", "#ADCDD6"]} cellPadding={5} cellPaddingRight={20}/>
        </PanelBox>
    </FlexBox>
</div> <br />
<br />

<Heading text="One-on-One Tutoring" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Do you prefer a smaller learning environment with more personalized instruction? Mustang Math will also be offering one-on-one tutoring! One-on-one sessions will be more flexible with instruction tailored specifically towards the student's needs. Pricing is flexible depending on level of instruction required, and will be generally more than our group classes. Do note that instructor availability may be limited. If you are interested in one-on-one tutoring, email us at <a target="_blank" href="mailto:mustangmathtournament@gmail.com" style="word-break: break-all;">mustangmathtournament@gmail.com</a>.</p>
    </PanelBox>
</div> <br />
<br />

<style>
    .outside {
        background-image: url("/splash.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    
    @media (max-width: 700px) {
        .outside {
            background-image: url("/splash-mobile.svg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    
    .header {
        text-align: center;
        position: relative;
        height: calc(100% - 70px);
    }
    
    .svg {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    
    .minidiv {
        z-index: 9;
        margin: 20px;
        max-width: 80%;
    }
    
    .headerline {
        border-bottom: 1px solid white;
        height: 20px;
        width: 60%;
        min-width: 300px;
    }
    
    div.headerButton {
        display: flex;
        background-color: #65c083;
        border-radius: 50px;
        padding: 10px;
        color: white;
        margin: auto;
        justify-content: center;
        align-items: center;
        width: 300px;
    }
    
    p.headerButton {
        color: white;
        align-self: center;
        font-size: 1em;
        margin: 5px;
        margin-right: 20px;
    }
    
    a.headerButton:hover {
        text-decoration: none;
    }
    
    </style>