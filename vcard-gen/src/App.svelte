<script>
  import App from "./App.svelte";
  import Navbar from "./Sections/Navbar.svelte";

  let disabled = true;
  let name = "";
  let firstInput;

  function keyPressed(event) {
    console.log(event);
    event.key === "Shift" ? "" : (disabled = false);
  }
  function resetClicked() {
    disabled = true;
    name = "";
    firstInput.focus();
  }
</script>

<Navbar title="vCard Generator" />
<br />

<form>
  <label>
    Name:
    <input
      type="text"
      placeholder="Please enter your name"
      on:keydown={keyPressed}
      bind:value={name}
      bind:this={firstInput} />
  </label>
  <button {disabled} on:click|preventDefault={resetClicked}>Reset</button>
</form>

<section>Name:{name}</section>
