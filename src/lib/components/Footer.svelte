<script>
    import SocialsLink from '$lib/components/SocialsLink.svelte';
</script>
<footer>
	<div class="socials">
		<!--<button class="sign-up" on:click={() => {show = !show;}}>Sign Up for our Newsletter</button>-->
		<SocialsLink url="mailto:mustangmathtournament@gmail.com" type="solid" icon="envelope" />
		<SocialsLink url="https://discord.gg/bYDDWxan5d" type="brands" icon="discord" />
		<SocialsLink url="https://www.facebook.com/MustangMath" type="brands" icon="facebook" />
		<SocialsLink url="https://www.instagram.com/mustangmath/" type="brands" icon="instagram" />
		<SocialsLink url="https://www.linkedin.com/company/mustangmathtournament/" type="brands" icon="linkedin"/>
		<SocialsLink url="https://artofproblemsolving.com/wiki/index.php/Mustang_Math_Tournament" type="text" icon="AoPS" text />
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		top: 5px;
		bottom: 0;
		width: 100%;
		text-align: center;
		position: sticky;
		z-index: 1;
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
		padding-bottom: 8px;
	}
</style>
