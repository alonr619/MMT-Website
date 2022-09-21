<script>
	import Header from "$lib/header/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import SocialsLink from "$lib/components/SocialsLink.svelte";
	import "../app.css";
	import { page } from "$app/stores";
	import Newsletter from "$lib/components/Newsletter.svelte";

	let show = false;
</script>

<div class="all-container">
	<Header />

	<main>
		<slot />
		<Newsletter {show} />
	</main>
	<aside>
		<SocialsLink
			url="mailto:mustangmathtournament@gmail.com"
			type="solid"
			icon="envelope"
		/>
		<SocialsLink
			url="https://discord.gg/bYDDWxan5d"
			type="brands"
			icon="discord"
		/>
		<SocialsLink
			url="https://www.facebook.com/MustangMath"
			type="brands"
			icon="facebook"
		/>
		<SocialsLink
			url="https://www.instagram.com/mustangmath/"
			type="brands"
			icon="instagram"
		/>
		<SocialsLink
			url="https://www.linkedin.com/company/mustangmathtournament/"
			type="brands"
			icon="linkedin"
		/>
		<SocialsLink
			url="https://artofproblemsolving.com/wiki/index.php/Mustang_Math_Tournament"
			type="text"
			icon="AoPS"
			text
		/>
	</aside>

	{#if $page.url.pathname !== "/"}
		<Footer />
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

	aside {
		position: fixed;
		z-index: 2;
		top: 30%;
		right: 0;
		overflow-x: hidden;
		text-align: center;
		border-style: solid none solid solid;
		border-width: 7px;
		border-color: #1c6825;
		border-radius: 5px 0 0 5px;
		background-color: #119975;
	}
</style>
