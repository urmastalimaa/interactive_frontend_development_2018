# Introduction to React

## Running the application

```text
yarn install && yarn start
```

Open _Props example_ subpage.

## New dependencies

* [React and bindings for the browser](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/package.json#L29)
* [React preset for babel \(transpilation\)](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/package.json#L15)
* [React plugin for eslint \(linting\)](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/package.json#L21)

## React views

[React](https://reactjs.org/) is a library for building views in a declarative and composable manner.

Parent view components can include a number of child components. Parent components can pass data to child components through _props_ - short for properties. The views are defined in standard JavaScript files.

## JSX

[JSX](https://reactjs.org/docs/introducing-jsx.html) is an extension to JavaScript language that allows defining React components in an HTML-like syntax. Note that JSX will be transpiled down to JavaScript before it is evaluated in the browser. If one so wishes, [_hyperscript_](https://github.com/hyperhype/hyperscript) can be used to define the views instead of JSX. Also, [standard JavaScript can obviously be used instead of JSX](https://reactjs.org/docs/introducing-jsx.html#jsx-represents-objects).

When using JSX, `React` must be imported as JSX is transpiled down to `React.createElement` expressions.

## View classes

React views can be defined as ES6 classes. When doing so, they must inherit from the `Component` class that is exported from React. The `render` function of the class must return a React node.

## Components in the example

* [`App`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/props_example/App.js) contains all the other components.
* [`CommentList`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/props_example/CommentList.js) contains two `Comments`.
* [`CommentForm`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/props_example/CommentForm.js) has a button that

  simulates form submission when clicked.

* [`Comment`](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/props_example/Comment.js) renders a Comment, author header

  and text in a `div`.

## Props and rendering

Note that all _props_ are immutable. Whenever something needs to change, a whole new render cycle with new _props_ objects is performed.

[_Back_](../../lecture_2-1.md)

