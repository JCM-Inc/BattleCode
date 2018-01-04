import React, { Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
const socket = io.connect();
// testing here to determine connection for sockets

export default class SocketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Game in Progress!',
      players: [],
      user: this.props.user,
      room: this.props.testName,
    };
    this.send = this.send.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkWin();

    socket.emit('room', this.props);

    socket.on('room', (username) => {
      this.setState((state, username) => {
        return state.players.push(username.user);
      });
    });
  }

  checkWin() {
    setInterval(() => {
      if (this.props.passed()) {
        socket.emit('msg', `${this.props.user.slice(0, this.props.user.indexOf('@'))} won!`);
      }
    }, 20);
  }

  send(event) {
    socket.emit('room', 'button clicked');
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    const {players, user} = this.state;
    return (
      <div>
        <h3>In room now {players}</h3>
      </div>
    );
  }

}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
