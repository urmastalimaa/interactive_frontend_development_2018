# User input example

# Introduction to React

## Running the application

```
yarn install && yarn start
```

Open _User input example_ subpage.

## User input

[React documentation on forms][0]

## Components in the example

* [`App`](./App.js) has been updated to add a new comment to local state
  whenever a comment is submitted from `CommentForm`. This is done by passing a
  callback function to `CommentForm`.
* [`CommentForm`](./CommentForm.js) has been added two text inputs, one that
  can be changed and one that cannot. Read the component documentation (and
  React official documentation) on how controlled and uncontrolled components
  work.
  
## Function context 

Function context and `this` are often misunderstood in JavaScript. Read about 
function context in [MDN documentation][1]. In this example [`App`](./App.js#L29) 
binds the `handleCommentSubmit` function to the current `App` instance before passing 
the function as a callback to `CommentForm`.

[_Back_](../../README.md)

[0]: https://reactjs.org/docs/forms.html
[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
