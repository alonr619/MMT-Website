<script context="module">
	export const prerender = true;
</script>

<script>
	import Heading from '$lib/components/Heading.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import Person from '$lib/components/Person.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Our Team</title>
</svelte:head>

<PageHeader title="Meet the Team" description="THE ONES MAKING MMT POSSIBLE" />
<section>
	<br />
	<FlexBox wrap={true}>
		<Person pic="about-us-images/Alan_Duan-modified-min.png" name="Alan Duan" />
		<Person pic="about-us-images/alon-ragoler-modified-min.png" name="Alon Ragoler" />
		<Person pic="about-us-images/Ananya_Bezbaruah-modified-min.png" name="Ananya Bezbaruah" />
		<Person pic="about-us-images/Annika_Renganathan-modified-min.png" name="Annika Renganathan" />
		<Person pic="about-us-images/Arpit_Ranasaria-modified-min.png" name="Arpit Ranasaria" />
		<Person pic="about-us-images/Carson_Mitchell-modified-min.png" name="Carson Mitchell" />
		<Person pic="about-us-images/Conor_Kennedy-modified-min.png" name="Conor Kennedy" />
		<Person pic="about-us-images/Daniel_Chirakarn-modified-min.png" name="Daniel Chirakarn" />
		<Person pic="about-us-images/David_Altizio-modified-min.png" name="David Altizio" />
		<Person pic="about-us-images/Dhruv_Kasarabada-modified-min.png" name="Dhruv Kasarabada" />
		<Person pic="about-us-images/Eesha_Jain-modified-min.png" name="Eesha Jain" />
		<Person pic="about-us-images/Eric_Ge-modified-min.png" name="Eric Ge" />
		<Person pic="about-us-images/Evan_Kim-modified-min.png" name="Evan Kim" />
		<Person pic="about-us-images/Grace_Tan-modified-min.png" name="Grace Tan" />
		<Person pic="about-us-images/Hongning_Wang-modified-min.png" name="Hongning Wang" />
		<Person pic="about-us-images/Joyce_Huang-modified-min.png" name="Joyce Huang" />
		<Person pic="about-us-images/Justin_Yokota-modified-min.png" name="Justin Yokota" />
		<Person pic="about-us-images/Kaitlyn_Du-modified-min.png" name="Kaitlyn Du" />
		<Person pic="about-us-images/Krishna_Iyer-modified-min.png" name="Krishna Iyer" />
		<Person pic="about-us-images/Noel Prince_Muthuplakal-modified-min.png" name="Noel Prince Muthuplakal" />
		<Person pic="about-us-images/Onkit_Samanta-modified-min.png" name="Onkit Samanta" />
		<Person pic="about-us-images/Owen_Zhang-modified-min.png" name="Owen Zhang" />
		<Person pic="about-us-images/Reese_Long-modified-min.png" name="Reese Long" />
		<Person pic="about-us-images/Rithwick_Pal-modified-min.png" name="Rithwick Pal" />
		<Person pic="about-us-images/Sebastian_Kumar-modified-min.png" name="Sebastian Kumar" />
		<Person pic="about-us-images/shak_ragoler-modified-min.png" name="Shak Ragoler" />
		<Person pic="about-us-images/Shrey_Shah-modified-min.png" name="Shrey Shah" />
		<Person pic="about-us-images/Tristan_Kay-modified-min.png" name="Tristan Kay" />
		<Person pic="about-us-images/Wilson_Liu-modified-min.png" name="Wilson Liu" />
		<Person pic="about-us-images/Yash_Mathur-modified-min.png" name="Yash Mathur" />
		<Person pic="about-us-images/Yuuki_Sawanoi-modified-min.png" name="Yuuki Sawanoi" />
	</FlexBox>
	<h1>Testsolvers</h1>
	<div style="display: flex; justify-content: center; align-items: center;">
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
	</div>
</section>

<style>
	li {
		font-size: 1.5em;
	}
</style>