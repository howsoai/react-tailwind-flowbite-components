# Migration guide

## 6.x

### Tailwind configuration

Introduced `@tailwindcss/container-queries`. Update your Tailwind configuration to include the plugin:

```js
import twContainerQueries from "@tailwindcss/container-queries";

module.exports = {
  plugins: [
    twContainerQueries,
    // ...
  ],
};
```

### Stepper component

The `<Stepper />` has been refactored to use container queries. A size _must_ be declared for it to read dimensions from.

## 5.x

Refactored translation system to use `@howso/ui-internationalization-utils` `I18nBundle`s.

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

## 4.x

Flowbite updates 0.7 - 0.10

`tailwind.config.js` content path:

old: "node\*modules/flowbite-react/lib/esm/\*\*/\_.js"

new: "node\*modules/flowbite-react/dist/esm/\*\*/\_.mjs" - Please use (`flowbite.content()`)

```js
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
```

Renamed the `Tabs` attribute from `style` to `variant` to allow the use of the `style` attribute.

## 3.x

Locale file updates

## 2.x

### Translations

Please update the translations files in your application per the [README#Translations](./README.md#translations).
You are _strongly_ encouraged to organize your local files by `{{ns}}:{{language}}` to minimize overhead for
future updates and other packages.

### Form components

The new `Field*` components rely on `@hookform/error-message` and [`react-hook-form`](https://react-hook-form.com/).
They are peer dependencies, but require a different style of development particularly calling for [FormProvider](https://react-hook-form.com/docs/formprovider).

These fields are expected to be part of a later breaking change moving to React 19's form integration hopefully with minimal change.

## 1.x Initial version
