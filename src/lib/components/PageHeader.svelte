<script>
    export let title;
    export let description;
    export let fadeIn = true;

    import Heading from '$lib/components/Heading.svelte';
    import Text from '$lib/components/Text.svelte';
    import Link from '$lib/components/Link.svelte';
</script>

<div class="header flex"><div class="{fadeIn ? "fade-down" : ""}">
    <Heading className="glow" text={title} textColor="white" />
    <div class="flex"><div class="headerline"></div></div>
    <p style="font-weight: 300; margin-top: 30px; font-size: 22px; color: white;">{description}</p>
    <Link url="https://www.contestdojo.com" target="_blank" className="topbuttons" text="Register Now" textColor="white" visitedColor="white" />
</div></div>

<style>
    .fade-down {
        animation: fade-down-kf 0.7s;
    }

    @keyframes fade-down-kf {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>