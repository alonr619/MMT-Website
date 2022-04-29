<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
	let windowWidth = 0;
	let showMobile = false;
	function toggleMobile(){
		showMobile = showMobile ? false : true;
	};
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<svelte:window bind:innerWidth={windowWidth} />

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'} style="text-align: left; width: 100%; font-weight: bold; text-decoration: none;"><a sveltekit:prefetch href="/" style="font-size: 1.25rem;">
				{#if windowWidth > 1000}
				Mustang Math Tournament
				{:else}
				MMT
				{/if}
			</a></li>
			{#if windowWidth>700 || windowWidth===0}
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/" class="textnav">Home</a></li>
			<li class:active={$page.url.pathname === '/mmt-2022'}><a sveltekit:prefetch href="/mmt-2022" class="textnav">MMT 2022</a></li>
			<li class:active={$page.url.pathname === '/our-team'}><a sveltekit:prefetch href="/our-team" class="textnav">Our Team</a></li>
			<li class:active={$page.url.pathname === '/archive'}><a sveltekit:prefetch href="/archive" class="textnav">Archive</a></li>
			{:else}
			<div on:click={toggleMobile} id="hamburger-div">
			<i id="hamburger-icon" class="fa fa-bars"></i>
			</div>
			{/if}
		</ul>
	</nav>
</header>
{#if showMobile && windowWidth < 700}
	<div id="hamburger-links">
		<div class="exterior"><a on:click={toggleMobile} class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a></div>
		<div class="exterior"><a on:click={toggleMobile} class:active={$page.url.pathname === '/mmt-2022'} sveltekit:prefetch href="/mmt-2022">MMT 2022</a></div>
		<div class="exterior"><a on:click={toggleMobile} class:active={$page.url.pathname === '/our-team'} sveltekit:prefetch href="/our-team">Our Team</a></div>
		<div class="exterior"><a on:click={toggleMobile} class:active={$page.url.pathname === '/archive'} sveltekit:prefetch href="/archive">Archive</a></div>
	</div>
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		background-color: #1c6825;
	}

	.corner {
		width: 4em;
		height: 4em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: left;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 3em;
		height: 3em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 4em;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		list-style: none;
		background: #1c6825;
		background-size: contain;
		width: 100%;
	}

	li {
		position: relative;
		height: 100%;
	}

	.active {
		text-decoration: underline;
	}

	a {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		padding: 0 1em;
		color: white;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		width: fit-content;
	}

	.textnav {
		min-width: 6em;
	}

	a:hover {
		font-weight: bold;
	}

	#hamburger-icon {
		margin-left: 40%;
		margin-right: 40%;
		margin-top: 40%;
		margin-bottom: 40%;
	}

	#hamburger-div {
		width: 80px;
		height: 100%;
		display: flex;
		align-items: center;
		color: white;
	}

	#hamburger-links {
		background-color: #65c083;
		padding: 10px;
	}

	.exterior {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.exterior .active {
		background-color: #5b8064;
		text-decoration: none;
	}

	#hamburger-links a {
		padding: 10px;
		text-align: center;
	}
</style>
