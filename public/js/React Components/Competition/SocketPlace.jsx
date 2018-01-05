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
      input: '',
      chat: [],
    };
    this.send = this.send.bind(this);
    this.updateState = this.updateState.bind(this);
    this.checkWin();

    const emitData = this.props;
    socket.emit('room', emitData);

    // socket.on('room', (players) => {
    //   this.setState((state) => {
    //     return state.players = players;
    //   });
    // });
    this.updateState = this.updateState.bind(this);
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

  handleChange(e) {
    this.setState({ input: e.target.value });
    socket.emit('typing', 'user is typing a message');
  }

  handleClick() {
    socket.emit('chat', this.state.input);
    socket.on('new message', (data) => {
      console.log(data);
      this.state.chat.push(data, ' ');
    });
  }

  render() {
    const {players, user} = this.state;
    return (
      <div>
        <h3>Heckle your competitors!</h3>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <input
          type="button"
          value="Submit"
          onClick={this.handleClick.bind(this)}
        />
        <p>{this.state.chat}</p>
      </div>
    );
  }

}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
