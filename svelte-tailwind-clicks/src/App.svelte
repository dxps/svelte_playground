<script>
  import { Router, Route } from 'svelte-navigator'
  import Post from './components/Post.svelte'
  import Form from './components/Form.svelte'
  import Nav from './components/Nav.svelte'
  import { posts } from './stores'
</script>

<Router>
  <main class="flex flex-col justify-center items-center h-screen space-y-10">
    <Nav />

    <Route>
      <Form />
    </Route>

    <Route path="posts">
      <div class="overflow-auto space-y-4 p-4">
        {#each $posts.reverse() as post}
          <Post {...post} />
        {/each}
      </div>
    </Route>
  </main>
</Router>

<style>
</style>
