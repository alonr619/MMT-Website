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
		<Person pic="about-us-images/Conor_Kennedy-modified-min.png" name="Conor Kennedy" />
		<Person pic="about-us-images/Daniel_Chirakarn-modified-min.png" name="Daniel Chirakarn" />
		<Person pic="about-us-images/Dhruv_Kasarabada-modified-min.png" name="Dhruv Kasarabada" />
		<Person pic="about-us-images/Eric_Ge-modified-min.png" name="Eric Ge" />
		<Person pic="about-us-images/Evan_Kim-modified-min.png" name="Evan Kim" />
		<Person pic="about-us-images/Grace_Tan-modified-min.png" name="Grace Tan" />
		<Person pic="about-us-images/Hongning_Wang-modified-min.png" name="Hongning Wang" />
		<Person pic="about-us-images/Joyce_Huang-modified-min.png" name="Joyce Huang" />
		<Person pic="about-us-images/Krishna_Iyer-modified-min.png" name="Krishna Iyer" />
		<Person pic="about-us-images/Noel Prince_Muthuplakal-modified-min.png" name="Noel Prince Muthuplakal" />
		<Person pic="about-us-images/Reese_Long-modified-min.png" name="Reese Long" />
		<Person pic="about-us-images/Rithwick_Pal-modified-min.png" name="Rithwick Pal" />
		<Person pic="about-us-images/Sebastian_Kumar-modified-min.png" name="Sebastian Kumar" />
		<Person pic="about-us-images/shak_ragoler-modified-min.png" name="Shak Ragoler" />
		<Person pic="about-us-images/Shrey_Shah-modified-min.png" name="Shrey Shah" />
		<Person pic="about-us-images/Wilson_Liu-modified-min.png" name="Wilson Liu" />
	</FlexBox>
</section>