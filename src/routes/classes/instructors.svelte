<script>
    import InfoPerson from '$lib/components/InfoPerson.svelte';
    import FlexBox from '$lib/components/FlexBox.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import { onMount } from "svelte";

    let windowWidth;
</script>
<svelte:window bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Classes | Instructors</title>
</svelte:head>

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://tinyurl.com/BeginnerAlgebraRegistration" button_text="Beginner Class Registration!" id="registerBeginner" button2_url="https://tinyurl.com/IntermediateAlgebraReg" button2_text="Intermediate Class Registration!"/>

<br><br>

<FlexBox wrap={true}>
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Anna-Li.jpg" name="Anna Li" description="Anna Li is a senior at Interlake High School and has competed in competitive math since elementary school. She is a lead of Tournament Development at Mustang Math. Anna has had extensive experience developing and teaching curriculum for previous Mustang Math classes as well as occasionally lecturing for her Tyee Competition Math Club. She is also the Head Coach of Tyee Science Club. Outside of math, Anna enjoys science, debate, music, and reading." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Ananya-Bezbaruah.jpg" name="Ananya Bezbaruah" description="Ananya Bezbaruah is a sophomore at Redmond High School. She has been doing math since 6th grade, and has been on the AMC 8 honor roll and distinguished honor roll. She has placed nationally in Math Kangaroo, and participated in various other competitions such as ARML and PuMac. She loves math for the challenge of solving a new problem and the constant opportunity to learn and grow. She has taught AMC 8 classes in the past, and currently works as a math tutor. At Mustang math, Ananya is a problem writer and works on the newsletter. In her free time, she does physics, dances, crochets, and sleeps."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Kiran-Parthasarathy.jpg" name="Kiran Parthasarathy" description="Kiran Parthasarathy is a senior at Sheldon High School. He has been involved with competition math since second grade when he started participating in his city's Math Circle. Since then he has recieved a Distinguished Honorable Mention at the Stanford Math Tournament and has placed nationally every year in Math Kangaroo. He has tutored and taught kids for over three years, and loves to help other people grow. He is the teaching coordinator for Mustang Math's classes. Outside of math, he loves to bike, hike, and hang out with friends." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Michael-Liu.jpg" name="Michael Liu" description="Michael Liu is a junior at Mitty High School and problem writer for Mustang Math. He started doing Chinese math competitions in middle school and competed in AMC, qualified for the AIME and also got an honorable mention in the Stanford Math Tournament Algebra test when he reached high school. Also during middle school, he was a member of a high school program where the high school students (and Michael at the time) taught the middle school students of the same school competitional math. His hobbies within math include geometry, geometry, and more geometry. And outside of math, he enjoys GeoGuessr, watching YouTube, chalk-skipping (credits to Walter Lewin)."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Owen-Zhang.png" name="Owen Zhang" description="Owen Zhang is a junior at Interlake High School and has competed in competitive math since the 4th grade. He is the lead of Curriculum Development at Mustang Math, and was previously a Primary Contact and Problem Writer. He has qualified for the AIME 4 times in a row, USA(J)MO, and competed at the Stanford Math Tournament, where he won Distinguished Honorable Mention. He is also one of the head coaches at the Odle Middle School Math Club, and will be serving on the Seattle Infinity Math Circle's Student Leadership Group for the 2022-2023 School Year. Outside of math, he enjoys physics, programming, debate, basketball, running, and... eating... a lot." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/Yuuki-Sawanoi.jpg" name="Yuuki Sawanoi" description="Yuuki Sawanoi is a rising senior who enjoys both teaching and participating in competition math. He has qualified for USA(J)MO and the Harvard-MIT Invitational Competition. Yuuki is also the co-head coach at Tyee Competition Math Club, where he coached the Washington State MATHCOUNTS Nationals team to 2nd place nationally. He is also one of the two Problem Writing Leads in Mustang Math.."/>
</FlexBox>