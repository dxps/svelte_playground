<script>
  import Dialog from "./Dialog.svelte";

  let dialog;
</script>

<!-- UI -->

<div>
  <button on:click={() => dialog.showModal()}>Open Dialog</button>
</div>

<Dialog title="Title of the dialog" bind:dialog>
  My content is very, veeeeeerryyyyy looooooooong.
  <br />
  And it is not wrapped by default.
</Dialog>
