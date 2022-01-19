<script>
  import { Router, Route, navigate } from 'svelte-navigator'

  import data from './data.json'
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Nav from './components/Nav.svelte'

  let posts = data.data

  let arrayInc = 3

  function addPost(author, post) {
    const _post = {
      id: ++arrayInc,
      author: author,
      post: post,
    }

    posts.push(_post)
    // To inform Svelte about the array change.
    posts = posts
    navigate('posts')
  }

  function removePost(id) {
    const removeIdx = posts.findIndex((post) => post.id == id)
    posts.splice(removeIdx, 1)
    // To inform Svelte again about the array change.
    posts = posts
  }
</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-10">
    <Nav />

    <Route>
      <Form {addPost} />
    </Route>

    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each posts.reverse() as post}
          <Post {...post} {removePost} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
