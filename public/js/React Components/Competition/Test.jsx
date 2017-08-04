import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Test extends Component {
  componentDidMount() {
    try {
      eval(`${this.props.userInput}; ${this.props.test};`);
    } catch (e) {
      eval(`${this.props.test};`);
    }
  }

  componentDidUpdate() {
    this.mocha.innerHTML = '';
    try {
      eval(`${this.props.userInput}; ${this.props.test};`);
    } catch (e) {
      eval(`${this.props.test};`);
    }
  }

  render() {
    return (
      <div id="mocha" ref={(mocha) => { this.mocha = mocha; }} />
    );
  }
}

Test.propTypes = {
  test: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
};
