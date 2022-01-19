<script>
  // Declaring our props, Svelte specific syntax.
  export let author
  export let post
</script>

<div class="card card-bordered bg-primary">
  <div class="card-body">
    <h2 class="card-title">{author}</h2>
    <p>{post}</p>
  </div>
</div>
