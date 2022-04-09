<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<h1>CONTACT</h1>
	<p><a href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a><br /></p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		text-align: center;
		padding: 40px;
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

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
