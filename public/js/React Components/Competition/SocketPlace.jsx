import React, { Component } from 'react';
import PropTypes from 'prop-types';

const io = require('socket.io-client');

const socket = io();

export default class SocketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Game in Progress',
    };
    this.send = this.send.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkWin();
    socket.on('msg', (data) => {
      this.updateState({ msg: data });
    });
  }
  checkWin() {
    setInterval(() => {
      if (this.props.passed()) {
        socket.emit('msg', `${this.props.user.slice(0, this.props.user.indexOf('@'))} won!`);
      }
    }, 100);
  }
  send(event) {
    socket.emit('msg', 'button clicked');
  }
  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
