<script>
  import { Router, Route, navigate } from 'svelte-navigator'

  import data from './data.json'
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Nav from './components/Nav.svelte'

  let posts = data.data

  function addPost(author, post) {
    const _post = {
      id: posts.length + 1,
      author: author,
      post: post,
    }

    posts.push(_post)
    posts = posts
    console.log('addPost > Navigating to "/posts"')
    navigate('posts')
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
          <Post {...post} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
