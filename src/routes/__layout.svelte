<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="all-container">
	<Header />
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

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		bottom: 0;
		width: 100%;
		text-align: center;
		min-height: 50px;
		background-color: #1c6825;
	}

	footer p{
		color: white;
	}

	footer a {
		color: white;
		opacity: 0.6;
	}

	footer a:hover{
		text-decoration: underline;
		opacity: 0.8;
	}
</style>
