import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Loading from './components/common/Loading';

const Home = React.lazy(() => import('./containers/home/HomeContainer'));
const WhiskyList = React.lazy(() => import('./containers/whisky/WhiskyListContainer'));
const WhiskyDetail = React.lazy(() => import('./containers/whisky/WhiskyDetailContainer'));
const TasterList = React.lazy(() => import('./containers/taster/TasterListContainer'));
const TasterDetail = React.lazy(() => import('./containers/taster/TasterDetailContainer'));

function Routes() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} />} />
            <Route path="/whiskies" exact render={(props) => <WhiskyList {...props} />} />
            <Route path="/whiskies/:distilleryId/:whiskyId" exact render={(props) => <WhiskyDetail {...props} />} />
            <Route path="/tasters" exact render={(props) => <TasterList {...props} />} />
            <Route path="/tasters/:tasterId" exact render={(props) => <TasterDetail {...props} />} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default Routes;
