<script context="module">
	export const prerender = true;
</script>

<script>
	import Heading from '$lib/components/Heading.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import Person from '$lib/components/Person.svelte';
	import Header from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Our Team</title>
</svelte:head>

<Header title="Meet the Team" description="THE ONES MAKING MMT POSSIBLE" />
<section>
	<br />
	<FlexBox wrap={true}>
		<Person pic="about-us-images/Alan_Duan-modified.png" name="Alan Duan" />
		<Person pic="about-us-images/alon-ragoler-modified.png" name="Alon Ragoler" />
		<Person pic="about-us-images/Ananya_Bezbaruah-modified.png" name="Ananya Bezbaruah" />
		<Person pic="about-us-images/Annika_Renganathan-modified.png" name="Annika Renganathan" />
		<Person pic="about-us-images/Arpit_Ranasaria-modified.png" name="Arpit Ranasaria" />
		<Person pic="about-us-images/Conor_Kennedy-modified.png" name="Conor Kennedy" />
		<Person pic="about-us-images/Daniel_Chirakarn-modified.png" name="Daniel Chirakarn" />
		<Person pic="about-us-images/Dhruv_Kasarabada-modified.png" name="Dhruv Kasarabada" />
		<Person pic="about-us-images/Evan_Kim-modified.png" name="Evan Kim" />
		<Person pic="about-us-images/Grace_Tan-modified.png" name="Grace Tan" />
		<Person pic="about-us-images/Hongning_Wang-modified.png" name="Hongning Wang" />
		<Person pic="about-us-images/Joyce_Huang-modified.png" name="Joyce Huang" />
		<Person pic="about-us-images/Krishna_Iyer-modified.png" name="Krishna Iyer" />
		<Person pic="about-us-images/Noel Prince_Muthuplakal-modified.png" name="Noel Prince Muthuplakal" />
		<Person pic="about-us-images/Reese_Long-modified.png" name="Reese Long" />
		<Person pic="about-us-images/Rithwick_Pal-modified.png" name="Rithwick Pal" />
		<Person pic="about-us-images/Sebastian_Kumar-modified.png" name="Sebastian Kumar" />
		<Person pic="about-us-images/shak_ragoler-modified.png" name="Shak Ragoler" />
		<Person pic="about-us-images/Shrey_Shah-modified.png" name="Shrey Shah" />
		<Person pic="about-us-images/Wilson_Liu-modified.png" name="Wilson Liu" />
	</FlexBox>
</section>