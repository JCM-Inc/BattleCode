import React, { Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

export default class SocketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Game in Progress',
      players: [],
    };
    this.send = this.send.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkWin();
    // console.log(this.props.test, 'is name of socket')
    // const socket = io(`/${this.props.test}`);
    // const socket = io();
    const socket = io('/nsp');
    
    console.log(socket, 'is socket?')
    
    socket.on('connection', (socket) => {
      console.log('user connected')
      socket.emit('user', this.props.user);
    });
    socket.on('user', (user) => {
      let newP = this.state.players.push(user);
      console.log('now players are', newP)
      // this.updateState
    });
    socket.on('msg', (data) => {
      this.updateState({ msg: data });
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
    socket.emit('msg', 'button clicked');
  }
  updateState(newState) {
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <h3>{this.state.players}</h3>
        <button onClick={this.send}>ClickME</button>
      </div>
    );
  }
}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
