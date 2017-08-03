import React from 'react';
import { Switch, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';
import Signin from './Login_Signup/Signin';
import Competition from './Competition/Competition';

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
        path="/dash"
        component={DashBoard}
      />
      <Route
        path="/login"
        component={Signin}
      />
      <Route
        path="/competition"
        component={Competition}
      />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
