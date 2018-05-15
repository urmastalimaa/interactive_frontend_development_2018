# React State example

## Running the application

```text
yarn install && yarn start
```

Open _State example_ subpage.

## State in React

[React documentation on state](https://reactjs.org/docs/state-and-lifecycle.html).

The main way to pass data between React components is to use _props_ which are immutable. In order to have data that changes, _state_ must be used.

Mutable state is hard to understand in general. Therefore React limits the usage of _state_ to a single Component. No other Components can read or change the state of other Components.

State can be initialized in the [class constructor](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

## Components in the example

Build on top of the props example.

* [App](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/state_example/App.js) has local state now - a list of comments that

  grows every 5 seconds.

* [CommentList](https://github.com/urmastalimaa/interactive_frontend_development_2018/tree/cdb4bae60178ff8cb84deb048ae3ba7f93a069f5/lecture_2/src/state_example/CommentList.js) has been upgraded to take a

  list of comment objects as props.

[_Back_](../../lecture_2-1.md)

