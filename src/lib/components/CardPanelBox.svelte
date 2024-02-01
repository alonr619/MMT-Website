<script>
    import PanelBox from "$lib/components/PanelBox.svelte";

    export let initials;
    export let width;
    export let height;
    export let borderRadius="15px";
</script>

<div style="position: relative;">
    <PanelBox {width} {borderRadius} {height}>
        <!--<div class="icon top-left">
            <p><strong>{initials}</strong></p>
            <img src="/favicon.png" alt="logo" />
        </div>
        <div class="icon top-right">
            <p><strong>{initials}</strong></p>
            <img src="/favicon.png" alt="logo" />
        </div>-->
        <slot />
    </PanelBox>
</div>

<style>
    .icon {
        position: absolute;
    }

    .icon img {
        width: 20px;
    }

    .icon p {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .top-left {
        top: 20px;
        left: 20px;
    }

    .top-right {
        bottom: 20px;
        right: 20px;
        transform: rotate(180deg);
    }
</style>