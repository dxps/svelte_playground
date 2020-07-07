<script>
  import Dialog from "./Dialog.svelte";
  import Item from "./Item.svelte";
  import { getGuid, blurOnKey, sortOnName } from "./util";
  import { createEventDispatcher } from "svelte";

  export let categories;
  export let category;
  export let show;
  export let dnd; // An object that has `drag` and `drop` methods.

  const dispatch = createEventDispatcher();

  let dialog = null; // The reference to the DOM dialog.
  let editing = false;
  let itemName = "";
  let items = [];
  let message = "";
  let hovering = false; // While dragging, it becomes true.

  $: items = Object.values(category.items);
  $: remaining = items.filter(item => item.packed).length;
  $: total = items.length;
  $: status = `${remaining} of ${total} remaining`;
  $: itemsToShow = sortOnName(items.filter(i => shouldShow(show, i)));

  function addItem() {
    const duplicate = Object.values(categories).some(categ =>
      Object.values(categ.items).some(item => item.name === itemName)
    );
    if (duplicate) {
      message = `The item ${itemName} already exists.`;
      dialog.showModal();
      return;
    }
    const { items } = category;
    const id = getGuid();
    items[id] = { id, name: itemName, packed: false };
    category.items = items;
    itemName = "";
    dispatch("persist");
  }

  function deleteItem(item) {
    delete category.items[item.id];
    category = category;
  }

  function shouldShow(show, item) {
    return (
      show === "all" ||
      (show === "packed" && item.packed) ||
      (show == "unpacked" && !item.packed)
    );
  }
</script>

<style>
  button,
  input {
    border: solid lightgray 1px;
  }

  button.icon {
    border: none;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0;
  }

  section {
    --padding: 10px;

    background-color: white;
    border: solid transparent 3px;
    border-radius: var(--padding);
    color: black;
    display: inline-block;
    margin: var(--padding);
    padding: calc(var(--padding) * 2);
    padding-top: var(--padding);
    vertical-align: top;
  }

  .status {
    font-size: 18px;
    font-weight: normal;
    margin: 0 15px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  .hover {
    border-color: orange;
  }
</style>

<!-- the UI markdown -->

<section
  class:hover={hovering}
  on:dragenter={() => (hovering = true)}
  on:dragleave={event => {
    const { localName } = event.target;
    if (localName === 'section') hovering = false;
  }}
  on:drop|preventDefault={event => {
    dnd.drop(event, category.id);
    hovering = false;
  }}
  on:dragover|preventDefault>
  <h3>
    {#if editing}
      <input
        bind:value={category.name}
        on:blur={() => (editing = false)}
        on:keypress={blurOnKey} />
    {:else}
      <span on:click={() => (editing = true)}>{category.name}</span>
    {/if}
    <span class="status">{status}</span>
    <button class="icon" on:click={() => dispatch('deleteCateg')}>
      &#x1F5D1;
    </button>
  </h3>

  <form on:submit|preventDefault={addItem}>
    <label>
      New Item
      <input bind:value={itemName} />
    </label>
    <button disabled={!itemName}>Add Item</button>
  </form>

  <ul>
    {#each itemsToShow as item (item.id)}
      <!-- This `bind:item` causes the category object to update when the item's packed value is toggled. -->
      <Item
        bind:item
        categoryId={category.id}
        {dnd}
        on:deleteItem={() => deleteItem(item)} />
    {:else}
      <div>No items.</div>
    {/each}
  </ul>
</section>

<Dialog title="Category" bind:dialog>
  <div>{message}</div>
</Dialog>
