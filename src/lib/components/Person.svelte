<script>
  export let pic;
  export let namef;
  export let namel;
  export let email;
  export let role;
  export let rolePW;
  export let roleT;
  export let roleD;
  export let roleTD;
  export let roleCD;
  export let roleCE;
  export let roleVP;
  export let bio;
  export let pic2;
  export let displayname;

  let textsize = 0.9;
  let len = bio.length;
  if (len > 400) {
    textsize = 0.4;
  } else if (len > 300) {
    textsize = 0.6;
  } else if (len > 200) {
    textsize = 0.8;
  }

  // export let position;
  import BoopAction from "$lib/components/BoopAction.svelte";
  import Text from "$lib/components/Text.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";
  import Tooltip from "$lib/components/Tooltip.svelte";
</script>

<PanelBox width="21em">
  <div class="flip-card">
    <div class="card-side-inner">
      <div class="card-side-front person-details">
        <a href="mailto:{email}?subject=Mail to {namef} {namel}">
          <i
            class="fa-solid fa-envelope icon"
            style="position:absolute; top:8px; right:10px; font-size:2.2em;"
          />
        </a>
        <div class="person">
          <div class="person-pic">
            <img
              class="person-img"
              src={pic}
              alt={namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 100px;"
            />
          </div>
          <div class="icons">
            <Tooltip title="Design">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleD == true}
                  <i class="fa-solid fa-pen-fancy icon design" />
                {/if}
              </BoopAction>
            </Tooltip>
  
            <Tooltip title="Community Engagement">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleCE == true}
                  <i class="fa-solid fa-people-group icon community-engagement" />
                {/if}
              </BoopAction>
            </Tooltip>
  
            <Tooltip title="Curriculum Development">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleCD == true}
                  <i class="fa-solid fa-chalkboard-user icon curriculum-development" />
                {/if}
              </BoopAction>
            </Tooltip>
  
            <Tooltip title="Problem Writing">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if rolePW == true}
                  <i class="fa-solid fa-calculator icon problem-writing" />
                {/if}
              </BoopAction>
            </Tooltip>
  
            <Tooltip title="Technology">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleT == true}
                  <i class="fa-solid fa-computer icon technology" />
                {/if}
              </BoopAction>
            </Tooltip>
  
            <Tooltip title="Tournament Development">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleTD == true}
                  <i class="fa-solid fa-pen-ruler icon tournament-development" />
                {/if}
              </BoopAction>
            </Tooltip>          
  
            <Tooltip title="Video Production">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if roleVP == true}
                  <i class="fa-solid fa-camera-retro icon video-production" />
                {/if}
              </BoopAction>
            </Tooltip>
          </div>
          <p class="name">
            {displayname}
          </p>
        </div>
      </div>
      <div class="card-side-back person-details">
        <a href="mailto:{email}?subject=Mail to {namef} {namel}">
          <i
            class="fa-solid fa-envelope icon"
            style="position:absolute; top:8px; right:10px; font-size:2.2em;"
          />
        </a>
        <div class="person-pic">
          {#if pic2}
            <img
              class="person-img"
              src={pic2}
              alt={namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 9999px;"
            />
          {:else}
            <img
              class="person-img"
              src={pic}
              alt={namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 9999px;"
            />
          {/if}
        </div>

        <div
          style="display:flex;align-items:right;margin-top:0.3em;margin-bottom:0em;position:relative;"
        >

          <Tooltip title="Design">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleD == true}
                <i class="fa-solid fa-pen-fancy icon design" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Community Engagement">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleCE == true}
                <i class="fa-solid fa-people-group icon community-engagement" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Curriculum Development">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleCD == true}
                <i class="fa-solid fa-chalkboard-user icon curriculum-development" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Problem Writing">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if rolePW == true}
                <i class="fa-solid fa-calculator icon problem-writing" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Technology">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleT == true}
                <i class="fa-solid fa-computer icon technology" />
              {/if}
            </BoopAction>
          </Tooltip>

          <Tooltip title="Tournament Development">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleTD == true}
                <i class="fa-solid fa-pen-ruler icon tournament-development" />
              {/if}
            </BoopAction>
          </Tooltip>          

          <Tooltip title="Video Production">
            <BoopAction boopParams={{ y: 5, timing: 200 }}>
              {#if roleVP == true}
                <i class="fa-solid fa-camera-retro icon video-production" />
              {/if}
            </BoopAction>
          </Tooltip>
        </div>
        <p class="bio" style="font-size: {textsize}em;">
          {bio}
        </p>
      </div>
    </div>
  </div>
</PanelBox>

<style>
  .person {
    display: grid;
    width: 20em;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  .person-img {
    margin: 3px;
    max-height: 100%;
  }
  .person-pic {
    min-width: 0;
  }
  .person-details {
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    text-align: center;
  }
  .person-pic {
    min-width: 0;
  }
  .icon {
    color: #65c083;
    font-size: 1.2em;
    margin: 3px;
  }

  .design {
    color: #9bd87e;
  }

  .community-engagement {
    color: #7ed8af;
  }

  .curriculum-development {
    color: #7eb5d8;
  }

  .problem-writing {
    color: #957ed8;
  }

  .technology {
    color: #d87ece;
  }

  .tournament-development {
    color: #d87e80;
  }

  .video-production {
    color: #d8c87e;
  }



  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .card-side-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.4s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .card-side-inner {
    transform: rotateY(180deg);
    background-color: rgb(201, 207, 200);
  }

  .card-side-front,
  .card-side-back {
    position: absolute;
    border-radius: 10px;
    background-color: rgb(232, 238, 231);
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .card-side-front {
    color: black;
  }

  .card-side-back {
    display: flex;
    transform: rotateY(180deg);
  }

  .bio {
    margin: 5px;
  }

  .name {
    color: rgb(5, 93, 33);
    font-size: 1.9em;
    font-weight: 400;
  }

  .icons {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
  }

  .icon:hover {
    filter: brightness(90%)
  }
</style>
