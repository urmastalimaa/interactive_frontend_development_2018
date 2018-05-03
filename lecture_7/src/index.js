import {start as startConnectedReactRouterExample}
  from './connected-react-router/ConnectedReactRouterExample';

import {start as startRouterBasicsExample}
  from './router-basics/RouterBasicsExample';

if (document.location.search.match(/progress=connected_react_router/)) {
  startConnectedReactRouterExample();
} else {
  startRouterBasicsExample();
}
