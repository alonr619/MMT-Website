<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
    import { crossfade } from "svelte/transition";
	import { onMount } from 'svelte';

	let windowWidth;
	let open;
	
	const debounce = (func, delay) => {
		let timer;

		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => func.apply(context, args), delay);
		};
	};
	
	const setWindowWidth = () => {
		windowWidth = `${window.innerWidth}px`;
		if (window.innerWidth >= 800) {open = 'flex';}
		else {open = "none";}
	};

	function onClickToggle() {
		if (open == 'flex') { open = 'none';}
		else {open = 'flex';}
	}
	
	const debouncedSetWindowWidth = debounce(setWindowWidth, 300);
	
	onMount(() => {		
		window.addEventListener('resize', debouncedSetWindowWidth);
		if (window.innerWidth >= 800) {open = 'flex';}
		else {open = "none";}
		
		return () => {
			window.removeEventListener('resize', debouncedSetWindowWidth);
		}
	});

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
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<header>
	<ul class="tabs">
		<li class="logo"><a href="/"><img src={logo} alt="mmtlogo" width="50px" height="50px" /></a></li>

		{#each navPages as navPage (navPage.path)}
			{#if $page.url.pathname === navPage.path}
				<li class="tab active" style="display: {open};" >
					<a sveltekit:prefetch href="{navPage.path}" class="textnav">
						<span>{navPage.text}
							<div class="textunderline" in:receive|local out:send|local></div>
						</span>
					</a>
				</li>
			{:else}
				<li class="tab" style="display: {open};" >
					<a sveltekit:prefetch href="{navPage.path}" class="textnav">
						<span>{navPage.text}
						</span>
					</a>
				</li>
			{/if}
		{/each}

		<li on:click={onClickToggle} class="toggle"><i id="hamburger-icon" class="fa fa-bars" style="color:white;width:100%;height:100%;"></i></li>
	</ul>
</header>

<style>
	header {
		background-color: #1c6825;
		margin: 0;
		padding: 0;
		border: 1px solid transparent;
		display: block;
	}

	.toggle {
		position: absolute;
		top: 25px;
		right: 10px;
	}

	ul, li {
		margin: 0;
		padding: 0;
	}

	.logo {
		flex: 1;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	.tabs {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.tab {
		float: right;
		padding: 6px 20px;
		margin: 5px;
	}

	.tab a {
		text-decoration: none;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.toggle {
		display: none;
	}

	.textunderline {
		height: 2px;
		background-color: #FFF;
		width: 100%;
		position: absolute;
		bottom: -2px;
		left: 0;
	}

	.textnav>span {
        position: relative;
    }

	a:hover {
		color: lightgreen;
	}

	@media screen and (max-width: 800px) {
		.toggle {
			display: flex;
		}

		.tab {
			background-color: #65c083;
		}

		.tab, .tab a {
			width: 100%;
			display: flex;
			justify-content: center;
		}

		.tab a:hover {
			color: white;
		}

		.active {
			background-color: #5b8064;
		}

		.textunderline {
			background-color: transparent;
		}
	}
</style>