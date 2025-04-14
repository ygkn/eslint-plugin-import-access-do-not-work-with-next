# eslint-plugin-import-access Reproduction

This repository is a minimal reproduction example for [issue #124](https://github.com/uhyo/eslint-plugin-import-access/issues/124) in [eslint-plugin-import-access](https://github.com/uhyo/eslint-plugin-import-access).

```
❯ npm run lint

> lint
> next lint


./src/app/revalidate-path.ts
3:10  Error: Cannot import a package-private export 'revalidatePath'  import-access/jsdoc

./src/app/test-import.tsx
4:10  Error: Cannot import a package-private export 'formatDate'  import-access/jsdoc

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
```
