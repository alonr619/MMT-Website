<script>
	import { page } from '$app/stores';
	import logo from './MMTLogo.png';
    import { slide, crossfade } from "svelte/transition";
	import { onMount } from 'svelte';

	let showMobile = false;
	let open = 'none';
	let windowWidth;
	
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
		if (window.innerWidth >= 768) {open = 'flex';};
	};

	function onClickToggle() {
		if (open == 'flex') { open = 'none';}
		else {open = 'flex';}
	}
	
	const debouncedSetWindowWidth = debounce(setWindowWidth, 300);
	
	onMount(() => {		
		window.addEventListener('resize', debouncedSetWindowWidth);
		
		return () => {
			window.removeEventListener('resize', debouncedSetWindowWidth);
		}
	});

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

<header>
	<ul class="tabs">
		<li class="logo"><a href="/"><img src={logo} alt="mmtlogo" width="50px" height="50px" /></a></li>

		{#each navPages as navPage (navPage.path)}
			<li class="tab">
				<a sveltekit:prefetch href="{navPage.path}" class="textnav">
					<span>{navPage.text}
						{#if $page.url.pathname === navPage.path}
						<div class="textunderline" in:receive|local out:send|local></div>
						{/if}
					</span>
				</a>
			</li>
		{/each}

		<li onClick={onClickToggle} class="toggle" style={{padding: 5, paddingBottom: 10, marginRight: 10}}><span class="bars"><i id="hamburger-icon" class="fa fa-bars" style="color:white;width:46px;height:46px;"></i></span></li>
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
		display: flex;
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

	#hamburger-icon {
		margin-left: 40%;
		margin-right: 40%;
		margin-top: 40%;
		margin-bottom: 40%;
	}

	@media screen and (max-width: 800px) {
		.toggle {
			display: flex;
		}

		.tab {
			display: none;
		}
	}
</style>