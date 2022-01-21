<script>
  import { navigate } from 'svelte-navigator'
  import { posts } from '../stores'

  let author = ''
  let post = ''

  let arrayInc = 3

  function addPost() {
    const _post = {
      id: ++arrayInc,
      author: author,
      post: post,
    }

    $posts.push(_post)
    // To inform Svelte about the array change.
    $posts = $posts
    // Clear the form fields.
    author = ''
    post = ''

    navigate('posts')
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
  <button on:click={() => addPost()} class="btn btn-primary mt-4">Post</button>
</div>
