import React from 'react';
import ReactDOM from 'react-dom';
import PresentationalContainerApp from './presentational_container/containers/App';
import DebuggingApp from './debugging/App';

let currentApp = <PresentationalContainerApp />;
if (document.location.search.match(/progress=debugging/)) {
  currentApp = <DebuggingApp />;
}

ReactDOM.render(currentApp, document.getElementById('root'));
