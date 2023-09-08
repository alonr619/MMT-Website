<script context="module">
  export const prerender = true;
</script>

<script>
  import FlexBox from "$lib/components/FlexBox.svelte";
  import Person from "$lib/components/Person.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Alumni from "$lib/components/Alumni.svelte";
  import Members from "$lib/Members.json";
  import MultiSelect from "svelte-multiselect";
  import Heading from "$lib/components/Heading.svelte";
  import { text } from "svelte/internal";
  import Tabs from "$lib/components/Tabs.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";
  import {LightenDarkenColor} from "$lib/utils/LightenDarkenColors.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "All Members", role: "all", value: 1, hex: "#cccccc" },
    { label: "Community Engagement", role: "ce", value: 2, hex: "#d7efcb" },
    { label: "Curriculum Development", role: "cd", value: 3, hex: "#cbefdf" },
    { label: "Design", role: "d", value: 4, hex: "#cbe1ef" },
    { label: "Problem Writing", role: "pw", value: 5, hex: "#d5cbef" },
    { label: "Technology", role: "t", value: 6, hex: "#efcbeb" },
    { label: "Tournament Development", role: "td", value: 7, hex: "#efcbcc" },
    { label: "Video Production", role: "vp", value: 8, hex: "#efe9cb" },
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
  let selected = allRoles;
  $: displayedMembers = Members.filter((user) => {
    let containsAllRoles = false;
    selected.forEach((role) => {
      if (user[role]) {
        containsAllRoles = true;
      }
    });
    return containsAllRoles;
  });

  
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
          {#each displayedMembers as Member}
            {#if tab.role === "all"}
              <Person
                width="21em"
                displayname={Member.displayname}
                pic={Member.pic1path}
                namef={Member.first}
                namel={Member.last}
                email={Member.email}
                role={Member.role}
                rolePW={Member.pw}
                roleT={Member.t}
                roleD={Member.d}
                roleTD={Member.td}
                roleCD={Member.cd}
                roleCE={Member.ce}
                roleVP={Member.vp}
                bio={Member.bio}
                pic2={Member.pic2path}
                themecolor={LightenDarkenColor(tab.hex, -120)}
              />
            {:else if Member[tab.role]}
              <Person
                width="21em"
                displayname={Member.displayname}
                pic={Member.pic1path}
                namef={Member.first}
                namel={Member.last}
                email={Member.email}
                role={Member.role}
                rolePW={Member.pw}
                roleT={Member.t}
                roleD={Member.d}
                roleTD={Member.td}
                roleCD={Member.cd}
                roleCE={Member.ce}
                roleVP={Member.vp}
                bio={Member.bio}
                pic2={Member.pic2path}
                themecolor={LightenDarkenColor(tab.hex, -120)}
              />
            {/if}
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
</style>
