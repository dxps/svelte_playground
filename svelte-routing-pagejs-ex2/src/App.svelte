<script>
  import page from "page";
  import qs from "query-string";

  import Page2 from "./Page2.svelte";
  import Page1 from "./Page1.svelte";
  import NotFound from "./NotFound.svelte";

  let targetPageComp;

  let props = {};

  function parseQueryString(context, next) {
    context.query = qs.parse(context.querystring);
    props = {};
    next();
  }

  page("*", parseQueryString);

  page("/", context => {
    targetPageComp = Page1;
    props = { p1: "alpha", q1: "beta" };
  });

  page("/one/:p1/:p2?", context => {
    targetPageComp = Page1;
    const { params, query } = context;
    props = { ...params, ...query };
  });

  page("/two", () => (targetPageComp = Page2));

  page("*", context => {
    targetPageComp = NotFound;
  });

  page.start();
</script>

<style>
  :global(body) {
    padding: 0;
  }
  :global(h1) {
    margin-top: 0;
  }

  a {
    --padding: 0.5rem;
    background-color: white;
    border: solid gray 1px;
    border-radius: var(--padding);
    display: inline-block;
    margin-right: 1rem;
    padding: var(--padding);
    text-decoration: none;
  }

  .active {
    background-color: yellow;
  }

  main {
    padding: 1rem;
  }

  nav {
    background-color: cornflowerblue;
    padding: 1rem;
  }
</style>

<nav>
  <a class:active={targetPageComp === Page1} href="/one/v1/v2?q1=v3&q2=v4">
    One
  </a>
  <a class:active={targetPageComp === Page2} href="/two">Two</a>
</nav>

<main>
  <svelte:component this={targetPageComp} {...props} />
</main>
