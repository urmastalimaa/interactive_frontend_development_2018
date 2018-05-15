# Connected React Router Example

## Running the application

```text
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

_router-basics_ example is continued from.

### New Dependencies

* [connected-react-router](https://github.com/supasate/connected-react-router)

### Setup changes

In application [setup](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_7/src/connected-react-router/ConnectedReactRouterExample.js) the `history` package is used to create an abstraction over DOM History API.

Both a function to enhance a reducer \(`connectRouter`\) and a middleware `routerMiddleware` are imported from `connected-react-router` which allows syncing application state with regards to routing with the Redux store.

React Router could be used without `connected-react-router`, but then the application would have uncaptured internal state.

`routerMiddleware` listens for changes on the `history` object and dispatches actions accordingly. `connectRouter` function changes the reducer to handle history actions.

These additions allow continuing to use core React Router logic while syncing all the state with the Redux store and giving visibility to history changes.

### Containers

[App container](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_7/src/connected-react-router/containers/App.js) has been changed to use `ConnectedRouter` instead of `Router` to read the current route from Redux store.

[CommentFormContainer](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_7/src/connected-react-router/containers/CommentFormContainer.js) has been changed to use `push` actions from `connected-react-router` instead of pushing to the history API directly.

[_Back_](../../lecture_7-1.md)

