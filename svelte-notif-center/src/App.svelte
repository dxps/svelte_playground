<script>
  // The main stylesheet that Snowpack will inject it in the head tag.
  import "./main.css";
  import Messages from "./Messages.svelte";
  import AddMessage from "./AddMessage.svelte";
  import { onMount } from "svelte";
  import { notifCenter } from "./notifications";

  // Seeding out some messages on component mount
  onMount(() => {
    notifCenter.init([
      "Suspicious login on your server less then a minute ago",
      "Successful login attempt by @johndoe",
      "Successful login attempt by @amy",
      "Successful login attempt by @jack",
      "The 5th notification message.",
      "Healthy state report by @opsbot"
    ]);
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<div class="flex flex-col min-h-screen mx-auto">
  <!-- top menu -->
  <header
    class="flex items-center justify-between px-5 py-3 text-gray-400 bg-gray-700">
    <h1 class="text-2xl">Notification Center</h1>
    <nav class="relative">
      <Messages />
    </nav>
  </header>

  <div class="flex-grow px-5 py-3 bg-gray-200">
    <AddMessage />
  </div>

</div>
