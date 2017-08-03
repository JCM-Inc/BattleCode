import React, { Component } from 'react';
import { AppBar, Card, FontIcon, MuiThemeProvider, RaisedButton } from 'material-ui';
import Badges from './Badges';
import Rankings from './Rankings';
import { Link } from 'react-router-dom'

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
          <AppBar showMenuIconButton={false} title="Dashboard" style={{ backgroundColor: '#FF6F00' }} />
          <Card>
            <div>
              <Link to="/competition">
                <RaisedButton fullWidth label="Go To Challenge" />
              </Link>
              <Link to="/create">
                <RaisedButton fullWidth label="Create A Challenge" />
              </Link>

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
