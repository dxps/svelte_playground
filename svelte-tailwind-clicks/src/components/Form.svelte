<script>
  // A prop.
  export let addPost

  let author = ''
  let post = ''

  function sendAddPost() {
    addPost(author, post)
    author = ''
    post = ''
  }
</script>

<h1>Add Post</h1>
<div class="form-control">
  <label for="author" class="label">
    <span class="label-text">Author</span>
  </label>
  <input name="author" bind:value={author} type="text" placeholder="username" class="input input-bordered" />
  <label for="post" class="label">
    <span class="label-text">Post Text</span>
  </label>
  <textarea name="post" bind:value={post} class="textarea h-24 textarea-bordered" placeholder="" />
  <button on:click={() => sendAddPost()} class="btn btn-primary mt-4">Post</button>
</div>
