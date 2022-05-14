<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="all-container">
	<head>
	</head>

	<main>
		<slot />
	</main>

	<footer>
		<p><b>Contact at </b><a href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a><br /></p>
	</footer>
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
