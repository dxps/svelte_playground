<script>
  import MaskedInput from "./MaskedInput.svelte";

  let phone = "";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h3 {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<!-- UI -->

<main>
  <h3>MaskedInput Example</h3>
  <label>
    Phone
    <MaskedInput mask="(999)999-9999" bind:value={phone} />
  </label>

  <div>phone = {phone}</div>

</main>
