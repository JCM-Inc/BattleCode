import React, { Component } from 'react';
import { Dialog, FlatButton, RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class WinShare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      test: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  getChallengeFromId() {
    axios.get('/competition', {
      params: {
        _id: this.props.testId,
      },
    }).then(challenge => this.setState({
      test: challenge.data.name,
    }));
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleClose}
      />,
    ];
    this.getChallengeFromId();

    return (
      <div>
        <RaisedButton label="Share Your Win!" onTouchTap={this.handleOpen} className="WinShare" />
        <Dialog
          title="Share to Twitter"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          I just won {this.state.test}!!
        </Dialog>
      </div>
    );
  }
}

WinShare.propTypes = {
  testId: PropTypes.string.isRequired,
};
