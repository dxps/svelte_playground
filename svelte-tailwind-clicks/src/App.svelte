<script>
  let count = 1

  function increment() {
    count++
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-10">
  {count}
  <button on:click={increment} class="btn btn-primary">+</button>
</main>

<style>
</style>
