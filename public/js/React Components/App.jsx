import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';
import Signin from './Signin/Signin';
import Competition from './Competition/Competition';
import CreateCompetition from './Create Competition/CreateCompetition';

const NotFound = () => (<h1>404</h1>);

const App = () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Signin}
      />
      <Route
        path="/login"
        component={Signin}
      />
      <Route
        path="/dash"
        render={() => (
          window.isLoggedIn ? <DashBoard /> : <Redirect to="/login" />
        )}
      />
      <Route
        path="/competition"
        render={() => (
          window.isLoggedIn ? <Competition /> : <Redirect to="/login" />
        )}
      />
      <Route
        path="/createcompetition"
        render={() => (
          window.isLoggedIn ? <CreateCompetition /> : <Redirect to="/login" />
        )}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
