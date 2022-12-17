<script>
    import Heading from '$lib/components/Heading.svelte';
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Link from '$lib/components/Link.svelte';
    import Button from '$lib/components/Button.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Competition from '$lib/components/Competition.svelte';
    import Tournament from '$lib/components/Tournament.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import Table from "$lib/components/Table.svelte";
    import PanelBox from "$lib/components/PanelBox.svelte";
    import Image from '$lib/components/Image.svelte';
    let windowWidth;
    const scheduleData = [
        { "Day": "4/22-4/29", "Start Time (PT)": "All Day", "Event": "Problem of the Day" },
        [ "4/29", "9:00 AM-9:30 AM", "Check-in" ],
        [ "4/29", "9:30 AM-10:00 AM", "Opening Ceremony" ],
        [ "4/29", "10:00 AM-11:30 AM", "Mounting Mayhem (75 minutes)" ],
        [ "4/29", "11:30 AM-12:30 PM", "Bucking Bingo (60 minutes) " ],
        [ "4/29", "12:30 PM-1:30 PM", "Lunch Break (60 minutes)" ],
        [ "4/29", "1:30 PM-2:45 PM", "??? (60 minutes)" ],
        [ "4/29", "2:45 PM-3:30 PM", "Mystery Mare (40 minutes)" ],
        [ "4/29", "3:30 PM-4:30 PM", "Optional Activities" ],
        [ "4/29", "4:30 PM-5:00 PM", "Awards Ceremony" ]
    ];

    const topicsCovered = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>",
        "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsSmall1 = [
        { "Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>",
        "Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>" }
    ];
    const topicsSmall2 = [
        { "Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>",
        "Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>" }
    ];
    const topicsAlgebra = [
        {"Algebra": "<ul><li>Systems of equations</li> <li>Quadratics</li> <li>Vieta’s</li> <li>Binomial Theorem</li> <li>Radicals/Exponents</li> <li>Simon’s Favorite Factoring Trick</li> <li>Ratios</li> <li>(Infinite) Geometric Series</li> <li>Arithmetic Series</li> <li>Sum/Difference of Powers</li> <li>Rate/Time</li> <li>Floor/Ceiling</li> <li>Absolute Value</li> <li>Substitution (Nested Roots/Repeated Fractions)</li> <li>Mean, Median, Mode, Range</li> <li>Telescoping</li></ul>"}
    ];
    const topicsCombo = [
        {"Combinatorics": "<ul><li>Sticks and Stones</li> <li>Permutation/Combination</li> <li>Properties of Inclusion Exclusion for three or less sets</li> <li>Basic Geometric Probability</li> <li>Conditional Probability</li> <li>Expected Values</li> <li>Complementary Counting</li> <li>Recursion</li> <li>Bijections</li> <li>Casework</li> <li>Pigeonhole Principle</li> <li>Double-counting</li> <li>Basic Invariants</li></ul>"}
    ];
    const topicsGeo = [
        {"Geometry": "<ul><li>Area Formulas</li> <li>Volume Formulas</li> <li>Shoelace Formula</li> <li>Pythagorean Theorem</li> <li>Distance Formula</li> <li>Similar Triangles</li> <li>Angle Chasing</li> <li>Power of a Point</li> <li>Basic Mass Points</li> <li>Heron’s Formula</li> <li>Pick’s Theorem</li> <li>Surface Area for Pyramids, Prisms, and Cones</li> <li>Arcs and Sectors</li> <li>Angle Bisector Theorem</li> <li>Internal/External Angles</li></ul>"}
    ];
    const topicsNT = [
        {"Number Theory": "<ul><li>Fermat’s Little Theorem</li> <li>Euclidean Algorithm</li> <li>Chinese Remainder Theorem</li> <li>Divisibility</li> <li>Chicken McNugget Theorem</li> <li>GCD and LCM</li> <li>Number of Factors</li> <li>Sum of Factors</li> <li>Basic Modular Arithmetic</li> <li>Fundamental Theorem of Arithmetic</li></ul>"}
    ];
</script>
<svelte:head>
    <title>MMT 2023</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader title="Mustang Math Tournament (MMT)" description="April 29, 2023: 9:00 AM - 4:30 PM PT" button_url="https://contestdojo.com/" button_text="Registration on ContestDojo!" button_id="registerOnContestDojo" />

<br /><br />

<Heading text="Locations" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><a target="_blank" href="/competitions/mmt-2023/mmt-2023-CA">California</a></p>
    </PanelBox>
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><a target="_blank" href="/competitions/mmt-2023/mmt-2023-WA">Washington</a></p>
    </PanelBox>
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><a target="_blank" href="/competitions/mmt-2023/mmt-2023-online">Online</a></p>
    </PanelBox>
</div><br />

<Heading text="Competitions" size={2.5} textColor="#1B9AAA" />
<div class="competition-wrapper">
    <FlexBox align="start">
        <Tournament imgSource="mmt-2022/puzzlepiece.png" title="MMT Washington" description="A team puzzle round where participants are faced with a variety of logical and mathematical puzzles" button_text = "MMT WA" button_url = "/competitions/mmt-2023/mmt-2023-WA" />
        <Tournament imgSource="mmt-2022/puzzlepiece.png" title="MMT Washington" description="A team puzzle round where participants are faced with a variety of logical and mathematical puzzles" />
        <Tournament imgSource="mmt-2022/puzzlepiece.png" title="MMT Washington" description="A team puzzle round where participants are faced with a variety of logical and mathematical puzzles" />
    </FlexBox>
</div> <br />

<Heading text="What is MMT?" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">The Mustang Math Tournament is a middle school math competition run for middle school students around the nation.
            It is put together by Mustang Math, a 501(c)(3) nonprofit organization put together by high school and college students, including the organizers of the Stanford and Berkeley Math Tournaments!
            The tournament is centered around teamwork and collaboration, incentivizing students to work with their teams not only to navigate the challenging but interesting problems of the tournament, 
            but also to develop strategies to master the unique and fun game-like rounds. With interesting and fun rounds including a logic-based puzzle round, a strategy-filled bingo round, a race-like gallop round, 
            and our trademark 'mystery round,' our tournament is guaranteed to be enjoyable for any and all students who have an interest in mathematics. Don't believe us? Check out some comments from past participants!
        </p>
    </PanelBox>
</div> <br />

<Heading text="Testimonials" size={2.5} textColor="#1B9AAA" />
<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;"><i>"MMT has a unique take on standard math competitions" - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>“MMT`s style of problems are much better than other tournaments. Unlike other tournaments that has the same style over the years, MMT has new and exciting styles of problems that makes it more fun to try and solve it on the spot” - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>"MMT focused less on calculations than other math competitions" - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>“I really appreciate all that MMT has done and I look forward to the competition that is held next year! I must say that the MMT was an impressive execution of math competitions unlike anything I've seen before!”  - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>"My favorite memory from MMT was the teamwork - both chaotically and organizedly working with each other to solve the problems" - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>"MMT had people captivated even before the tournament started with their Discord server and problems of the day" - 2022 Participant</i></p>
        <p style="font-size: 1.5em; text-align: center;"><i>“I think this was a very nice way to spend my day.” - 2021 Participant</i></p>
    </PanelBox>
</div> <br />

<br /><br />

<style>
    li {
        list-style-type: disc;
        margin-left: 20px;
    }
</style>
