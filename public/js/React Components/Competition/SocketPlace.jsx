import React, { Component } from 'react';
import { AppBar, FontIcon, MuiThemeProvider } from 'material-ui';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const io = require('socket.io-client')
const socket = io()
// import Confetti from 'react-confetti';
// import axios from 'axios';
// import CompetitionDescriptor from './CompetitionDescriptor';
// import TextEditor from './TextEditor';
// import TextEditorSettings from './TextEditorSettings';
// import parseToMocha from './parseToMocha';

export default class SocketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'nada',
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
        console.log('i passed next sending msg');
        socket.emit('msg', 'you lost');
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
    // const { desc, mode, name, test, theme, userInput } = this.state;
    const { user } = this.props;
    return (
      <div>Socket
        <h2>SOCKET MAYBE BABY, {this.state.msg} {user}</h2>
        <button onClick={this.send}>SEND MESSAGE</button>
      </div>
    );
  }
}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
