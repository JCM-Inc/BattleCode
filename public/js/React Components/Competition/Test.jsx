import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';
import axios from 'axios';

export default class Test extends Component {
  componentDidMount() {
    try {
      mocha.suite.suites.splice(0, 1);
      eval(`${this.props.userInput}; ${this.props.test};`);
    } catch (e) {
      eval(`${this.props.test};`);
    }
  }
  componentDidUpdate() {
    this.mocha.innerHTML = '';
    try {
      mocha.suite.suites.splice(0, 1);
      eval(`${this.props.userInput}; ${this.props.test};`);

      setTimeout(() => {
        if (mocha.suite.suites[0].tests.every(test => test.state === 'passed')) {
          document.getElementsByClassName('Confetti')[0].style.display = 'block';
          if (this.props.passed === false) {
            axios.post('/api/gamewin', { email: this.props.user, gameId: this.props.testId }).then((res) => {
              console.log(res);
            });
            this.props.update();
          }
        } else {
          console.log('fail!', 0);
        }
      }, 400);
    } catch (e) {
      eval(`${this.props.test};`);
    }
  }

  render() {
    return (
      <Card>
        <CardText>
          <div id="mocha" ref={(mocha) => { this.mocha = mocha; }} style={{ margin: 0 }} />
        </CardText>
      </Card>
    );
  }
}

Test.propTypes = {
  test: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  // compDescState: PropTypes.function.isRequired,
};
