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

<PageHeader title="Instructors" description="Meet the Experienced Instructors for our Prep Classes" button_url="https://forms.gle/vWFaBj8Ubis9a2Vu5" button_text="Class Registration" id="registerBeginner"/>

<br><br>

<FlexBox wrap={true}>
    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Aarushi_Mehrotra_Serious.png" name="Aarushi Mehrotra" description="Aarushi is a freshman at Walter Payton College Preparatory High School and has competed in competitive math since 7th grade. She is a handout and newsletter writer for Mustang Math. She has competed and won in many city-wide competitions and was on the honor roll for the AMC 10 in eighth grade. She was part of her MathCOUNTS team during middle school. She is also the head of her school’s astronomy club and is part of her school’s K-Pop dance team." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Ankita_Varigonda_Serious.png" name="Ankita Varigonda" description="Ankita Varigonda is a junior at Sharon High School. She started her journey with competition math in elementary school and, ever since, has participated in numerous contests, including Math Kangaroo, MathCounts, AMC 8, AMC 10, and AIME. She has taught competitive math to local middle schoolers for two years and has instructed a class using the MathCounts curriculum through the North South Foundation. As a part of Mustang Math, she works on handouts and helps plan logistics for Mustang Math tournaments. Outside of math, she enjoys running, coding, playing violin, and reading books."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Claire_Shen_Serious.png" name="Claire Shen" description="Claire is a sophomore at the Wellington School in Ohio and is part of the Problem Writing and Curriculum Development teams for Mustang Math. She has participated in various math competitions, including MathCounts and AMC. Outside of math, Claire enjoys playing piano and Guzheng (a Chinese instrument). She is also president of her school’s robotics club." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Diya_Vatsavai_Serious.png" name="Diya Vatsavai" description="Diya Vatsavai is a sophomore at Valley Christian High School. She has been doing competitive math since third grade, ranking first nationally in Math Kangaroo and MOEMS with perfect scores. She also won a gold medal for her age group in RSM’s International Math Contest. More recently, she is a two-time AIME qualifier through AMC 10. Outside of math, she enjoys robotics, entrepreneurship, experimenting with AI, and tutoring to help people grow more confident with their academic abilities."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Ethan_Huang_Serious.png" name="Ethan Huang" description="Ethan Huang is a sophomore at Irvington High School. He has been doing math since 5th grade and has participated in contests like MOEMS, MathCounts, Mathleague, and AMC8/10. Ethan enjoys competition math because solving difficult problems after trying for a long time is fun and rewarding. He has been teaching online classes for one year and would love to share his passion for math through Mustang Math classes. Outside of math, Ethan enjoys distance running and eating/cooking." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Harshil_Nukala_Serious.png" name="Harshil Nukala" description="Harshil is a rising freshman in California. He has started his competitive math journey since third grade and has participated in MathCounts, AMC 8, the AMC Series, ARML, and USAMTS.  For Mustang Math, he is on the Curriculum Development and Problem Writing Team. Outside of math, he enjoys physics, computer science, chemistry, and biking."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/logo.png" name="Mihir Tandon" description="Mihir Tandon is a Junior from Illinois. He has participated in many contests, including AMC 10/12, AIME, USAMTS, ARML, and HMMT. Mihir was the 2022 ICTM state champion in Illinois. He also has experience teaching kids at his school. Mihir can't wait to meet all of you and share his love of math through Mustang Math classes." left/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Owen_Zhang_Serious.png" name="Owen Zhang" description="Owen Zhang is a junior at Interlake High School and has competed in competitive math since the 4th grade. He is the lead of Curriculum Development at Mustang Math, and was previously a Primary Contact and Problem Writer. He has qualified for the AIME 4 times in a row, USA(J)MO, and competed at the Stanford Math Tournament, where he won Distinguished Honorable Mention. He is also one of the head coaches at the Odle Middle School Math Club, and will be serving on the Seattle Infinity Math Circle's Student Leadership Group for the 2022-2023 School Year. Outside of math, he enjoys physics, programming, debate, basketball, running, and... eating... a lot."/>

    <InfoPerson width={windowWidth < 700 ? "90%" : "50%"} pic="/about-us-images/serious/Sohum_Uttamchandani_Serious.png" name="Sohum Uttamchandani" description="Sohum Uttamchandani is a freshman at Lynbrook High School. In competitive math, Sohum has participated in AMC8, MathCounts, AMC10, AIME, Stanford Math Tournament, Berkeley Math Tournament, and others. He has gotten a perfect score on the AMC8, a Distinguished Honor Roll on the AMC10, and Honorable Mentions at Stanford and Berkeley Math Tournaments. He has also participated in Science Olympiad (Division B), been to the national competition twice, and won 1st place in the 2023 National Tournament. Sohum has a passion to spread the knowledge of math. He has run the competition math club for 3 years in middle school, as well as taught an AMC10-AIME level class in combinatorics. For Mustang Math, he is on the Curriculum Development and Problem Writing teams. Outside of math, Sohum participates in chess competitions, plays the flute, enjoys programming, and hiking." left/>
</FlexBox>
