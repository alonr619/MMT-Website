<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="all-container">
	<head>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-BBE6Q56W5M"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-BBE6Q56W5M');
		</script>
	</head>

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.all-container {
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
	}
</style>
