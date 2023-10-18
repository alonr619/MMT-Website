<script>
    import PageHeader from '$lib/components/PageHeader.svelte';
    import PanelBox from '$lib/components/PanelBox.svelte';
    import Link from '$lib/components/Link.svelte';

    let windowWidth;
</script>

<svelte:window bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Classes | Tutoring</title>
</svelte:head>

<PageHeader title="Tutoring" description="Join Mustang Math's one-on-one tutoring!" button_url="https://forms.gle/D1ckzySxmH5L7v4X9" button_text="Tutoring Registration" id="registerTutoring"/>

<br><br>

<div style="margin-left: 10vw; margin-right: 10vw;">
    <PanelBox>
        <p style="font-size: 1.5em; text-align: center;">Mustang Math is now offering 1-on-1 tutoring! This is a great opportunity for students who want more individualized attention compared to our regular curriculum classes.</p>

        <div class="flex">
            <div class="compbuttons">
                <Link url="https://forms.gle/D1ckzySxmH5L7v4X9" className="registrationButton2" text="Register for Private Tutoring" textColor="white" visitedColor="white" id="PTRegister" button_id="PTRegister" />
            </div>
        </div>
        
        <p style="font-size: 1.5em; text-align: center;">If you've ever participated in one of our tournaments or classes, these tutoring sessions will be taught by the same high-quality volunteers that make those possible. If this is your first time hearing about Mustang Math, it may help to look at some of our instructor bios. All tutors for 1-on-1 tutoring and Mustang Math classes go through careful screening, training, and all have a strong passion for helping students like you.<br /><br />
        
        We offer tutoring in a variety of math subjects: ranging from help with school material (Algebra 1 to Calculus) to competition training (AMC 8 and Mathcounts to AIME). If you're interested in our services, please sign up using the <a href="https://forms.gle/D1ckzySxmH5L7v4X9">form</a>! The price is $40/hour, of which $15 is fully reinvested into Mustang Math and $25 is paid to the instructor. Upon expressing interest, we will match you with a student who is specifically experienced and highly comfortable with the material that you need help with.<br /><br />
            
        If you have any questions or concerns (for example, if you/your student are interested in being tutored in a subject that is not mentioned above), please reach out to <a target="_blank" href="mailto:tutoring@mustangmath.com" style="word-break: break-all;">tutoring@mustangmath.com</a>! We're happy to answer any questions.<br /><br />
            
        We look forward to meeting and working with you!</p>
    </PanelBox>
</div> <br />
<br />