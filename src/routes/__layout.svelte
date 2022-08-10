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
		<div class="socials">
			<a href="https://discord.gg/bYDDWxan5d" target="_blank" rel="noopener noreferrer" class="social-link">
				<i class="fa-brands fa-discord"></i>
			</a>
			<a href="https://www.facebook.com/MustangMath" target="_blank" rel="noopener noreferrer" class="social-link">
				<i class="fa-brands fa-facebook"></i>
			</a>
			<a href="https://www.instagram.com/mustangmath/" target="_blank" rel="noopener noreferrer" class="social-link">
				<i class="fa-brands fa-instagram"></i>
			</a>
			<a href="https://www.linkedin.com/company/mustangmathtournament/" target="_blank" rel="noopener noreferrer" class="social-link">
				<i class="fa-brands fa-linkedin"></i>
			</a>
			<a href="https://artofproblemsolving.com/wiki/index.php/Mustang_Math_Tournament" target="_blank" rel="noopener noreferrer" class="social-link aops">
				AoPS
			</a>
		</div>
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

	footer {
		display: flex;
		flex-direction: column;
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

	.socials {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		padding-top: 10px;
		padding-bottom: 20px;
	}

	.social-link {
		padding: 10px;
	}

	.aops {
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
