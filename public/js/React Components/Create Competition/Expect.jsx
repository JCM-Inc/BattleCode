import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontIcon, Paper, RaisedButton, TextField } from 'material-ui';

export default class Expect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expect: '',
      toequal: '',
    };

    this.firstInput = this.firstInput.bind(this);
    this.secondInput = this.secondInput.bind(this);
    this.secondKeyup = this.secondKeyup.bind(this);
    this.submit = this.submit.bind(this);
    this.remove = this.remove.bind(this);
  }

  firstInput(e) {
    this.setState({
      expect: e.target.value,
    });
  }

  secondInput(e) {
    this.setState({
      toequal: e.target.value,
    });
  }

  secondKeyup(e) {
    if (e.key === 'Enter') {
      this.submit();
    }
  }

  submit() {
    const test = {};
    test[this.state.expect] = this.state.toequal;
    this.props.updateTests(
      Object.assign(this.props.tests, test),
    );
  }

  remove() {
    this.props.removeExpect(this.state.expect);
  }

  render() {
    return (
      <div>
        <FontIcon
          className={'material-icons removeExpect'}
          onClick={this.remove}
        >
          remove
        </FontIcon>
        <Paper className="Expect">
          <TextField
            className="expect"
            floatingLabelText="expect"
            onChange={this.firstInput}
            floatingLabelStyle={{ color: 'rgba(0, 0, 0, 0.87)' }}
            underlineFocusStyle={{ borderColor: '#FF6F00' }}
          />
          <TextField
            className="toequal"
            floatingLabelText="to equal"
            onChange={this.secondInput}
            onKeyUp={this.secondKeyup}
            floatingLabelStyle={{ color: 'rgba(0, 0, 0, 0.87)' }}
            underlineFocusStyle={{ borderColor: '#FF6F00' }}
          />
        </Paper>
        <RaisedButton label="Add" fullWidth onClick={this.submit} />
      </div>
    );
  }
}

Expect.propTypes = {
  updateTests: PropTypes.func.isRequired,
  removeExpect: PropTypes.func.isRequired,
  tests: PropTypes.object.isRequired,
};
