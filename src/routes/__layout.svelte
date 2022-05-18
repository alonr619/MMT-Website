<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
    import { page } from "$app/stores";
</script>

<div class="all-container">
    <Header />

	<main>
		<slot />
	</main>

    {#if $page.url.pathname !== "/"}
	<footer>
		<p><b>Contact at </b><a href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a><br /></p>
	</footer>
    {/if}
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
