import React from 'react';
import { MuiThemeProvider, AppBar, Card, RaisedButton } from 'material-ui';
import Badges from './Badges';
import Rankings from './Rankings';

const DashBoard = () => (
  <MuiThemeProvider>
    <InnerDash />
  </MuiThemeProvider>
);

const InnerDash = () => (
  <div>
    <AppBar title="Dashboard" />
    <Card>
      <div className="dashboard">
        <RaisedButton label="Go To Challenge" fullWidth />
        <RaisedButton label="Create A Challenge" fullWidth />
        <div className="flex">
          <Badges />
          <Rankings />
        </div>
      </div>
    </Card>
  </div>
);

export default DashBoard;
