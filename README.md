# Example app with Storybook

This example shows a default set up of Storybook that includes the same build features as Next (built-in CSS support, module path aliases...).

/!\ This example includes experimental features. Use `with-storybook` for a simpler but safer example.

For development purpose, please use the latest version ofr `@next/plugin-storybook` from Next.js canary branch (clone Next, yarn, yarn dev, and `yarn link` the package to use it locally).

## TODO

We add example usage of Next.js core feature one at a time, and check if the `@next/plugin-storybook` supports them correctly when we run Storybook. For instance, path aliases, styled JSX, CSS modules...
If not, we must improve `@next/plugin-storybook` with relevant fixes.


### Stabilizing @next/plugin-storybook

See main issue here: https://github.com/vercel/next.js/issues/19345
See absolute import issue here: https://github.com/storybookjs/storybook/issues/11639

### Supporting CSS modules

They don't work out-of-the box, but they can be supported by adding relevant package in `@next/plugin-storybook` (https://github.com/vercel/next.js/issues/19345#issuecomment-758563228).

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
