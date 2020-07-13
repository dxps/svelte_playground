<script>
  import { notifCenter } from "./notifications";

  // The open-close state.
  let show = false;

  const handleDismiss = message => {
    notifCenter.dismiss(message);
    // Close popup when there are no more messages.
    if ($notifCenter.length === 0) {
      show = false;
    }
  };

  const handlePopup = () => {
    // Don't show popup when there are no messages.
    if ($notifCenter.length === 0) {
      show = false;
    } else {
      show = !show;
    }
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
<button class="relative p-1" on:click={() => (show = !show)}>
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
  <span class="badge">2</span>
</button>

{#if show}
  <!--
    Clicking anywhere on the page will close the popup.
    This button supports this feature.
 -->
  <button
    tabindex="-1"
    class="fixed inset-0 w-full h-full cursor-default focus:outline-none"
    on:click|preventDefault={() => (show = false)} />

  <div
    class="absolute right-0 p-3 mt-1 text-gray-600 bg-gray-100 rounded shadow-md
    messages">

    <ul class="space-y-3">
      <li class="p-3 border rounded">
        <p>Message One</p>
        <div class="mt-1">
          <button class="px-2 text-sm text-gray-100 bg-gray-600 rounded-sm">
            dismiss
          </button>
        </div>
      </li>
      <li class="p-3 border rounded">
        <p>Message Two</p>
        <div class="mt-1">
          <button class="px-2 text-sm text-gray-100 bg-gray-600 rounded-sm">
            dismiss
          </button>
        </div>
      </li>
    </ul>

    <div class="flex justify-end mt-3">
      <button class="px-2 text-sm text-gray-100 bg-gray-600 rounded-sm">
        clear all
      </button>
    </div>

  </div>
{/if}
