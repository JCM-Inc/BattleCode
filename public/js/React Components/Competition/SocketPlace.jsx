import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, FontIcon, MuiThemeProvider } from 'material-ui';
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
    this.setState({input: e.target.value });
    socket.emit('typing', 'user is typing a message');
  }
  
  handleClick() {
    socket.emit('chat', {user: this.props, msg: this.state.input});
    socket.on('new message', (message) => {
      this.setState({ chat: message });
    });
  }

  render() {
    const {players, user} = this.state;
    const messages = this.state.chat.map((message) => {
      return <li className="MessageWrapper">{message}</li>;
    });
    return (
      <div className="Container">
        <h3 style={{ font: '16px sans-serif' }}>Heckle your competitors!</h3>
        <p style={{ font: '16px sans-serif' }}>Click "Submit" to enable chat</p>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <input
          type="button"
          value="Submit"
          onClick={this.handleClick.bind(this)}
          style={{ font: '16px sans-serif' }}
        />
        <ul style={{ textAlign: 'left', font: '16px sans-serif', listStyle: 'none' }}>
          {messages}
        </ul>
      </div>
    );
  }

}

SocketPlace.propTypes = {
  user: PropTypes.string.isRequired,
};
