# Linting example \(eslint\)

## Linting source code

```text
yarn install
yarn lint
```

### Expected behaviour

Three errors are shown:

* LintFail.js: `Unexpected var, use let or const instead`
* LintFail.js: `Strings must use singlequote quotes`
* LintFail.js: `Unexpected console statement`

Each error is caused by a specific rule,

* `Unexpected var, use let or const instead`: `no-var`
* `Strings must use singlequote`: `quotes`
* `Unexpected console statement`: `no-console`

## Explanation

`yarn lint` refers to the `lint` script that is defined in [_package.json_](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/package.json#L29). This is equivalent to running `./node_modules/.bin/eslint src/` from the command line. _eslint_ will validate that JavaScript source files pass a rules that help to avoid common errors or confusing code. It also enforces formatting to an extent.

_eslint_ ruleset is configured in [_.eslintrc_](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/.eslintrc/README.md).

* _import_ plugin is used to validate that import statements resolve
* _eslint:recommended_ and _google_ rulesets are used as a baseline.
* some rules are overridden by specifying them in "rules".

[Learn more](https://eslint.org/)

## Motivations for rules

Each rule from _eslint_ can be viewed at [_eslint_ rule documentation](https://eslint.org/docs/rules/). The motivation and guidance on how to fix it \(or when to turn it off\) is given for each rule. Some rules can even be fixed automatically by running _eslint_ with the `--fix` option.

## Fixing linting errors

Try to fix the problems reported by _eslint_. If a problem reported by _eslint_ is not valid, rules can be disabled for a specific line or file.

Disabling eslint for a line:

```javascript
console.log('Hello world'); //eslint-disable-line no-console
```

Disabling eslint for the whole file:

```javascript
/* eslint-disable no-console */

console.log('Hello world');
```

Note that different comment syntaxes are used for disabling lines versus whole files. This is to avoid accidentally disabling rules for the whole file. Such disable statements should be use very sparingly, otherwise the purpose of linting is defeated.

## Linting continuously

Linting is useful to get immediate feedback about mistakes and is a much faster alternative to catching silly mistakes than testing manually in a web browser and watching out for execution errors. Configure your editor to run eslint automatically when the source file changes. Also add either a "pretest" or "prebuild" script to package.json to lint source files automatically when running `yarn test` or `yarn build`.

