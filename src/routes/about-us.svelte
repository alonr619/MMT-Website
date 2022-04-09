<script>
	import Button from '$lib/components/Button.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Input from '$lib/components/Input.svelte';
	import Link from '$lib/components/Link.svelte';
	import Text from '$lib/components/Text.svelte';
	import FlexBox from '$lib/components/FlexBox.svelte';
	import FlexItem from '$lib/components/FlexItem.svelte';
	import Table from '$lib/components/Table.svelte';
	import Image from '$lib/components/Image.svelte';
	import Person from '$lib/components/Person.svelte';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<section>
	<br />
	<Heading text="About Us" textColor="#177012" />
	<FlexBox wrap={true}>
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
		<Person pic="about-us-images/alon-ragoler.png" name="Alon Ragoler" position="Tech Lead" />
	</FlexBox>
</section>