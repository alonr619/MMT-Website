<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
    import { slide, crossfade } from "svelte/transition";
	let windowWidth = 0;
	let showMobile = false;
	function toggleMobile(){
		showMobile = showMobile ? false : true;
	};

    const [send, receive] = crossfade({
        duration: 400
    });

    const navPages = [
        {path: "/", text: "Home"},
        {path: "/mmt-2022", text: "MMT 2022"},
        {path: "/our-team", text: "Our Team"},
		{path: "/sponsors", text: "Sponsors"},
        {path: "/past-exams", text: "Past Exams"},
    ]

    const HAMBURGER_BREAKPOINT = 940; // change if adding more pages
    const MMT_BREAKPOINT = HAMBURGER_BREAKPOINT+310;
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
				{#if windowWidth > MMT_BREAKPOINT}
				Mustang Math Tournament
				{:else}
				MMT
				{/if}
			</a></li>
			{#if windowWidth > HAMBURGER_BREAKPOINT || windowWidth===0}
                {#each navPages as navPage (navPage.path)}
                <li>
                    <a sveltekit:prefetch href="{navPage.path}" class="textnav">
                        <span>{navPage.text}
                            {#if $page.url.pathname === navPage.path}
                            <div class="textunderline" in:receive out:send></div>
                            {/if}
                        </span>
                    </a>
                </li>
                {/each}
			{:else}
			<div on:click={toggleMobile} id="hamburger-div">
			<i id="hamburger-icon" class="fa fa-bars"></i>
			</div>
			{/if}
		</ul>
	</nav>
</header>
{#if showMobile && windowWidth < HAMBURGER_BREAKPOINT}
	<div id="hamburger-links" transition:slide|local={{ duration: 300 }}>
        {#each navPages as navPage (navPage.path)}
		<div class="exterior"><a on:click={toggleMobile} class:active={$page.url.pathname === navPage.path} sveltekit:prefetch href="{navPage.path}">{navPage.text}</a></div>
		{/each}
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

    .textnav>span {
        position: relative;
    }

    .textunderline {
        height: 2px;
        background-color: #FFF;
        width: 100%;
        position: absolute;
        bottom: -2px;
        left: 0;
    }

	.textnav {
		width: max-content;
	}

	a:hover {
		color: lightgreen;
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