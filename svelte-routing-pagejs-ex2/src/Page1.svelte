<script>
  import page from "page";

  export let p1; // required prop
  export let p2 = undefined; // optional prop
  export let q1; // required prop
  export let q2 = undefined; // optional prop

  console.log("Page1 $$props =", $$props);
</script>

<style>
  button {
    margin-top: 1rem;
  }
</style>

<h1>Page 1</h1>
<div>p1 = {p1}</div>
<div>p2 = {p2}</div>
<div>q1 = {q1}</div>
<div>q2 = {q2}</div>

<button on:click={() => page.show('/two')}>Go To Page 2</button>
