# Unit tests

## Running tests

```text
yarn install
yarn test
```

#### Expected behaviour

* 4 passing tests

## Explanation

`yarn test` refers to the `test` script that is defined in [_package.json_](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/package.json#L31). This is equivalent to running `./node_modules/.bin/mocha` from the command line.

### Mocha

[Mocha](https://mochajs.org/) is a test-runner. It defines how tests are defined \(`describe`, `beforeEach`, `it`\), how they are run and what the output looks like.

_mocha_ is configured in [test/mocha.opts](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/test/mocha.opts). It specifies the output format and instructs all test suites to require test/TestHelper JS file.

[_TestHelper.js_](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/test/TestHelper.js) is used to perform setup that is needed for all tests.

It uses _babel_ to transform source files into ES5 that can be interpreted by NodeJS. NodeJS does not support ES6 modules and we don't want to change our source files to be able to run tests from the command line. Thus a different babel configuration is used to both resolve modules and to transpile source code for a desired NodeJS version.

### Chai

[Chai](http://chaijs.com/) is an assertion library that allows testing for properties of objects or functions. _expect_ style assertions are made available thorugh a global `expect` function in [_TestHelper.js_](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/test/TestHelper.js).

### Tests

Check out [test/PureFunctionsTests.js](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/test/PureFunctionsTest.js) for example tests. It also demonstrates how `beforeEach` can be use to extract common setup code.

### Continuous testing

Mocha can be run in `watch` mode to run tests any time files change. This can be useful to get feedback faster. The `test:watch` script is defined in [package.json](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_1/package.json) for convenience.

### transform-object-rest-spread plugin

ES6 defines spread syntax for arrays `[...myArray, newElem]`, but does not do so for objects. Object.assign can be used to create a new object with an additional property \(`Object.assign({}, myObj, {newKey: newValue})`, but it is rather long for such a common operation.

[transform-object-rest-spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/) babel plugin enables `{...myObj, newKey: newValue}` syntax.

