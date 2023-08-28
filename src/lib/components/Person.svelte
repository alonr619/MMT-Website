<script>
  export let pic;
  export let namef;
  export let namel;
  export let grade;
  export let email;
  export let pos;
  export let rolePW;
  export let roleT;
  export let roleD;
  export let roleTD;
  export let roleCD;
  export let roleCE;
  export let roleVP;
  export let bio;
  export let pic2;

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
        <div class="person">
          <div class="person-pic">
            <img
              class="person-img"
              src={pic}
              alt={namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 9999px;"
            />
          </div>

          <p class="name">
            {namef}
            {namel}
          </p>
        </div>
      </div>
      <div class="card-side-back person-details">
        <div class="person-pic">
          <img
            class="person-img"
            src={pic2}
            alt={namef}
            width="130"
            height="130"
            style="object-fit: cover; border-radius: 9999px;"
          />
        </div>

        <div
          style="display:flex;align-items:right;margin-top:0.3em;margin-bottom:0em;"
        >
          <!-- <Tooltip title={email}> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          <a href="mailto:{email}?subject=Mail to {namef} {namel}">
            <i class="fa-solid fa-envelope icon" />
          </a>
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Problem Writing"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if rolePW == "true"}
            <i class="fa-solid fa-calculator icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Technology"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleT == "true"}
            <i class="fa-solid fa-computer icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Design"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleD == "true"}
            <i class="fa-solid fa-pen-fancy icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Tournament Development"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleTD == "true"}
            <i class="fa-solid fa-pen-ruler icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Curriculum Development"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleCD == "true"}
            <i class="fa-solid fa-chalkboard-user icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Community Engagement"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleCE == "true"}
            <i class="fa-solid fa-people-group icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->

          <!-- <Tooltip title="Video Presentation"> 
          <BoopAction boopParams={{ y: 5, timing: 200 }}> -->
          {#if roleVP == "true"}
            <i class="fa-solid fa-camera-retro icon" />
          {/if}
          <!--  </BoopAction>
          </Tooltip>  -->
        </div>
        <p class="bio">
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
  }

  .card-side-front,
  .card-side-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .card-side-front {
    background-color: transparent;
    color: black;
  }

  .card-side-back {
    display: flex;
    transform: rotateY(180deg);
  }

  .bio {
    margin: 5px;
    font-size: 0.9em;
  }

  .name {
    color: rgb(5, 93, 33);
    font-size: 1.9em;
    font-weight: 400;
  }
</style>
