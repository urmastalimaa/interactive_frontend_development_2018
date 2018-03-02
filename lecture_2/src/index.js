import React from 'react';
import ReactDOM from 'react-dom';

import PropsApp from './props_example/App';
import StateApp from './state_example/App';

let currentApp = <PropsApp />;
if (document.location.search.match(/progress=state/)) {
  currentApp = <StateApp />;
}

ReactDOM.render(currentApp, document.getElementById('root'));
