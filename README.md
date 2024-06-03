# React + Tailwind + Flowbite components

Provides display components for React Tailwind Flowbite applications

## Usage

To use this package in your application install it via npm.

### Prerequisites

Your home directory must contain a `.npmrc` file pointing to the Azure DevOps artifact feed:

```text
@howso:registry = https://dpbuild.jfrog.io/artifactory/api/npm/npm-virtual/
//dpbuild.jfrog.io/artifactory/api/npm/npm-virtual/:_auth=...
```

### Installation

Standard package installation makes imports available:

```bash
npm i @howso/react-tailwind-flowbite-components
```

Import the styles and fonts must be installed in your application directly.

```ts
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@howso/react-tailwind-flowbite-components/lib/styles.css";
```

Modify your `tailwind.config.js` configuration to include:

```js
module.exports = {
  content: [
    "./node_modules/@howso/react-tailwind-flowbite-components/lib/index.esm.js",
    // ...
  ],
};
```

## Contributing

Development is done through [Storybook](https://storybook.js.org/).
You may start the UI for inspection with hot reloading using:

```bash
npm run storybook
```

### Translations

This package produces a number of components that expose translations.
Any usages of translation should use the `useDefaultTranslation` function instead of `useTranslation`.
This will ensure translations are in the correct namespace for this package to be copied into implementing systems.

Using translations should be done sparingly. Copying the updated translation file is a manual process.
Translation changes should be considered breaking releases to signal this step and include a note in the [migration](./MIGRATION.md) file.

## Publishing

This package is published into a private npm registery.

Documentation changes do not require a version publishing.
For functional changes, follow [SemVer](https://semver.org/)
standards updating the `package.json` and `package-lock.json`
files in your pull request.

When you are ready to publish a new verison, use the Github Release action.

### Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=65e891231e1f8c382a2b9636) is used to review changes on this project.
You may [invite yourself](https://www.chromatic.com/start?inviteToken=chpi_9775e3a5c6b04820a9fbca99c35baf86&appId=65e891231e1f8c382a2b9636) to the project.
