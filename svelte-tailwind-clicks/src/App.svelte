<script>
  // JS logic
  import data from './data.json'

  let posts = data.data
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-10">
  {#each posts as post}
    <div class="card card-bordered w-80 bg-primary">
      <div class="card-body">
        <h2 class="card-title">{post.author}</h2>
        <p>{post.post}</p>
      </div>
    </div>
  {/each}
</main>

<style>
</style>
