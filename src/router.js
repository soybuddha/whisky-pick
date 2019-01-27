import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import WhiskyList from './components/whisky/WhiskyList';
import WhiskyDetail from './components/whisky/WhiskyDetail';

function Routes() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/" exact component={WhiskyList} />
          <Route path="/whisky/:distilleryId/:whiskyId" exact component={WhiskyDetail} />
        </Switch>
      </Home>
    </Router>
  );
}

export default Routes;
