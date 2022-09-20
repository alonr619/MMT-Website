<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	let windowWidth = 0;
	let open = false;
	let courseExpanded = false;

	function clickHandler() {
		courseExpanded = !courseExpanded;
	}

	const MOBILE = 700;
	const TITLE_BREAKPOINT = MOBILE + 350;

	const navPages = [
		{path: "/our-team", text: "Our Team"},
		{path: "/sponsors", text: "Sponsors"},
        {path: "/past-exams", text: "Past Exams"},
    ]
</script>

<svelte:head>
	<!-- Import base css -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
	/>

	<!-- Import spin css (spin is default type) -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
	/>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="navbar">
	<div
		class:active={$page.url.pathname === '/'}
		style="text-align: left; position: fixed; top: 0; left: 0;padding: 0;font-weight: bold; text-decoration: none;"
	>
		<a style="text-decoration: none;" sveltekit:prefetch href="/">
			<img src="/favicon.png" alt="mustang math logo" />
			<h1 style="font-size: 24px;">
				{#if windowWidth > TITLE_BREAKPOINT}
					Mustang Math
				{:else}
					MM
				{/if}
			</h1>
		</a>
	</div>
	<div></div>
	<div style="float: right; height: 100%; margin-right: 5px;">
		{#if windowWidth > MOBILE}
			<div class="dropdown">
				<button class="dropbtn" class:active={$page.url.pathname === '/courses'}>
					<a href="/competitions" style="padding: 0; margin: 0;"
						>Competitions <i class="fa fa-caret-down" style="margin-left: 2px;" /></a
					>
				</button>
				<div class="dropdown-content">
					<a href={`/competitions/3mt-2022`} sveltekit:reload>3MT</a>
					<a href={`/competitions/mmt-2023`} sveltekit:reload>MMT 2023</a>
				</div>
			</div>
			<div class="dropdown">
				<button class="dropbtn" class:active={$page.url.pathname === '/courses'}>
					<a href="/classes" style="padding: 0; margin: 0;"
						>Classes <i class="fa fa-caret-down" style="margin-left: 2px;" /></a
					>
				</button>
				<div class="dropdown-content">
					<a href={`/classes`} sveltekit:reload>temp</a>
				</div>
			</div>
			{#each navPages as navPage (navPage.path)}
				<a sveltekit:prefetch href="{navPage.path}" class:active={$page.url.pathname === navPage.path}>{navPage.text}</a>
			{/each}
		{:else}
			<div class="mobileView" style="height: 100%;">
				<div style="height: 100%;" class="flex">
					<button on:click={() => {open = !open;}}><i class="fa-solid fa-bars"></i></button>
				</div>
				{#if open}
					<div class="nav">
						<a
							sveltekit:prefetch
							href="/competitions"
							class="textnav"
							class:active={$page.url.pathname === '/competitions'}
							transition:fly={{ y: -15, delay: 50 * 1 }}
						>
							<span>Competitions</span>
						</a>
						<a
							sveltekit:prefetch
							href="/classes"
							class="textnav"
							class:active={$page.url.pathname === '/classes'}
							transition:fly={{ y: -15, delay: 50 * 2 }}
						>
							<span>Classes</span>
						</a>
						{#each navPages as navPage (navPage.path)}
						<a
							sveltekit:prefetch
							href={navPage.path}
							class="textnav"
							class:active={$page.url.pathname === navPage.path}
							transition:fly={{ y: -15, delay: 50 * 3 }}
						>
							<span>{navPage.text}</span>
						</a>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		background-color: #1c6825;
		width: 100%;
		z-index: 100;
		padding: 10px;
	}

	img {
		width: 2.5em;
		height: 2.5em;
		top:  0;
	}

	.navbar a {
		float: left;
		font-size: 16px;
		color: white;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 14px 16px;
		text-decoration: none;
		height: 100%;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: color 0.2s linear;
	}

	h1 {
		margin: 0;
		padding: 0;
		color: white;
		font: Ubuntu;
		font-weight: bold;
		font-size: 1.25em;
	}

	.dropdown {
		float: left;
		overflow: hidden;
		height: 100%;
	}

	.dropdown .dropbtn {
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		border: none;
		outline: none;
		padding: 14px 16px;
		color: white;
		height: 100% !important;
		background-color: inherit;
		font-family: inherit;
		margin: 0;
	}

	.active {
		color: white !important;
	}

	a:hover,
	button:hover {
		text-decoration: underline;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #1c6825;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		float: none;
		color: white;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}

	.dropdown-content a:hover {
		background-color: #1c6825;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.mobileView .nav {
		font-size: 1.5em;
		letter-spacing: 0.15em;
		top: 70px;
		width: 100%;
		right: 0;
		position: fixed;
		padding: 10px;
		background-color: black;
	}

	.mobileView a {
		padding: 10px;
		width: 100%;
		color: white;
		text-align: center;
	}
</style>