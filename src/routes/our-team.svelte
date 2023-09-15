<script context="module">
  export const prerender = true;
</script>

<script>
  import FlexBox from "$lib/components/FlexBox.svelte";
  import Person from "$lib/components/Person.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Alumni from "$lib/components/Alumni.svelte";
  import Members from "$lib/Members.json";
  import Titles from "$lib/Titles.json";
  import MultiSelect from "svelte-multiselect";
  import Heading from "$lib/components/Heading.svelte";
  import { text } from "svelte/internal";
  import Tabs from "$lib/components/Tabs.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";
  import {LightenDarkenColor} from "$lib/utils/Colors.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "All Members", role: "org", value: 1, hex: "#cccccc" },
    { label: "Community Engagement", role: "ce", value: 2, hex: "#efe9cb" },
    { label: "Curriculum Development", role: "cd", value: 3, hex: "#d7efcb" },
    { label: "Design", role: "d", value: 4, hex: "#cbefdf" },
    { label: "Problem Writing", role: "pw", value: 5, hex: "#cbe1ef" },
    { label: "Technology", role: "t", value: 6, hex: "#d5cbef" },
    { label: "Tournament Development", role: "td", value: 7, hex: "#efcbeb"},
    { label: "Video Production", role: "vp", value: 8, hex: "#efcbcc" },
  ];

  let roles = {
    pw: "Problem Writing",
    t: "Tech",
    d: "Design",
    td: "Tournament Development",
    cd: "Curriculum Development",
    ce: "Community Engagement",
    vp: "Video Production",
  };

  let windowWidth;

  let allRoles = Object.keys(roles);
  let currentPriority = 0;

  let setPriority = (priority) => currentPriority = priority;

  
</script>

<svelte:head>
  <title>Our Team</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<PageHeader
  title="Meet the Team"
  description="The Ones Making Mustang Math Possible"
  button_url="https://contestdojo.com/"
  button_text="Register on ContestDojo!"
  id="registerOnContestDojo"
/>
<section>
  <br>  


  <Tabs {items} let:item={tab} style="margin-left: 2vw; margin-right: 2vw; border-radius: 20px">
    <div class="tab">
      <div style="background-color: {tab.hex};">
        <br>
        <Heading
          text={tab.label}
          size={3}
          textColor={LightenDarkenColor(tab.hex, -120)}
        />
        <br>
        <FlexBox wrap={true}>
          {#each [...new Set(Members.map((member) => member[tab.role + "priority"]))].sort() as priority}
            <Heading
              text={Titles.filter(function (title) {
                return(title.priority == priority)
              })[0][tab.role]}
              size={2.5}
              textColor={LightenDarkenColor(tab.hex, -120)}
            />
            <div class="break"></div>
            {#each Members
              .filter(function (member) {
                return (member[tab.role] && member[tab.role + "priority"] == priority)
              }) as Member}
                <Person
                  width="21em"
                  {Member}
                  {tab}
                  themecolor={LightenDarkenColor(tab.hex, -120)}
                />
            {/each}
            <div class="break"></div>
          {/each}
        </FlexBox>
      </div>
    </div>
  </Tabs>

  <!--
  <h1>Other Contributors</h1>
  <div style="display: flex; justify-content: center; align-items: center;">
    {#if windowWidth > 800}
      <div
        style="width: 25%;display: flex; justify-content: center; align-items: center;"
      >
        <ul>
          <li>Aarjav Jain</li>
          <li>Adam Zweiger</li>
          <li>Advaith Vankamamidi</li>
          <li>Aileen Liang</li>
          <li>Alansha Jiang</li>
          <li>Albert Tam</li>
          <li>Angad Arora</li>
          <li>Angela Yang</li>
        </ul>
      </div>
      <div
        style="width: 25%;display: flex; justify-content: center; align-items: center;"
      >
        <ul>
          <li>Anish Deshpande</li>
          <li>Eric Gao</li>
          <li>Hanna Chen</li>
          <li>Hanting Li</li>
          <li>Karthik Vedula</li>
          <li>Kevin Zhao</li>
          <li>Krish Bhandari</li>
          <li>Maxwell Shi</li>
        </ul>
      </div>
      <div
        style="width: 25%;display: flex; justify-content: center; align-items: center;"
      >
        <ul>
          <li>Neal Yan</li>
          <li>Ryan Li</li>
          <li>Serena Xu</li>
          <li>Siddhant Jena</li>
          <li>Soham Garg</li>
          <li>Sophie Fu</li>
          <li>Yash Mathur</li>
        </ul>
      </div>
    {:else}
      <div>
        <ul>
          <li>Aarjav Jain</li>
          <li>Adam Zweiger</li>
          <li>Advaith Vankamamidi</li>
          <li>Aileen Liang</li>
          <li>Alansha Jiang</li>
          <li>Albert Tam</li>
          <li>Angad Arora</li>
          <li>Angela Yang</li>

          <li>Anish Deshpande</li>
          <li>Eric Gao</li>
          <li>Hanna Chen</li>
          <li>Hanting Li</li>
          <li>Karthik Vedula</li>
          <li>Kevin Zhao</li>
          <li>Krish Bhandari</li>
          <li>Maxwell Shi</li>

          <li>Neal Yan</li>
          <li>Ryan Li</li>
          <li>Serena Xu</li>
          <li>Siddhant Jena</li>
          <li>Soham Garg</li>
          <li>Sophie Fu</li>
          <li>Yash Mathur</li>
        </ul>
      </div>
    {/if}
  </div>

  <h1>Alumni</h1>
  <FlexBox wrap={true}>
    <Alumni
      pic="archive/about-us-images-old/Gloria_Lee-modified-min.png"
      name="Gloria Lee"
      college="GeorgiaTech"
    />
    <Alumni
      pic="archive/about-us-images-old/Mustang-modified-min.png"
      name="Arnav Narula"
      college="Yale"
    />
    <Alumni
      pic="archive/about-us-images-old/Mustang-modified-min.png"
      name="Krish Jain"
      college="Carnegie Mellon University"
    />
  </FlexBox>
-->
</section>

<style>
  .tab {
    border-radius: 200px;
  }
  .break {
    flex-basis: 100%;
    height: 20px;
  }
  .enter {
    flex-basis: 100%;
    height: 0px;
  }
</style>
