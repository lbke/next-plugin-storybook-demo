# Example app with Storybook

This example shows a default set up of Storybook that includes the same build features as Next (built-in CSS support, module path aliases...).

/!\ This example includes experimental features. Use `with-storybook` for a simpler but safer example.

## Webpack 5/4

Main version uses Webpack 5, but doesn't work.

Use branch "with-webpack-4" for a version that works (but uses Webpack 4).

## Local development of @next/plugin-storybook

For development purpose, please use the latest version of `@next/plugin-storybook` from Next.js canary branch (clone Next, yarn, yarn dev).
Then link it **using yalc**. `yarn link` will cause issues with Webpack version, while Yalc simulates a local NPM registry and is closer to real install.

```sh
# In next.js
cd packages/next-plugin-storybook
yalc publish
cd packages/next
yalc publish
# NOTE: you might also need to link packages/next the same way, in case you have unexpected errors
```

```sh
# In this repository
yalc link @next/plugin-storybook
yalc link next
```

And do this again on every local update of next-plugin-storybook.

Then, you need to make sure you are using the version of Webpack bundled by Next

```sh
# in this repo
cp node_modules/webpack/lib/index.js node_modules/webpack/lib/index.js.backup
cp ./.yalc/next/dist/compiled/webpack/bundle5.js node_modules/webpack/lib/index.js
```


## TODO

We add example usage of Next.js core feature one at a time, and check if the `@next/plugin-storybook` supports them correctly when we run Storybook. For instance, path aliases, styled JSX, CSS modules...
If not, we must improve `@next/plugin-storybook` with relevant fixes.

### Finish update to Webpack 5

This is mostly on Storybook side, Webpack 5 update is not completely stable (see https://github.com/storybookjs/storybook/issues/14044).
Currently we need resolutions to have only one version of Webpack and it doesn't seem to be enough.

### Stabilizing @next/plugin-storybook

See main issue here: https://github.com/vercel/next.js/issues/19345
See absolute import issue here: https://github.com/storybookjs/storybook/issues/11639

### Supporting CSS modules

They don't work out-of-the box, but they can be supported by adding relevant package in `@next/plugin-storybook` (https://github.com/vercel/next.js/issues/19345#issuecomment-758563228).

----

## TypeScript

As of v6.0, Storybook has built-in TypeScript support, so no configuration is needed. If you want to customize the default configuration, refer to the [TypeScript docs](https://storybook.js.org/docs/react/configure/typescript).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-storybook&project-name=with-storybook&repository-name=with-storybook)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-storybook with-storybook-app
# or
yarn create next-app --example with-storybook with-storybook-app
```

### Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

### Build Static Storybook

```bash
npm run build-storybook
# or
yarn build-storybook
```

You can use [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) to deploy Storybook. Specify `storybook-static` as the output directory.
