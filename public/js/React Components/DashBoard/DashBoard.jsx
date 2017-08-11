import React from 'react';
import { AppBar, Card, MuiThemeProvider, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';
import Badges from './Badges';
import Rankings from './Rankings';
import CompetitionSelect from '../Competition/CompetitionSelect';
import CreateCompetition from '../Create Competition/CreateCompetition';

const DashBoard = () => (
  <MuiThemeProvider >
    <div>
      <AppBar showMenuIconButton={false} title="Dashboard" style={{ backgroundColor: '#FF6F00' }} />
      <Card>
        <div>
          <CompetitionSelect />
          <Link to="CreateCompetition">
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

export default DashBoard;
