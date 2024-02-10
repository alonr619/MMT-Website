<script>
    import Heading from '$lib/components/Heading.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Testimonial from "$lib/components/Testimonial.svelte";
    import Tournament from '$lib/components/Tournament.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Card from '$lib/components/CardPanelBox.svelte';

    let windowWidth;
</script>
<svelte:head>
    <title>MMT 2024</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="page"></div>
<PageHeader title="Mustang Math Tournament [MMT] 2024" description="Coming April/May 2024" button_url="#competition" button_text="Learn More" button_id="registerForCompetition" target="" />

<br />

<br id="competition" />
<Heading text="Competitions" size={2.5} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Tournament initials="CA" imgSource="/competitions/states/CaliforniaOutlineCursive.svg" title="MMT California" location= "San Jose, CA" description="" button_text = "MMT CA" button_url = "/competitions/mmt-2024/mmt-2024-CA"/>
        <Tournament initials="GA" imgSource="/competitions/states/GeorgiaOutlineCursive.svg" title="MMT Georgia" location= "Atlanta, GA" description="" button_text = "MMT GA" button_url = "/competitions/mmt-2024/mmt-2024-GA"/>
        <Tournament initials="IL" imgSource="/competitions/states/IllinoisOutlineCursive.svg" title="MMT Illinois" location= "Chicago, IL" description="" button_text = "MMT IL" button_url = "/competitions/mmt-2024/mmt-2024-IL"/>
        <Tournament initials="MA" imgSource="/competitions/states/MassachusettsOutlineCursive.svg" title="MMT Massachusetts" location= "Boston, MA" description="" button_text = "MMT MA" button_url = "/competitions/mmt-2024/mmt-2024-MA"/>
        <Tournament initials="WA" imgSource="/competitions/states/WashingtonOutlineCursive.svg" title="MMT Washington" location="Bellevue, WA" description="" button_text = "MMT WA" button_url = "/competitions/mmt-2024/mmt-2024-WA" />
        <Tournament initials="O" imgSource="/competitions/mmt-2024/online.png" title="MMT Online" location="Online (Discord)" description="" button_text = "MMT Online" button_url = "/competitions/mmt-2024/mmt-2024-online"/>
    </FlexBox>
</div> 

<br />
<Heading text="What is MMT?" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <Card initials="MM">
        <div style="padding: 20px;">
            <p style="font-size: 1.5em; text-align: center;">The Mustang Math Tournament is a middle school math competition run for middle school students around the nation.
                It is put together by Mustang Math, a 501(c)(3) nonprofit organization put together by high school and college students, including the directors of the Stanford and Berkeley Math Tournaments!<br /><br />
                The tournament is <strong>centered around teamwork and collaboration</strong>, incentivizing students to work with their teams not only to navigate the <strong>challenging but interesting problems</strong> of the tournament, 
                but also to develop strategies to master the unique and fun game-like rounds. With interesting and fun rounds including a logic-based puzzle round, a strategy-filled bingo round, a race-like gallop round, 
                and our trademark 'Mystery Mare' round, our tournament is guaranteed to be <strong>enjoyable for any and all students who have an interest in mathematics</strong>.<br /><br />
                Don't believe us? Check out some comments from past participants below!
            </p>
        </div>
    </Card>
</div>

<Heading text="Testimonials" size={2.5} textColor="#1B9AAA" />
<div class="grid-three" style="margin-left: 10vw; margin-right: 10vw;">
    <div>
        <Testimonial testimonial="MMT has a unique take on standard math competitions" title="2022 Participant" />
        <Testimonial testimonial="MMT focused less on calculations than other math competitions" title="2022 Participant" />
        <Testimonial testimonial="I think this was a very nice way to spend my day." title="2021 Participant" />
    </div>

    <div>
        <Testimonial testimonial="MMT's style of problems are much better than other tournaments. Unlike other tournaments that has the same style over the years, MMT has new and exciting styles of problems that makes it more fun to try and solve it on the spot" title="2022 Participant" />
        <Testimonial testimonial="MMT had people captivated even before the tournament started with their Discord server and problems of the day" title="2022 Participant" />
    </div>
    
    <div>
        <Testimonial testimonial="I really appreciate all that MMT has done and I look forward to the competition that is held next year! I must say that the MMT was an impressive execution of math competitions unlike anything I've seen before!" title="2022 Participant" />
        <Testimonial testimonial="My favorite memory from MMT was the teamwork - both chaotically and organizedly working with each other to solve the problems" title="2022 Participant" />
    </div>
</div> <br />

<br /><br />

<style>
    .page { 
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: url("/competitions/mmt-2024/cardbackground.png");
    }

    .page::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-color: rgba(211, 223, 235, 0.96);
    }

    li {
        list-style-type: disc;
        margin-left: 20px;
    }
</style>
