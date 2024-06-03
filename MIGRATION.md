# Migration guide

## 2.x

### Translations

Please update the translations files in your application per the [README#Translations](./README.md#translations).
You are _strongly_ encouraged to organize your local files by `{{ns}}:{{language}}` to minimize overhead for
future updates and other packages.

### Form components

The new `Field*` components rely on `@hookform/error-message` and [`react-hook-form`](https://react-hook-form.com/).
They are peer dependencies, but require a different style of development particularly calling for [FormProvider](https://react-hook-form.com/docs/formprovider).

This is expected to

## 1.x Initial version
