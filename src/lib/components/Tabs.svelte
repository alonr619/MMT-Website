<script>
  export let items = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<ul>
  <div class="rolebar">
    {#each items as item}
      <li
        class={activeTabValue === item.value ? "active" : ""}
        style="background-color: {item.hex}"
      >
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  </div>
</ul>
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="box" style="background-color: {item.hex}">
      <slot {item} />
    </div>
  {/if}
{/each}

<style>
  .box {
    margin-bottom: 10px;
    border: 1px solid #dee2e6;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 100%;
  }
  .rolebar {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
  }
  li {
    margin-bottom: -11px;
    border-radius: 17px 17px 0 0;
    margin-right: 3px;
  }

  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    border-radius: 17px 17px 0 0;
    font-size: 1.2em;
  }
</style>
