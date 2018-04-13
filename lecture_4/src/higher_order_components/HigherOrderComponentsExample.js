import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export const TextComponent = (props) =>
  <span>{props.text}</span>;

TextComponent.propTypes = {text: PropTypes.string};

export const ButtonComponent = (props) =>
  <button>{props.text}</button>;

ButtonComponent.propTypes = {text: PropTypes.string};

// headerWrapper is a function that accepts a React component as input.
// Returns a function that accepts props like a normal pure function React
// component (i.e returns a pure-function React component!).
//
// Such Higher-Order Components allow reuse of simpler components across
// different concerns. Imagine Components with _loading_ state or Components
// that needs to read something from a data-store.
export const headerWrapper = (Component) => {
  const ComponentWithHeader = (props) => (
    <div>
      <h1>{props.headerText}</h1>
      <Component {...props} />
    </div>
  );
  ComponentWithHeader.propTypes = {headerText: PropTypes.string};

  return ComponentWithHeader;
};

const App = () => {
  const TextComponentWithHeader = headerWrapper(TextComponent);
  const ButtonComponentWithHeader = headerWrapper(ButtonComponent);

  return (
    <div>
      <TextComponentWithHeader headerText='header-text' text='text' />
      <ButtonComponentWithHeader headerText='header-button' text='button-text' />
    </div>
  );
};

export const start = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};
