import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';
import Signin from './Signin/Signin';
import Competition from './Competition/Competition';
import CreateCompetition from './Create Competition/CreateCompetition';
import EnsureLoggedIn from './Signin/EnsureLoggedIn';

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
      <Route component={EnsureLoggedIn}>
        <Route
          path="/dash"
          component={DashBoard}
        />
        <Route
          path="/competition"
          component={Competition}
        />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
