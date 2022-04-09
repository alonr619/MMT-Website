<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="all-container">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<h1>CONTACT</h1>
		<p><a href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a><br /></p>
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
		padding-bottom: 160px; /* push footer to bottom, keep equal to footer height below */
		position: relative;
		min-height: 100vh;
		box-sizing: border-box;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		text-align: center;
		height: 160px; /* change this and padding-bottom above if it overflows */
		background-color: #177012;
	}

	footer h1{
		color: white;
	}

	footer p{
		color: white;
	}

	footer a {
		color: white;
		text-decoration: underline;
		opacity: 0.6;
	}

	footer a:hover{
		opacity: 0.8;
	}
</style>
