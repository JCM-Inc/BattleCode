import React from 'react';
import { Card, CardActions, CardHeader, CardText, MuiThemeProvider } from 'material-ui';

const Login = () => (
  <MuiThemeProvider>
    <InnerLogin />
  </MuiThemeProvider >
);

const InnerLogin = () => (
  <Card>
    <h1>Login</h1>
  </Card>
);

export default Login;
