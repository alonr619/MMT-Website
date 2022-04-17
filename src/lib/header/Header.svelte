<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
	let windowWidth;
</script>

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
				{#if windowWidth > 790}
				Mustang Math Tournament
				{:else}
				MMT
				{/if}
			</a></li>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/mmt-2022'}><a sveltekit:prefetch href="/mmt-2022">MMT 2022</a></li>
			<li class:active={$page.url.pathname === '/our-team'}><a sveltekit:prefetch href="/our-team">Our Team</a></li>
			<li class:active={$page.url.pathname === '/archive'}><a sveltekit:prefetch href="/archive">Archive</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 4em;
		height: 4em;
		background-color: #06D6A0;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
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
		--background: #06D6A0;
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
		background: var(--background);
		background-size: contain;
		width: 100%;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active {
		text-decoration: underline;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: #177012;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		font-weight: bold;
	}
</style>
