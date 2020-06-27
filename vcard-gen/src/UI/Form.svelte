<script>
  let disabled = true;
  let name = "";
  let firstInput;
  let active = true;

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

<style>
  .active {
    border-color: hsl(211, 63%, 35%);
  }
</style>

<form>
  <label>
    Name:
    <input
      type="text"
      placeholder="Please enter your name"
      class:active
      on:focus={() => {
        active = true;
      }}
      on:blur={() => {
        active = false;
      }}
      on:keydown={keyPressed}
      bind:value={name}
      bind:this={firstInput} />
  </label>
  <button {disabled} on:click|preventDefault={resetClicked}>Reset</button>
</form>
