<script context="module">
  export const prerender = true;
</script>

<script>
  import FlexBox from "$lib/components/FlexBox.svelte";
  import Person from "$lib/components/Person.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Alumni from "$lib/components/Alumni.svelte";
  import Members from "$lib/Members_New.json";
  let windowWidth;
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
  <FlexBox wrap={true}>
    {#each Members as Member}
      <Person
        width="21em"
        pic={Member.pic1path}
        namef={Member.first}
        namel={Member.last}
        email={Member.email}
        pos={Member.role}
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
    {/each}
  </FlexBox>

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
</style>
