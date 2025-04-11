# React + Tailwind + Flowbite components

Provides display components for React Tailwind Flowbite applications

## Usage

To use this package in your application install it via npm.

### Installation

Standard package installation makes imports available:

```bash
npm i @howso/react-tailwind-flowbite-components
```

Import the styles and fonts must be installed in your application directly.

```ts
import "@fontsource-variable/inter";
import "@fontsource-variable/inter/wght-italic.css";
import "@howso/react-tailwind-flowbite-components/lib/styles.css";
```

Modify your `tailwind.config.js` configuration to include:

```js
import twContainerQueries from "@tailwindcss/container-queries";
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [
    "./node_modules/@howso/react-tailwind-flowbite-components/lib/index.esm.js",
    flowbite.content(),
    // ...
  ],
  plugins: [
    flowbite.plugin({ charts: true }),
    twContainerQueries,
    // ...
  ],
};
```

Translation files from this package must be included into your `i18n` `resources`:
To reduce overall bundle size, you are advised to specify components' bundles you use selectively in your `i18n` service:

```ts
import { SkeletonI18nBundle } from "@howso/react-tailwind-flowbite-components";

i18n
  // ...
  .init({
    resources: addI18nBundlesToResources(resources, [SkeletonI18nBundle]),
    // ...
  });
```

A naive export is available from this package that contains all bundles, though
its use is discouraged:

```ts
import { I18nBundles } from "@howso/react-tailwind-flowbite-components";

i18n
  // ...
  .init({
    resources: addI18nBundlesToResources(resources, [...I18nBundles]),
    // ...
  });
```

## Contributing

Development is done through [Storybook](https://storybook.js.org/).
You may start the UI for inspection with hot reloading using:

```bash
npm run storybook
```

## Publishing

Documentation changes do not require a version publishing.
For functional changes, follow [SemVer](https://semver.org/)
standards updating the `package.json` and `package-lock.json`
files in your pull request.

When you are ready to publish a new version, use the Github Release action.

### Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=65e891231e1f8c382a2b9636) is used to review changes on this project.
You may [invite yourself](https://www.chromatic.com/start?inviteToken=chpi_9775e3a5c6b04820a9fbca99c35baf86&appId=65e891231e1f8c382a2b9636) to the project.
