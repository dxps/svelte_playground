<script>
  import { Link, useLocation } from 'svelte-navigator'

  const location = useLocation()
</script>

<div class="flex space-x-4">
  <Link to="/" class={$location.pathname === '/' ? 'underline' : ''}>Add Post</Link>
  <Link to="/posts" class={$location.pathname == '/posts' ? 'underline' : ''}>Posts</Link>
</div>
