<script>
  // The main stylesheet that Snowpack will inject it in the head tag.
  import "./main.css";
  import Messages from "./Messages.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<div class="flex flex-col min-h-screen">
  <!-- top menu -->
  <header
    class="flex items-center justify-between px-5 py-3 text-gray-400 bg-gray-700">
    <h1 class="text-2xl">Notification Center</h1>
    <nav class="relative">

      <Messages />

    </nav>
  </header>

  <div class="flex-grow px-5 py-3 bg-gray-200">
    <h2>Content</h2>
  </div>

</div>
