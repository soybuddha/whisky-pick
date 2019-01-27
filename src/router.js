import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import WhiskyList from './components/whisky/WhiskyListContainer';
import WhiskyDetail from './components/whisky/WhiskyDetail';

function Routes() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={WhiskyList} />
          <Route path="/whisky/:distilleryId/:whiskyId" exact component={WhiskyDetail} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default Routes;
