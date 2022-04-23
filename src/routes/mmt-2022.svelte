<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
</script>
<svelte:head>
    <title>MMT 2022</title>
</svelte:head>

<PageHeader title="MMT 2022" description="MAY 28, 2022 9 AM - 5 PM PT" />
<br /> <br />

<Heading text="Rounds" size={2} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Competition imgSource="mmt-2022/puzzlepiece.png" competition="Mounting Mayhem" description="A team puzzle round where participants are faced with a variety of logical and mathematical puzzles" />
        <Competition imgSource="mmt-2022/bingoboard.png" competition="Bucking Bingo" description="A 24-question strategy-based round where teams work to knock out as many bingos as possible!" />
        <Competition imgSource="mmt-2022/runninghorse.png" competition="Gallop" description="An intense, fast paced round where teams race to be at the top of the live-scored leaderboard" />
        <Competition imgSource="mmt-2022/magnifyingglass.png" competition="Mystery Mare" description="MMT's signature mystery round, where students will be introduced to the format of the round on competition day!" />
    </FlexBox>
</div> <br />

<Heading text="Rules" size={2} textColor="#1B9AAA" />
<Dropdown mainText="General Rules">
    <ol>
        <li>No cheating - This contest has a zero-tolerance cheating policy. Any evidence of cheating may lead to immediate disqualification, or any other punishment deemed appropriate by competition staff.</li>
        <li>No calculators, rulers, compasses, protractors, or other aids are permitted.</li>
        <li>You may not use the Internet as a resource at any point during a test. <strong>A parent should be in the room with the student to enforce this.</strong></li>
            <ol type="a">
                <li>In order to help enforce this, we may require teams to provide a solution for a problem during the competition - so keep track of your work!</li>
            </ol>
        <li>All communication will take place through the Discord platform.</li>
            <ol type="a">
                <li>Scores, important information, documents, etc. will only be communicated through this platform on the day of the contest.</li>
                <li>All teams should be communicating with each other on this platform ONLY.</li>
            </ol>
        <li>Teams may not collaborate with people other than the 1-4 members of their own registered team. This includes members from other teams, parents, coaches, siblings, and friends.</li>
        <li>Teams will be split into three divisions based on the sum of their grade levels. Empty spots and students 5th grade and below count for 5 “points”. The divisions are as follows:</li>
            <ol type="a">
                <li>Division Foal (i): 20-25</li>
                <li>Division Colt (ii): 26-28</li>
                <li>Division Stallion (iii): 29-32</li>
            </ol>
    </ol>
</Dropdown>
<Dropdown mainText="Answer Formatting Rules">
    <ol>
        <li>All answers will be either an integer, decimal, or fractional answer, unless stated otherwise in the problem.</li>
            <ol type="a">
                <li>Integers should be entered with no leading 0s, no spaces, no commas, and no other characters (e.g. 50 instead of 050).</li>
                <li>Decimals should be entered with no unnecessary trailing 0s (e.g. 2.5 instead of 2.50). Decimal answers must be exact unless the question asks for rounding (e.g. you can’t answer ⅓ in a decimal format).</li>
                <li>Fractional answers should be represented as simplified, improper fractions with a “/” in between the numerator and denominator and no spaces or other characters (e.g. 10/7 instead of 10 / 7, 1 3/7 or 20/14).</li>
            </ol>
        <li>All answers should be in simplest form. This means:</li>
            <ol type="a">
                <li>Express all rational, non-integer answers as reduced common fractions, except in problems dealing with money.</li>
                <li>For problems dealing with money, give the answer as a decimal rounded to the nearest cent.</li>
                <li>All fractions and ratios must be reduced to simplest form, all radicals must be simplified, and all denominators rationalized.</li>
            </ol>
        <li><strong>Do NOT include units!</strong></li>
    </ol>
</Dropdown>
<Dropdown mainText="ROUND 1: Mounting Mayhem (Puzzle)">
    <ol>
        <li>The Mounting Mayhem Round will consist of some mathematical-based puzzle questions. Students will have 60 minutes to solve as many of them as possible.</li>
        <li>Puzzles can range from logic to number theory to geometry and more. They often require out-of-the-box thinking although all topics can readily be understood and grasped by middle schoolers.</li>
        <li>Harder puzzles will be worth more points, but these puzzles will be longer and/or require more creativity — you must decide what problems to focus your time on to optimize your team score.</li>
    </ol>
</Dropdown>
<Dropdown mainText="ROUND 2: Bucking Bingo">
    <ol>
        <li>The “Bingo” Round will consist of 24 questions to be solved in 60 minutes.</li>
        <li>The questions will vary in difficulty, but not necessarily in increasing order — rather the difficult problems will be randomly distributed.</li>
        <li>The image below shows the format of the Bingo board:</li>
        <img src="bingo-board.png" alt="Bingo Board" height="300em">
        <li>In this round, each correctly solved question is worth points, but each completed and correct Bingo (each of the problems in a given row, column, or long diagonal are solved and correct) is worth bonus points!</li>
        <li>You are not expected to solve all the questions in this round within the allotted time. Instead, we encourage you to strategize how you might use your time to maximize your points!</li>
    </ol>
</Dropdown>
<Dropdown mainText="ROUND 3: Gallop (Guts)">
    <ol>
        <li>The Gallop Round will consist of 24 questions to be solved in 60 minutes.</li>
        <li>The questions will be divided into 8 or 9 sets of 3 questions each, and you <strong>must submit the answers to one set</strong> before accessing the problems for the next. This means you must strategize when to submit each set (incomplete or not) to ensure you get access to as many questions as possible.</li>
        <li>The problems will get progressively more difficult, and later problems will be worth more points.</li>
        <li>Submissions will be scored immediately and a live score of all participating teams will be available during the competition. Prepare for the adrenaline rush!</li>
    </ol>
</Dropdown>
<Dropdown mainText="ROUND 4: Mystery Mare">
    <ol>
        <li>The Mystery Mare round is exactly that — a mystery!</li>
        <li>Hints about the nature of the round will be revealed as the competition date nears.</li>
        <li>We promise it will be as fun and engaging as the other rounds. :)</li>
    </ol>
</Dropdown>
<br /> <br /> <br />

<style>
    li {
		margin-bottom:0.5em
	}
    .competition-wrapper{
        margin-right: 5vw;
        margin-left: 0vw;
    }
</style>