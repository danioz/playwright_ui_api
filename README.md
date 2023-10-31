### Plugins

Playwright Test for VSCode
ESLint
Prettier - Code formatter
Code Spell Checker

### Run tests

To run playwright test

```bash
npx playwright test
```

To run smoke test

```bash
npx playwright test --grep=@smoke
```

### Commit name rules

```bash
test({webOrApi}_{featureNumber}-{tcNumber}{tcName})
test(api_2_1)add-new-pet
```

### Husky, ESLint, and Prettier

Project is set up with [Husky](https://github.com/typicode/husky), [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to help enforce consistent coding practices. Husky is a tool that will install a pre-commit hook to run the linter any time before you attempt to make a commit.

To install the pre-commit hook you will need to run

```bash
npm run prepare
```

To run ESLint to fix:

```bash
npm run lint:fix
```

To run Prettier to fix:

```bash
npm run prettier:fix
```
