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

  // export let position;
  import BoopAction from "$lib/components/BoopAction.svelte";
  import Text from "$lib/components/Text.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";
  import Tooltip from "$lib/components/Tooltip.svelte";
</script>

<PanelBox width="21em">
  <div class="person-flex">
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
    <div class="person-details">
      <p style="color: black; font-size: 1.2em;font-weight:400;">
        {namef}
        {namel}
      </p>

      <div style="display:flex;align-items:right;margin-bottom:1em;">
        <Tooltip title={email}>
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            <a href="mailto:{email}?subject=Mail from our Website">
              <i class="fa-solid fa-envelope icon" />
            </a>
          </BoopAction>
        </Tooltip>

        <Tooltip title="Problem Writing">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if rolePW == "TRUE"}
              <i class="fa-solid fa-calculator icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Technology">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleT == "TRUE"}
              <i class="fa-solid fa-computer icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Design">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleD == "TRUE"}
              <i class="fa-solid fa-pen-fancy icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Tournament Development">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleTD == "TRUE"}
              <i class="fa-solid fa-pen-ruler icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Curriculum Development">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleCD == "TRUE"}
              <i class="fa-solid fa-chalkboard-user icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Community Engagement">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleCE == "TRUE"}
              <i class="fa-solid fa-people-group icon" />
            {/if}
          </BoopAction>
        </Tooltip>

        <Tooltip title="Video Presentation">
          <BoopAction boopParams={{ y: 5, timing: 200 }}>
            {#if roleVP == "TRUE"}
              <i class="fa-solid fa-camera-retro icon" />
            {/if}
          </BoopAction>
        </Tooltip>
      </div>
    </div>
  </div>
</PanelBox>

<style>
  .person-flex {
    display: flex;
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
</style>
