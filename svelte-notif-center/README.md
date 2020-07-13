# Svelte > Notification Center

A demo project that uses:
- Snowpack
  - The project has been bootstrapped with _Create Snowpack App (CSA)_.
- Svelte
- Tailwind CSS

It started based on [Building a notification center with Svelte stores](https://codechips.me/building-notification-center-with-svelte-stores/) article.


## Setup

In this case, [PNPM](https://pnpm.js.org/) is being used for efficiency reasons. Of course, you can still use the classic NPM, if you like.

Install the dependencies using `pnpm i`.

## Run

Use `pnpm start` (or the included `run-dev.sh` script) to run the app in the development mode (the page reloads itself on changes), accessing it in the browser at [localhost:8080](http://localhost:8080).


### Tests

`pnpm test` launches the test runner in the interactive watch mode.


### Build

`pnpm run build` builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.
