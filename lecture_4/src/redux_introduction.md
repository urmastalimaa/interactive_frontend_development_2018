# Redux introduction

## Running the application

```text
yarn install && yarn test && yarn start
```

Open _Redux introduction_ subpage.

## New dependencies

* [Redux](https://github.com/reactjs/redux) has been added to [package.json](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_4/package.json#L38)

## Redux

### State

Redux is an application state engine that focuses on unidirectional data flow. All application state is captured in a single JavaScript object. That object is stored in Redux store. The only way to modify that object \(and therefore application state\) is to dispatch actions.

[Example store](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_4/src/redux_introduction/ReduxExample.js#L20)

### Actions

Actions represent input from the user or external sources. An action has a type, describing what happened and it can also contain arbitrary payload. Actions do not change state on their own, but they might cause a reducer to change the application state.

[Flux standard format](https://github.com/acdlite/flux-standard-action) is used for actions.

[Example actions](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_4/src/redux_introduction/ReduxExample.js#L26)

### Reducers

Reducer is a function that takes two arguments, the current application state and an action and it produces new application state. Reducers contain application logic, they define how the application reacts to external stimuli.

A reducer usually switches over the action type to handle different types of actions differently. If a reducer encounters an unknown action, it must return the state as it is.

[Example reducer](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_4/src/redux_introduction/ReduxExample.js#L5)

[Learn more about redux](https://redux.js.org)

[_Back_](../../lecture_4-1.md)

