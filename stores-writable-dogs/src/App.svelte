<script>
  import DogList from "./DogList.svelte";
  import DogForm from "./DogForm.svelte";

  let dog = {};
  let mode = "list";

  const onChangeMode = event => {
    mode = event.detail;
    if (mode === "create") dog = {};
  };

  const onSelectDog = event => (dog = event.detail);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Dogs</h1>
  {#if mode === 'list'}
    <DogList on:mode={onChangeMode} on:select={onSelectDog} />
  {:else}
    <DogForm {dog} {mode} on:mode={onChangeMode} />
  {/if}

</main>
