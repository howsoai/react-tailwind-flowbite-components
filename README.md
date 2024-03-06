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
npm i @howso/react-tailwind-flowbit-components
```

Fonts must be installed in your application directly. They are installed here only for Storybook support.

```ts
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
```

## Contributing

Development is done through [Storybook](https://storybook.js.org/).
You may start the UI for inspection with hot reloading using:

```bash
npm run storybook
```

## Publishing

### For design and component library inclusion

This project is hosted on [Chromatic](https://www.chromatic.com/builds?appId={id}).
Feel free to [invite yourself](https://www.chromatic.com/builds?appId={id}&inviteToken={id}).

```bash
npm run-script chromatic
```

### For application consumption

This package is published into a private npm registery.

Documentation changes do not require a version publishing.
For functional changes, follow [SemVer](https://semver.org/)
standards updating the `package.json` and `package-lock.json`
files in your pull request.

Once the changes are merged through PR into `main`
you may run this command to publish a new package:

```bash
npm publish
```

### Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=65e891231e1f8c382a2b9636) is used to review changes on this project.
You may [invite yourself](https://www.chromatic.com/start?inviteToken=chpi_9775e3a5c6b04820a9fbca99c35baf86&appId=65e891231e1f8c382a2b9636) to the project.
