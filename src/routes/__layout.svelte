<script>
	import Header from '$lib/header/Header.svelte';
	import SocialsLink from '$lib/components/SocialsLink.svelte';
	import '../app.css';
    import { page } from "$app/stores";
  import Newsletter from '$lib/components/Newsletter.svelte';

	let show = false;
</script>

<div class="all-container">
    <Header />

	<main>
		<slot />
		<Newsletter show={show} />
	</main>

    {#if $page.url.pathname !== "/"}
	<footer>
		<p><b>Contact at </b><a href="mailto:mustangmathtournament@gmail.com">mustangmathtournament@gmail.com</a><br /></p>
		<button class="sign-up" on:click={() => {show = !show;}}>Sign Up for Newsletter ></button>
		<div class="socials">
			<SocialsLink url="https://discord.gg/bYDDWxan5d" icon="discord" />
			<SocialsLink url="https://www.facebook.com/MustangMath" icon="facebook" />
			<SocialsLink url="https://www.instagram.com/mustangmath/" icon="instagram" />
			<SocialsLink url="https://www.linkedin.com/company/mustangmathtournament/" icon="linkedin" />
			<SocialsLink url="https://artofproblemsolving.com/wiki/index.php/Mustang_Math_Tournament" icon="AoPS" text />
		</div>
	</footer>
    {/if}
</div>

<style>
	.sign-up {
		margin-bottom: 5px;
		border: 2px solid lightgreen;
		border-radius: 10px;
		background-color: transparent;
		outline: none;
		padding: 10px 20px;
		cursor: pointer;
		color: rgb(255, 255, 255, 0.6);
	}

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
		padding-bottom: 20px;
	}
</style>
