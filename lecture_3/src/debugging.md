# Debugging example

## Running the application

```text
yarn install && yarn start
```

Open _Debugging example_ subpage.

* Open console in your browser.
* Type your name into the author field and click submit.
* JavaScript evaluation should stop in [`App.handleCommentSubmit`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_3/src/debugging/App.js#L18) on the line with `debugger`
* Try stepping to the next line and out of the current function
* Try setting breakpoints elsewhere in `App`

## Components in example

Builds on top of presentational and container components example.

* [`App`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_3/src/debugging/App.js#L18) has a `debugger` statement on line 18. This will force

  a breakpoint in JavaScript evaluation when execution reaches that point. It

  is obviously a bad idea to leave `debugger` statements in production code.

  This is why _eslint_ disallows the usage.

## Source maps

Sourcemaps map `public/app.js` back to source files. This allows us to debug and step through original soure code. We can also set breakpoints by using browser developer tools \(usually by clicking on line numbers on left-hand side\).

[_Back_](../../lecture_3-1.md)

