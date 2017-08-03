import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class Test extends Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.mocha).innerHTML = '';
    try {
      eval(`${this.props.userInput}; ${this.props.mocha};`);
    } catch (e) {
      eval(`${this.props.mocha};`);
    }
  }
  componentDidMount() {
    try {
      eval(`${this.props.userInput}; ${this.props.mocha};`);
    } catch (e) {
      eval(`${this.props.mocha};`);
    }
  }


  render() {
    return (
      <div id="mocha" ref="mocha" />
    );
  }
}

Test.propTypes = {
  mocha: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
};
