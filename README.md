# Aliases in module augmentation are not resolved properly

This repo shows that `dts-bundle-generator` doesn't properly resolve path aliases in module augmentations.
`augmented.ts` augments two different modules, where one references the other too. If the path alias
`@shared` is used, the resulting call to the bundler will fail because the bundled declaration file is
invalid.

If you replace `@shared` with relative paths, bundling works properly.