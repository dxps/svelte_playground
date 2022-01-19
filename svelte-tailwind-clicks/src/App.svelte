<script>
  // JS logic
  import data from './data.json'

  let posts = data.data

  let author = ''
  let post = ''

  function addPost() {
    const _post = {
      id: posts.length + 1,
      author: author,
      post: post,
    }
    posts.push(_post)
    posts = posts
    author = ''
    post = ''
  }
</script>

<main class="flex flex-col justify-center items-center h-screen space-y-10">
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
    <button on:click={addPost} class="btn btn-primary mt-4">Post</button>
  </div>

  <div class="overflow-auto space-y-4 p-4">
    {#each posts.reverse() as post}
      <div class="card card-bordered bg-primary">
        <div class="card-body">
          <h2 class="card-title">{post.author}</h2>
          <p>{post.post}</p>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
</style>
