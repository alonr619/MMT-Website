<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'} style="text-align: left; width: 100%; font-weight: bold;"><a sveltekit:prefetch href="/">Mustang Math Tournament</a></li>
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/about-us'}><a sveltekit:prefetch href="/about-us">About Us</a></li>
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
		background-color: rgba(255, 255, 255, 0.7);
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
		--background: rgba(255, 255, 255, 0.7);
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
		font-weight: bold;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
