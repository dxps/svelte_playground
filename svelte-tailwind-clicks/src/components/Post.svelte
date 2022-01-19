<script>
  import { onMount, onDestroy } from 'svelte'

  // Declaring our props, Svelte specific syntax.
  export let author
  export let post
  export let id
  export let removePost

  let timeOnScreen = 0
  let timeInterval = null

  onMount(() => {
    timeInterval = setInterval(() => {
      ++timeOnScreen
    }, 1000)
  })
  onDestroy(() => {
    clearInterval(timeInterval)
  })
</script>

<div class="card card-bordered bg-primary">
  <div on:click={() => removePost(id)} class="absolute right-0 pr-2 text-error text-2xl">x</div>

  <div class="absolute left-0 pl-2 text-gray-400 text-xl">{timeOnScreen}</div>

  <div {id} class="card-body">
    <h2 class="card-title">{author}</h2>
    <p>{post}</p>
  </div>
</div>
