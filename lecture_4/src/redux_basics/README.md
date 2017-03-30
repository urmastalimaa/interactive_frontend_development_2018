# Redux comment list example

## Running the application

```
yarn install && yarn test && yarn start
```

Open _Redux basics example_ subpage.

## Explanation

## New dependencies

* [React-Redux](https://github.com/reactjs/react-redux) has been added to
  [package.json](../../package.json#L37)

## React with Redux

Redux is the core design pattern and react-redux adds the necessary bindings
to use Redux with React.

All presentational components have remained nearly unchanged from previous examples.

React-Redux significantly changes how container components are defined.

## Redux Comment app

### Actions

This example application has [3 actions](./actions/index.js) that capture all
user interactions.

* `COMMENT_SUBMITTED`
* `AUTHOR_SET`
* `TEXT_SET`

### Reducers

A [single reducer](./reducers/index.js) has been defined to handle all actions.
New comments are added to comments already in the state. `AUTHOR_SET`,
`TEXT_SET` actions are handled trivially.

### Application setup

[Application root](./ReduxBasics.js) has been changed to create a Redux store.
This store is passed to child components using the `Provider` components which
gives all children components access to the store.

### Container components

[`App`](./containers/App.js) container has been changed significantly. It
defines a simple presentational component that contains all the other
components. The presentational component receives all its props from a
auto-generated wrapper component that is generated using _react-redux_.

Read the comments in [`App`](./containers/App.js) and react-redux documentation
for more information.

### Tests

Component test have stayed unchanged, container tests have been changed to
reducer tests. Tests for trivial containers can be omitted. If there is logic
in `mapStateToProps` or `mapDispatchToProps`, extract that logic into
_selector_ functions and test those in isolation.

Note that it is much nicer to test reducer functions than it is to test
application logic through React components.

[`CommentForm`](./components/CommentForm.js) is changed to not have any internal
state. This might or might not be desirable, depends on the use case. Check
`CommentForm` for more information.

Redux dev tools [are integrated with store](./ReduxBasics.js#L15) if
`devToolsExtension` is present on window.

[_Back_](../../README.md)
