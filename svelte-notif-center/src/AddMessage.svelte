<script>
  import { notifCenter } from "./notifications";

  let value = "";

  const doAddMessage = () => {
    if (!value) return;
    notifCenter.add(value);
    value = "";
  };
</script>

<!-- the UI markup -->

<h2 class="text-2xl font-medium">Add message</h2>

<form class="mt-3" on:submit|preventDefault={doAddMessage}>
  <input type="text" class="w-1/2 p-2" bind:value />
  <button class="px-5 py-2 text-gray-200 bg-gray-700">Add</button>
</form>
