import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Popover, RaisedButton } from 'material-ui';
import axios from 'axios';

export default class CompetitionSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorEl: null,
      Competitions: [],
    };

    axios.get('/api/competitions').then((res) => {
      this.setState({
        Competitions: res.data,
      });
    });

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }
  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const Competitions = this.state.Competitions.map(comp => (
      <Link
        to={`/competition?id=${comp._id}`}
        key={comp._id}
        className="CompetitionItem"
      >
        <MenuItem primaryText={comp.name} />
      </Link>
    ));

    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Go To Challenge"
          fullWidth
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu style={{ textAlign: 'center' }} >
            {Competitions.length > 0 ? Competitions : <b>No Tests</b> }
          </Menu>
        </Popover>
      </div>
    );
  }
}
