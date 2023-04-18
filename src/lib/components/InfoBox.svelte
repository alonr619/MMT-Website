<script>
  import CardPanelBox from "./CardPanelBox.svelte";

    export let mainText;
</script>

<CardPanelBox initials="MM">
  <div style="margin-right: 30px;">
    <p style="text-align: center;font-size: 1.5rem;"><strong>{mainText}</strong></p>
    <slot />
  </div>
</CardPanelBox>