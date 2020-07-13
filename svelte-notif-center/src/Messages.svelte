<script>
  import { notifCenter } from "./notifications";

  // Max number of displayed messages.
  export let maxToShow = 4;

  // The open-close state.
  let show = false;

  // The list of displayed messages, based on the `maxToShow` prop.
  $: messages = $notifCenter.slice(0, maxToShow);

  const doDismiss = message => {
    notifCenter.dismiss(message);
    // Close popup when there are no more messages.
    if ($notifCenter.length === 0) {
      show = false;
    }
  };

  const doPopup = () => {
    // Don't show popup when there are no messages.
    if ($notifCenter.length === 0) {
      show = false;
    } else {
      show = !show;
    }
  };

  const doClearAll = () => {
    notifCenter.clear();
    show = false; // close the popup
  };
</script>

<style>
  /* unread message count */
  .badge {
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: #4285f4;
    color: #d7e6fd;
    right: 0;
    border-radius: 9999px;
    font-size: 12px;
    min-width: 18px;
    line-height: 18px;
    min-height: 18px;
    text-align: center;
  }

  /* custom width for message popup */
  .messages {
    min-width: 400px;
  }
</style>

<!-- the UI markup -->

<!-- notification center -->
<button class="relative p-1" on:click={doPopup}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="w-6 h-6">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
  <!-- Show number of messages or hide if zero. -->
  {#if $notifCenter.length}
    <span class="badge">{$notifCenter.length}</span>
  {/if}
</button>

<!-- Show only if there are messages. -->
{#if show && $notifCenter.length}
  <!-- Clicking anywhere on the page will close the popup, that's why this button. -->
  <button
    tabindex="-1"
    class="fixed inset-0 w-full h-full cursor-default focus:outline-none"
    on:click|preventDefault={() => (show = false)} />

  <div
    class="absolute right-0 p-3 mt-1 text-gray-600 bg-gray-100 rounded shadow-xl
    messages">

    <ul class="space-y-3">

      {#each messages as message}
        <li class="p-3 border rounded">
          <p>{message}</p>
          <div class="mt-1">
            <button
              class="px-2 text-sm text-gray-100 bg-gray-600 rounded-sm"
              on:click={() => doDismiss(message)}>
              dismiss
            </button>
          </div>
        </li>
      {/each}

    </ul>

    <div class="flex justify-end mt-3">
      <button
        class="px-2 text-sm text-gray-100 bg-gray-600 rounded-sm"
        on:click={doClearAll}>
        clear all
      </button>
    </div>

  </div>
{/if}
