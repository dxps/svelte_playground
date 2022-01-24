<script>
  let disabled = true
  let password, passwordRepeat

  $: disabled = password && passwordRepeat ? password !== passwordRepeat : true
</script>

<h1>Sign Up</h1>

<label for="username">Username</label>
<input id="username" />

<label for="email">Email</label>
<input id="email" />

<label for="password">Password</label>
<input id="password" type="password" bind:value={password} />

<label for="password-repeat">Password Repeat</label>
<input id="password-repeat" type="password" bind:value={passwordRepeat} />

<p>disabled={disabled}</p>

<button {disabled}>Sign Up</button>
