# Migration guide

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
