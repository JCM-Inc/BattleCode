import React, { Component } from 'react';
import { AppBar, Card, FontIcon, MuiThemeProvider, RaisedButton } from 'material-ui';
import Badges from './Badges';
import Rankings from './Rankings';

class DashBoard extends Component {
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
      <MuiThemeProvider >
        <div>
          <AppBar title="Dashboard" style={{ backgroundColor: '#FF6F00' }} iconElementLeft={<FontIcon className={['material-icons', 'signoutDashBoard'].join(' ')}>navigate_before</FontIcon>} />
          <Card>
            <div>
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

              <div className="DashBoardFlex">
                <Badges />
                <Rankings />
              </div>
            </div>
          </Card>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default DashBoard;
