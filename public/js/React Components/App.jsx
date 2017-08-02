import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import DashBoard from './DashBoard/Dash';
import LogForm from './Login_Signup/LogForm';
import handlers from './Login_Signup/handlers';

const NotFound = () => (<h1>404</h1>);

const App = () => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <LogForm type="Login" handler={handlers.loginHandler} />}
      />
      <Route
        exact
        path="/dash"
        component={DashBoard}
      />
      <Route
        exact
        path="/login"
        render={() => <LogForm type="Login" handler={handlers.loginHandler} />}
      />
      <Route
        exact
        path="/signup"
        render={() => <LogForm type="Sign Up" handler={handlers.signupHandler} />}
      />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
