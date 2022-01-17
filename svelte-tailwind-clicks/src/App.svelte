<script>
  let number = 1

  function add5() {
    number += 5
  }

  // A reactive statement / assignment
  $: multiple = number * 2
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-10">
  <p>The number is {number}.</p>
  <button on:click={add5} class="btn btn-primary">Add Five</button>
  <p>The number multiplied by 2 is {multiple}.</p>
</main>

<style>
</style>
