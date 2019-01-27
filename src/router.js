import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import WhiskyList from './components/whisky/WhiskyList';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: WhiskyList },
  childRoutes: [
    {
      path: 'whisky',
      getComponent(location, cb) {
        System.import('./components/whisky/WhiskyList')
          .then(module => cb(null, module.default));
      },
    },
    {
      path: 'whisky/:id',
      getComponent(location, cb) {
        System.import('./components/whisky/WhiskyDetail')
          .then(module => cb(null, module.default));
      },
    },
  ],
};

function Routes() {
  return (
    <Router routes={componentRoutes} />
  );
}

export default Routes;
