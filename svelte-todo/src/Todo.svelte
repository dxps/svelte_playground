<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let todo;
</script>

<style>
  .done-true {
    color: gray;
    text-decoration: line-through;
  }
  li {
    margin-top: 5px;
  }
</style>

<li transition:fade>
  {#if todo}
    <input
      type="checkbox"
      checked={todo.done}
      on:change={() => dispatch('toggleDone')} />
    <span class={'done-' + todo.done}>{todo.text}</span>
    <button on:click={() => dispatch('delete')}>X</button>
  {/if}
</li>
