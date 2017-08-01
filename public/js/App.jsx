import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'
import DashBoard from './DashBoard/Dash';
import LogForm from './Login_Signup/LogForm';
import handlers from './Login_Signup/handlers';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={(props) => <LogForm type="Login" handler={handlers.loginHandler} />} />
          <Route exact path='/dash' component={DashBoard} />
          <Route exact path='/login' render={(props) => <LogForm type="Login" handler={handlers.loginHandler} />} />
          <Route exact path='/signup' render={(props) => <LogForm type="Sign Up" handler={handlers.signupHandler} />} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}
const NotFound = () => (<h1>404</h1>)

export default App;
