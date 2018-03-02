import React from 'react';
import ReactDOM from 'react-dom';

import PropsApp from './props_example/App';
import StateApp from './state_example/App';
import PureFunctionApp from './pure_function_example/App';

let currentApp = <PropsApp />;
if (document.location.search.match(/progress=state/)) {
  currentApp = <StateApp />;
} else if (document.location.search.match(/progress=pure_function/)) {
  currentApp = <PureFunctionApp />;
}

ReactDOM.render(currentApp, document.getElementById('root'));
