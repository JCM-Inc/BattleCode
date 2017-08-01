import React from 'react';
import { MuiThemeProvider, AppBar } from 'material-ui';
import InnerDash from './InnerDash.jsx';

class DashBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AppBar title="Dashboard" />
        <InnerDash />
      </div>
    );
  }
}

class Dash extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <MuiThemeProvider>
        <DashBoard />
      </MuiThemeProvider>
    );
  }
}

export default Dash;
