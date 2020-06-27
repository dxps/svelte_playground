<script>
  import Navbar from "./Sections/Navbar.svelte";
  import Form from "./UI/Form.svelte";
  import VCard from "./Sections/VCard.svelte";

  let qrCode = "";
</script>

<style>
  main {
    padding: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<Navbar title="vCard Generator" />
<main>
  <Form
    on:createQRCode={e => {
      qrCode = e.detail;
    }} />
  <VCard {qrCode} />
</main>
