<script context="module">
  export const prerender = true;
</script>

<script>
  import FlexBox from "$lib/components/FlexBox.svelte";
  import Person from "$lib/components/Person.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Alumni from "$lib/components/Alumni.svelte";
  import Members from "$lib/Members_New.json";
  import MultiSelect from "svelte-multiselect";
  import Heading from "$lib/components/Heading.svelte";
  import { text } from "svelte/internal";

  import Tab1 from "$lib/components/Tab1.svelte";
	import Tab2 from "$lib/components/Tab2.svelte";
	import Tab3 from "$lib/components/Tab3.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  import PanelBox from "$lib/components/PanelBox.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "All teams",
      role: "all",
      value: 1,
      hex: "#CCCCCC"
		},
    { label: "Community Engagement",
      role: "ce",
      value: 2,
      hex: "#9bd87e"
		},
    { label: "Curriculum Development",
      role: "cd",
      value: 3,
      hex: "#7ed8af"
		},
    { label: "Design",
      role: "d",
      value: 4,
      hex: "#7eb5d8"
		},
    { label: "Problem Writing",
      role: "pw",
      value: 5,
      hex: "#957ed8"
		},
    { label: "Technology",
      role: "t",
      value: 6,
      hex: "#d87ece"
		},
    { label: "Tournament Development",
      role: "td",
      value: 7,
      hex: "#d87e80"
		},
    { label: "Video Production",
      role: "vp",
      value: 8,
      hex: "#d8c87e"
		}
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
  <br /> <br />
  <Heading text="Our Team" size={4} textColor="#1B9AAA" />
  <br /> <br />

  <Tabs {items} let:item={tab}>
    <div class="tab">
      <PanelBox style="background-color: {tab.hex}">
        <span class="label">{tab.label}</span>
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
              />
            {/if}
          {/each}
        </FlexBox>
      </PanelBox>
      
    </div>
  </Tabs>

  

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
</section>

<style>
  li {
    font-size: 1.5em;
  }

  .multiselect-box {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem;
  }

  .multiselect {
    padding: 10px;
    width: 60%;
  }

  .option {
    padding: 0;
    margin: 0;
  }
</style>
