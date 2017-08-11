import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

const io = require('socket.io-client');

const socket = io();
=======
import { AppBar, FontIcon, MuiThemeProvider } from 'material-ui';
import { Link } from 'react-router-dom';

const io = require('socket.io-client')
const socket = io()
// import Confetti from 'react-confetti';
// import axios from 'axios';
// import CompetitionDescriptor from './CompetitionDescriptor';
// import TextEditor from './TextEditor';
// import TextEditorSettings from './TextEditorSettings';
// import parseToMocha from './parseToMocha';
>>>>>>> [add] second player notification of loss

export default class SocketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      msg: 'Game in Progress',
=======
      msg: 'nada',
>>>>>>> [add] second player notification of loss
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
<<<<<<< HEAD
        socket.emit('msg', `${this.props.user.slice(0, this.props.user.indexOf('@'))} won!`);
=======
        console.log('i passed next sending msg');
        socket.emit('msg', 'you lost');
>>>>>>> [add] second player notification of loss
      }
    }, 500);
  }
  send(event) {
    socket.emit('msg', 'button clicked');
  }
  updateState(newState) {
    this.setState(newState);
  }

  render() {
<<<<<<< HEAD
    return (
      <div>
        <h2>{this.state.msg}</h2>
=======
    // const { desc, mode, name, test, theme, userInput } = this.state;
    return (
      <div>Socket
        <h2>SOCKET MAYBE BABY, {this.state.msg}</h2>
        <button onClick={this.send}>SEND MESSAGE</button>
>>>>>>> [add] second player notification of loss
      </div>
    );
  }
}
<<<<<<< HEAD

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
=======
>>>>>>> [add] second player notification of loss
