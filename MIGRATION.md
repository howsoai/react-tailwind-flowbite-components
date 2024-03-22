# Migration guide

## 2.x Tailwind configuration changes

This release prunes the duplicated tailwind css from Storybook out of the module export.
No changes are required.

This release and introduces container query plugin usage. Modify your `tailwind.config.js` configuration to include:

```js
module.exports = {
  plugins: [
    require("@tailwindcss/container-queries"),
    // ...
  ],
};
```

## 1.x Initial version
