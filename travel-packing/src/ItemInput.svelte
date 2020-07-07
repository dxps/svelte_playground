<script>
  import { onMount } from "svelte";

  export let value;

  let ref;
  onMount(() => {
    ref.focus();
  });
</script>

<style>
  input[type="text"] {
    border: solid lightgray 1px;
  }
</style>

<!-- UI -->

<input bind:this={ref} bind:value on:blur on:keydown type="text" />
