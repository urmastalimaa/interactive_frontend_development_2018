# Asynchronous processes with Redux middleware

## Running the application

```text
yarn install
yarn test
yarn start:server
yarn start
```

Open _Async process with middleware_ subpage.

## Explanation

_async\_process\_basic_ example is continued from.

### Redux Middleware

[Redux middlewares](https://redux.js.org/api-reference/applymiddleware) can be used to add custom functionality to the Redux store. Middlewares can be a good fit to integrate with different external APIs whether synchronous or asynchronous. Putting all the logic related to one external API to the middleware can help with encapsulation and help to keep the Redux containers and action creators very simple.

Care must be taken not to implement very _magical_ middlewares which remove the clarity and explicity of Redux.

### CommentServerMiddleware

In this example [CommentListContainer](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_5/src/async_process_with_middleware/containers/CommentListContainer.js) and [CommentFormContainer](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_5/src/async_process_with_middleware/containers/CommentFormContainer.js) have been changed to simply express the desire to perform an action, the containers no longer directly call functions that make asynchronous calls. This means that the React/Redux containers do not call functions tied to any particular Server interface.

Instead [CommentServerMiddleware](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_5/src/async_process_with_middleware/middlewares/CommentServerMiddleware.js) has been added that listens for actions that should fire requests to the server. It then initiates the request and dispatches success/failure actions accordingly.

The middleware can track in-flight requests, reuse or cancel them when appropriate. The middleware can also hold other state related to the backend server.

