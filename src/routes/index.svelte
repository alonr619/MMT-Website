<script>
    import Heading from '$lib/components/Heading.svelte';
    import Newsletter from '$lib/components/Newsletter.svelte';
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    // need to do this to make the animation play on page load
    let visible = false;
    let windowWidth;
    let background = "right-arrow.png";
    let show = false;
 
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
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowWidth}/>

<svelte:head>
	<title>Mustang Math</title>
</svelte:head>

<Newsletter show={show} />
<div class="outside" style="height: 100vh;">
    <div class="header flex">
        {#if visible}
            <div in:fly="{{ y: -20, duration: 700 }}" class="minidiv">
                {#if windowWidth > 600}
				<Heading className="glow" text="Mustang Math" textColor="white" />
				{:else}
				<Heading className="glow" text="MM" textColor="white" />   
				{/if}
                <div class="flex"><div class="headerline"></div></div>
                <p class="descript" style="font-weight: 300; font-size: 22px; color: white;">Mustang Math [MM] is a 501(c)(3) nonprofit organization of committed high school and college volunteers who are dedicated to promoting a spirit of collaboration among middle school students around the world and piquing their curiosity in mathematics.</p>
                <a sveltekit:prefetch href="/join" class="headerButton">
                    <div class="headerButton" on:mouseenter={toggleBackground} on:mouseleave={toggleBackground}>
                        <p class="headerButton" id="signupformmt">Join the Mustang Math Team!</p>
                        <img height="25px" class="headerButton" src={background} alt="Right-facing arrow icon" />
                    </div>
                </a>
                <br />
                <button class="sign-up" on:click={() => {show = !show;}}><i class="fa-regular fa-newspaper"></i> Sign Up for our Newsletter</button>
            </div>
            
            <svg style="transform: translate({(y / 6) - 30}px, 0px)" id="Layer_1" width="400" height="400" fill-opacity="50%" data-name="Layer 1" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><style>.cls-1{fill:#213d44;}.cls-2{fill:#5b8064;}.cls-3{fill:#8b6e2b;}.cls-4{fill:#8a6d2a;}.cls-5{fill:#65c083;}</style></defs><path class="cls-1" d="M140.26,260.55c2.31-5.44.34-10.83-.19-16.24-38.07-7.72-34.14,12.4-57.77,30-6.73,4.1,3.44,8.09.45,14.33-3.87,8.06-9.76,14.91-13.84,24.53,11.12-3.79,11.8-1.07,8.47,8.35-1.49,4.22.38,9.14-5.45,11.75-2.59,1.16-2,3.55.58,5.17,9.24,5.79,9.77,8.3,2.26,15.07-3.78,3.42-6.47,5.73-.17,9,4.71,3.55-5.64,11.57-5,17.39A25.06,25.06,0,0,1,63.24,394c18-.77,17.83-18.85,29.31-24.41-3.26,10.41-2.85,21.17,7.27,28.83-15-24.85,29.06-39.54,27.65-78,.11-3.5-1.92-8.61,4.61-10,3-.66.6-3.17-.32-4.49C123,289.38,121.76,270.87,140.26,260.55Z"/><path class="cls-1" d="M202.57,211.38c11,1.55,20.75-3.7,31-6.07a13.83,13.83,0,0,0,9.2-8.83c3.71-12.92,9.54-25.76,2.13-39.46-2.84-5.27-5-10.63.37-16.7,4-4.54-.28-10.58-.74-15.95-.25-2.81-2.72-6.15-.21-8.29,7.9-6.72,7.4-15.91,8.66-24.86,1.6-11.27,18-23.19,32-23,8.18.15,9.16-2.22,4.9-8.47-11.63-10.31-26.36.49-39.86-4.52.86,18.1-16.43,11.6-24,18.51.74,3.79,5.25,1.32,7.51,4.88-13.68,7.25-12,27-28.05,32.63,6.05,7.46,9.5-2.46,15.12-1.5-3.94,15.25-14.44,28.08-14.4,44.69,0,2.12-1.85,4.15-2.32,6.34-.79,3.6-7.26,6.34-3.94,9.56s7-3,12-3.65c-.95,8.88-2.56,17.19-6.46,24.94-.92,1.82-4.51,2.95-2.57,5.38,2.33,2.94,4.43-.8,6.66-1.38a12.67,12.67,0,0,0,5.26-3.7c1.1,1.25.7,2.17-.63,2.89C213.89,203.45,194.82,203.12,202.57,211.38Z"/><path class="cls-2" d="M417.71,201.35c-2.14,8-10.66,8.46-15.5,13.27,7.54,4,5.22,17.77,15.94,17C446.78,233.4,439,209.53,417.71,201.35Z"/><path class="cls-2" d="M231.92,388.48c2.15,14.1,1.84,17.35-14.08,14.16,2.18,18,7,24.37,19,25.56,6.36.63,9.9-1.72,10.07-8.31.19-7.39.65-14.48-6.72-19.78C236.53,397.48,234.62,392.43,231.92,388.48Z"/><path class="cls-2" d="M188.33,415.19c-3.89,4.66-9.4,5.75-14.93,6.83,2.91,7.41-6.67,15.49,2.61,20.18C202.83,452.87,213.36,428.78,188.33,415.19Z"/><path class="cls-2" d="M395.8,275.89c-6.63-3.32-7.18-12.12-13.87-15.39A22.73,22.73,0,0,0,379.42,296c2.22,2.09,5.36,4.51,7.3,1.22C390.62,290.54,398.23,285.26,395.8,275.89Z"/><path class="cls-3" d="M406.41,193l2,1.58Z"/><path class="cls-3" d="M408.43,194.59l2.05,1.94Z"/><path class="cls-3" d="M369.6,203.89l-2,.41Z"/><path class="cls-4" d="M153.37,381.69,152,379.32Z"/><path class="cls-4" d="M169.76,380.55c.47.91,1,1.81,1.43,2.72C170.71,382.36,170.23,381.46,169.76,380.55Z"/><path class="cls-4" d="M207.81,391.44l-1.26-2.39Z"/><path class="cls-4" d="M175.59,394.18l1.31,2.71C176.47,396,176,395.08,175.59,394.18Z"/><path class="cls-5" d="M140.07,244.31c22.55-10,22.34-34.34,62.51-32.93,11.37,1.6,21.38-4,32-6.29,4.1-.86,7.14-5,8.31-9,15.81-38.43-9.07-40.73,2.37-55.75,5.61-5.62-5-19.12-1-24.23,7.9-6.72,7.4-15.91,8.66-24.86,1.6-11.27,18-23.19,32-23,8.18.15,9.16-2.22,4.9-8.47,12.25,8.84,25.81,14.35,40.53,18,29.3,5.3,13.37,46.07-4.07,36.63-3.83-2.25-7.22-2.49-10.94-.81-19.68,8.89-20.42,11.1-10.22,29.71,10.3,21.13,23.43,40.27,33,63,8.72-9.2,17.23-34.42,31.55-27.78,12,8.33,27,8.37,38.76,16.07h0c2.68,2.78,6.16,4.54,9.28,6.76-2.14,8-10.66,8.46-15.5,13.27-2,1.23-3.76.59-5.51-.5-2.33-.45-2.47-2.5-3.09-4.2-7.23-7.31-16.67-7.47-26-5.62-3,1.91-4.18,4.09.53,4.56,14.78.72,21.75,33.8,31.18,45.28,0,6.89-2.66,14.7-3.54,21.75-6.63-3.32-7.18-12.12-13.87-15.39-1.7-8.44-3.55-16.67-6.86-24.67-3.22-2.06-5.39-5.66-9.49-6.41C352.3,240.63,341.64,258.6,323,260.47c-4.56.21-7.7,1.94-11.26,4.47-23.5,16.71-45.46,36.71-76.7,37.71-5.31.16-5.86,3.89-6.21,8-.45,20.2-19.14,30.79-26,48.57-3.44,8,7.33,7.76,6.61,14.67,5.14,1.8,9.8,5.14,15.46,5.83,4.16.41,5.67,3.75,6.53,7.39,3,13.71,3,19.34-13.6,15.5-6.93-.53-6.72-7.44-10-11.2-12.3-20.34-46.63-12.5-23-44.17-5.81.31-5.78.35-7.29,1.51-17.76,14.25-6.93,38.82,3.38,53.92l0,0c3.16,3.65,6.49,7.59,7.44,12.53-3.89,4.66-9.4,5.75-14.93,6.83-11.36-8.82-8.35-17.62-14.25-28.64-4.16-3.26-3.87-9.86-7.12-14.06-10.35-16.22-13.48-22.15.39-37.9,15.82-24-1.45-38.31-10.89-58.87-2.66-7.22-.08-14.71-1.27-22C142.57,255.11,140.6,249.72,140.07,244.31Z"/><path class="cls-4" d="M179,400.65l2,2.05Z"/><path class="cls-4" d="M180.89,402.66c.63.68,1.27,1.35,1.9,2C182.16,404,181.52,403.34,180.89,402.66Z"/></svg>
        {/if}
    </div>
</div>
<div class="bg"></div>
<div>
    <h1 id="ms">Mission Statement</h1>
    <div class="quote"> 
        <center><h2>Lorem ipsum <span class="text-green">dolor</span> sit amet Consectetuer adipiscing elit, Sed diam nonummy
Nibh euismod <span class="text-green">tincidunt</span> ut laoreet dolore magna aliquam erat volutpat.</h2></center> 
    </div>
    <h1 id="statistics">Statistics</h1>
    <div class="comp" >
        <h2 class="stat">1200+ Competitors</h2>
        <div class="semicircle" id="scone"></div>
        <div class="semicircle" id="sctwo"></div>
        <div class="semicircle" id="scthree"></div>
        <div class="circle" id="cone"></div>
        <div class="circle" id="ctwo"></div>
        <div class="circle" id="cthree"></div>
    </div>
    <div class="countries">
        <h2 class="stat" style="left:110px">12 Countries</h2>
        <svg id="landmasses" width="192" height="204" viewBox="0 0 192 204" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M83.9585 69.7719C81.9125 58.524 75.609 23.8706 91.5 5L53 24.5L34.5 41.5L11.5 75.5L5.5 104L10 160C12.3333 162.833 16.5 160 24.5 156C33.8059 151.347 56.5 151.5 61 133.5C65.5 115.5 60 109 65 96C70 83 86 81 84 70L83.9585 69.7719Z" stroke="#3C7151" stroke-width="10"/>
<path d="M100 112.5C95.5 103 108.5 91 124.5 82.5C129.5 79.8438 146.2 90.3 149 85.5C152.5 79.5 152 79 164 73.5C176 68 175.5 89 183.5 96C191.5 103 181 120.5 180.5 127.5C180 134.5 160 148 152 150C144 152 145.5 184 138.5 188C131.5 192 123 197.5 114 198.5C105 199.5 108.5 175 106 165C103.5 155 112.5 144.5 114 137C115.5 129.5 104.5 122 100 112.5Z" stroke="#3C7151" stroke-width="10"/>
        </svg>
        <svg id="landmass" width="52" height="102" viewBox="0 0 52 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11.5C3.5 37.5 3.5 51 12 68.5C20.5 86 47 82 47 95C47 105.4 41.6667 67 39 46.5L12 11.5Z" stroke="#3C7151" stroke-width="10"/>
        </svg>
        <div id="earth"></div>
    </div>
    <div class="mem">
        <h2 id="members">Grew to 50 members</h2>
        <svg id="line1" width="114" height="72" viewBox="0 0 114 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.74516 67.52L110.964 4.50003" stroke="#508776" stroke-width="10"/>
        </svg>
        <svg id="point1" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9644 14.5C29.9644 22.5081 23.4725 29 15.4644 29C7.45623 29 0.964355 22.5081 0.964355 14.5C0.964355 6.49187 7.45623 0 15.4644 0C23.4725 0 29.9644 6.49187 29.9644 14.5Z" fill="#508776"/>
        </svg>
        <svg id="line2" width="118" height="31" viewBox="0 0 118 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.07366" y1="26.08" x2="117.074" y2="5.07997" stroke="#508776" stroke-width="10"/>
        </svg>

        <svg id="point2" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.4644" cy="14.5" r="14.5" fill="#508776"/>
        </svg>
        <svg id="line3" width="117" height="66" viewBox="0 0 117 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.96437 61.5L113.965 5.00004" stroke="#508776" stroke-width="10"/>
        </svg>
        <svg id="point3" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.4644" cy="14.5" r="14.5" fill="#508776"/>
        </svg>
        <svg id="line4" width="120" height="93" viewBox="0 0 120 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.99836" y1="88.9747" x2="116.998" y2="4.97472" stroke="#508776" stroke-width="10"/>
        </svg>
        <svg id="point4" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15.4644" cy="14.5" r="14.5" fill="#508776"/>
        </svg>

        <svg id="yaxis" width="58" height="290" viewBox="0 0 58 290" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9644 285C23.9644 287.761 26.2029 290 28.9644 290C31.7258 290 33.9644 287.761 33.9644 285L23.9644 285ZM28.9644 0L0.0968521 50L57.8319 50L28.9644 0ZM33.9644 285L33.9644 45L23.9644 45L23.9644 285L33.9644 285Z" fill="#516370"/>
        </svg>
        <svg id="xaxis" width="531" height="58" viewBox="0 0 531 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 24C2.23858 24 0 26.2386 0 29C0 31.7614 2.23858 34 5 34V24ZM531 29L481 0.132486V57.8675L531 29ZM5 34H486V24H5V34Z" fill="#516370"/>
        </svg>
    </div>
    <h1 class="history">MMT's History</h1>
    
    <div class="twenty">
        <h2 class="years"><span class="year">2020:</span> Lorem ipsum dolor sit amet</h2>
    </div>
    <div class="twentydrop">
        <h2 class="dropdown">This will show up when you click on the box above, similar to the subteam descriptions under “join us”</h2>
    </div>
    <div class="twentyone">
        <h2 class="years"><span class="year">2021:</span> Lorem ipsum dolor sit amet</h2>
    </div>
    <div class="twentyonedrop">
        <h2 class="dropdown">This will show up when you click on the box above, similar to the subteam descriptions under “join us”</h2>
    </div>
    <div class="twentytwo">
        <h2 class="years"><span class="year">2022:</span> Lorem ipsum dolor sit amet</h2>
    </div>
    <div class="twentytwodrop">
        <h2 class="dropdown">This will show up when you click on the box above, similar to the subteam descriptions under “join us”</h2>
    </div>
    <div class="twentythree">
        <h2 class="years"><span class="year">2023:</span> Lorem ipsum dolor sit amet</h2>
    </div>
    <div class="twentythreedrop">
        <h2 class="dropdown">This will show up when you click on the box above, similar to the subteam descriptions under “join us”</h2>
    </div>
    <div class="vert"></div>
    <div class="bgb"></div>
</div>


<style>
    .bg {
        background-color: #edf0f8;
        position: absolute;
        width: 1500px;
        height: 1550px;
        left: 0px;
        top: 1525px;
    }

    .outside {
        background-image: url("/splash.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }

    .sign-up {
        background-color: #65c083;
        color: white;
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

    #ms {
        position: absolute;
        width: 894px;
        height: 115px;
        left: 230px;
        top: 763px;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 115px;

        color: #4998A8;
    }

    .quote {
        box-sizing: border-box;
        position: absolute;
        width: 964px;
        height: 335px;
        left: 190px;
        top: 932px;

        background: #FBFBFB;
        border: 1px solid #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    h2 {
        position: absolute;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        text-align: center;
        color: #444444;
        box-sizing: border-box;
    }

    .text-green {
        font-weight: 700;
        color: #508776;
    }

    #statistics {
        position: absolute;
        width: 894px;
        height: 115px;
        left: 230px;
        top: 1300px;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 115px;

        color: #4998A8;
    }

    .comp {
        box-sizing: border-box;
        position: absolute;
        width: 500px;
        height: 335px;
        left: 130px;
        top: 1482px;

        background: #FBFBFB;
        border: 1px solid #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .stat {
        left: 40px;
        font-weight: 700;
        font-size: 45px;
        line-height: 63px;

        color: #516370;
    }
    
    .semicircle {
        position: absolute;
        width: 110px;
        height: 110px;

        background-color: #508776;
        border-radius: 50% / 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    #scone {
        left: 70px;
        top: 200px;
    }
    
    #sctwo {
        left: 190px;
        top: 200px;
    }

    #scthree {
        left: 310px;
        top: 200px;
    }

    .circle {
        position: absolute;
        width: 70px;
        height: 70px;

        background-color: #508776;
        border-radius: 100% / 100%;
    }

    #cone {
        left: 90px;
        top: 120px;
    }

    #ctwo {
        left: 210px;
        top: 120px;
    }
    #cthree {
        left: 330px;
        top: 120px;
    }

    .countries {
        box-sizing: border-box;
        position: absolute;
        width: 500px;
        height: 335px;
        left: 750px;
        top: 1482px;

        background: #FBFBFB;
        border: 1px solid #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    #earth {
        box-sizing: border-box;
        border-radius: 50%;

        position: absolute;
        width: 200px;
        height: 200px;
        left: 150px;
        top: 110px;

        border: 15px solid #1F4970;
    }

    #landmasses {
        position: absolute;
        scale: 75%;
        left: 130px;
        top: 90px;
    }
    
    #landmass {
        position: absolute;
        scale: 75%;
        left: 300px;
        top: 130px;
    }

    .mem {
        box-sizing: border-box;
        position: absolute;
        width: 832px;
        height: 418px;
        left: 270px;
        top: 1885px;

        background: #FBFBFB;
        border: 1px solid #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    #members {
        position: absolute;
        width: 883px;
        height: 178px;
        left: -30px;
        top: -30px;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 74px;

        color: #516370;
    }

    #yaxis {
        scale: 75%;
        position: absolute;
        left: 210px;
        top: 80px;
    }

    #xaxis {
        scale: 75%;
        position: absolute;
        left: 169px;
        top: 303px;
    }

    #line1 {
        scale: 75%;
        position: absolute;
        left: 226px;
        top: 269px;
    }

    #point1 {
        scale: 75%;
        position: absolute;
        left: 310px;
        top: 267px;
    }

    #line2 {
        scale: 75%;
        position: absolute;
        left: 310px;
        top: 257px;
    }

    #point2 {
        scale: 75%;
        position: absolute;
        left: 396px;
        top: 250px;
    }

    #line3 {
        scale: 75%;
        position: absolute;
        left: 396px;
        top: 210px;
    }

    #point3 {
        scale: 75%;
        position: absolute;
        left: 479px;
        top: 208px;
    }

    #line4 {
        scale: 75%;
        position: absolute;
        left: 479px;
        top: 144px;
    }

    #point4 {
        scale: 75%;
        position: absolute;
        left: 560px;
        top: 150px;
    }

    .history {
        position: absolute;
        width: 894px;
        height: 115px;
        left: 230px;
        top: 2300px;

        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 70px;
        line-height: 115px;

        color: #4998A8;
    }

    .twenty {
        position: absolute;
        width: 1000px;
        height: 120px;
        left: 172px;
        top: 2500px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentydrop {
        z-index: 1;
        display: none;
        
        position: absolute;
        width: 1000px;
        height: 130px;
        left: 172px;
        top: 2640px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentyone {
        position: absolute;
        width: 1000px;
        height: 120px;
        left: 172px;
        top: 2640px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentyonedrop {
        z-index: 1;
        display: none;
        
        position: absolute;
        width: 1000px;
        height: 130px;
        left: 172px;
        top: 2780px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentytwo {
        position: absolute;
        width: 1000px;
        height: 120px;
        left: 172px;
        top: 2780px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentytwodrop {
        z-index: 1;
        display: none;
        
        position: absolute;
        width: 1000px;
        height: 130px;
        left: 172px;
        top: 2920px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentythree {
        z-index: 1;
        position: absolute;
        width: 1000px;
        height: 120px;
        left: 172px;
        top: 2920px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .twentythreedrop {
        z-index: 1;
        display: none;
        
        position: absolute;
        width: 1000px;
        height: 130px;
        left: 172px;
        top: 3060px;

        background: #FBFBFB;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.18);
        border-radius: 15px;
    }

    .vert {
        position: absolute;
        width: 30px;
        height: 540px;
        left: 120px;
        top: 2500px;

        z-index: 1;

        background: #508776;
    }

    .bgb {
        display: none;
        position: absolute;
        top: 3075px;
        width: 1500px;
        height: 140px;
       
        background-color: #edf0f8;
    }
    .years {
        position: absolute;
        top: -10px;
        right: 150px;
    }

    .year {
        color: #508776;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;

        text-align: center;
    }

    .dropdown {
        color: #444444;
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-size: 44px;
    
        top: -20px;
        text-align: center;
    }

    .twenty:hover ~ .twentydrop {
        display: block;
        animation: fadeIn 1s;
    }
    
    .twenty:hover ~ .twentyone {
        postion: absolute;
        top: 2780px;
    }

    .twenty:hover ~ .twentytwo {
        postion: absolute;
        top: 2920px;
    }

    .twenty:hover ~ .twentythree {
        postion: absolute;
        top: 3060px;
    }

    .twenty:hover ~ .vert {
        height: 680px;
    }

    .twenty:hover ~ .bgb {
        display: block;
        z-index: 0;
    }
    .twentyone:hover ~ .twentyonedrop {
        display: block;
        animation: fadeIn 1s;
    }
    
    .twentyone:hover ~ .twentytwo {
        postion: absolute;
        top: 2920px;
    }

    .twentyone:hover ~ .twentythree {
        postion: absolute;
        top: 3060px;
    }

    .twentyone:hover ~ .vert {
        height: 680px;
    }

    .twentyone:hover ~ .bgb {
        display: block;
        z-index: 0;
    }
    .twentytwo:hover ~ .twentytwodrop {
        display: block;
        animation: fadeIn 1s;
    }
    
    .twentytwo:hover ~ .twentythree {
        postion: absolute;
        top: 3060px;
    }

    .twentytwo:hover ~ .vert {
        height: 680px;
    }

    .twentytwo:hover ~ .bgb {
        display: block;
        z-index: 0;
    }

    .twentythree:hover ~ .twentythreedrop {
        display: block;
        animation: fadeIn 1s;
    }

    .twentythree:hover ~ .vert {
        height: 680px;
    }

    .twentythree:hover ~ .bgb {
        display: block;
        z-index: 0;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

</style>