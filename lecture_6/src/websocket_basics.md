# Websocket Basics Example

## Running the application

```text
yarn install
yarn test
yarn start:server
yarn start
```

## Explanation

* [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).
* [Redux middleware](https://redux.js.org/advanced/middleware)

_async\_process\_with\_middleware_ example is continued from.

### Websocket server simulation

A toy WebSocket server has been given which will accept all requests and start sending messages to connected WebSockets as UTF-8 encoded JSON strings. It will send a message with _eventName_ `ping` and _payload_ `{pingCount::Integer}` every 5 seconds.

### Websocket client

Browsers support WebSocket protocol natively through the `WebSocket` object.

[WebSocket.js](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_6/src/websocket_basics/WebSocket.js) defines an abstraction on top of the native object specific to the given server. This abstraction interprets incoming messages as JSON, notifies callbacks when connection status changes and exposes the `close` method. `parameters` can be optionally passed which will be translated to query parameters.

### Connection management

[Entrypoint JS](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_6/src/websocket_basics/WebsocketBasicsExample.js) dispatches actions when connecting, connected or disconnected from the WebSocket server. It also dispatches the `RECEIVED_PING` actions whenever a `ping` message is received from the WebSocket.

Listening for WebSocket status changes and messages from the server could very well be put into a middleware.

Connection to the server is usually initiated through an user interaction \(same goes for disconnection\).

### Reducers

[WebSocketReducer](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_6/src/websocket_basics/reducers/WebSocketReducer.js) simply stores the connection state and ping count.

### Components

No user interface changes are given in this example.

[_Back_](../../lecture_6-1.md)

