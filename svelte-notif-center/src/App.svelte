<script>
  // Main stylesheet. Snowpack will inject it in the head tag.
  import "./main.css";

  const message = "Learn Svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
  .App-header {
    background-color: #f9f6f6;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  .App-link {
    color: #ff3e00;
  }
  .App-logo {
    height: 40vmin;
    pointer-events: none;
    margin-bottom: 1rem;
    animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  }
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }

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

<div class="container flex flex-col max-w-4xl min-h-screen mx-auto">
  <!-- top menu -->
  <header
    class="flex items-center justify-between px-5 py-3 text-gray-400 bg-gray-700">
    <h1 class="text-2xl">Notification Center</h1>
    <nav class="relative">

      <!-- notification center -->
      <button class="relative p-1">
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

      <!-- this button will be used for closing the popup later -->
      <button
        tabindex="-1"
        class="fixed inset-0 w-full h-full cursor-default focus:outline-none" />

      <div
        class="absolute right-0 p-3 mt-1 text-gray-600 bg-gray-100 rounded
        shadow-md messages">

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
    </nav>
  </header>

  <div class="flex-grow px-5 py-3 bg-gray-200">
    <h2>Content</h2>
  </div>

</div>
