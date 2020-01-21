import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReduxContext from './store/ReduxContext';
import configureStore from './store/configureStore';
import InitialDataLoad from './components/InitialDataLoad';
import Environment from './modules/Environment';

// should remove before production build but will hopefully not add to bundle or cause issues
// const test_lazy_load = lazy(() => import('./components/...'));

const store = configureStore();

const Loading = () => (<div>Loading...</div>);

const App = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <ReduxContext store={store}>
        <InitialDataLoad />
        <Switch>
          {
            // Environment.is.development && (<Route exact path="/local-dev-only" render={() => (<test_lazy_load />)} />)
          }
          <Route exact path="*" render={() => (<p>test</p>)} />
        </Switch>
      </ReduxContext>
    </Suspense>
  </Router>
);

export default App;
