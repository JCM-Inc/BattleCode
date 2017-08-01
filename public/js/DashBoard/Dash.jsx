import React from 'react';
import { MuiThemeProvider, AppBar, Card, RaisedButton, FontIcon } from 'material-ui';
import Badges from './Badges';
import Rankings from './Rankings';

const DashBoard = () => (
  <MuiThemeProvider>
    <InnerDash />
  </MuiThemeProvider>
);

class InnerDash extends React.Component {
  constructor() {
    super();
  }

  goToChallenge() {
    console.log('go to!', this);
  }

  createChallenge() {
    console.log('create!', this);
  }

  render() {
    return (
      <div>
        <AppBar title="Dashboard" style={{ backgroundColor: '#FF6F00' }} iconElementLeft={<FontIcon id="signoutDash" className="material-icons">navigate_before</FontIcon>} iconStyleLeft={{ marginTop: '20px' }} />
        <Card>
          <div className="dashboard">
            <RaisedButton
              label="Go To Challenge"
              fullWidth
              onClick={this.goToChallenge}
            />

            <RaisedButton
              label="Create A Challenge"
              fullWidth
              onClick={this.createChallenge}
            />

            <div className="flex">
              <Badges />
              <Rankings />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default DashBoard;
