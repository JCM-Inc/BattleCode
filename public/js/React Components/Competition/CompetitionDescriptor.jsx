import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';
import Test from './Test';
import SocketPlace from './SocketPlace';


class CompetitionDescriptor extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      passed: false,
    };
    this.compDescState = this.compDescState.bind(this);
    this.getState = this.getState.bind(this);
  }
<<<<<<< HEAD

  getState() {
    return this.state.passed;
  }
  compDescState(newState) {
    this.setState(newState);
  }
  render() {
    const { desc, testId, name, test, user, userInput } = this.props;
=======
  compDescState(newState) {
    this.setState(newState);
  }
  getState() {
    return this.state.passed;
  }
  render() {
    const { desc, name, test, userInput } = this.props;
>>>>>>> [add] second player notification of loss
    return (
      <div className="CompetitionDescriptor">
        <div className="TopDescription">
          <SocketPlace
            passed={this.getState}
<<<<<<< HEAD
            user={user}
=======
>>>>>>> [add] second player notification of loss
          />
          <Card className="Description">
            <CardText>
              <h1>{name}</h1>
              <p>{desc}</p>
            </CardText>
          </Card>
        </div>
        <Test
          update={this.compDescState}
          test={test}
          userInput={userInput}
<<<<<<< HEAD
          user={user}
          testId={testId}
=======
>>>>>>> [add] second player notification of loss
        />
      </div>
    );
  }
}

CompetitionDescriptor.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default CompetitionDescriptor;
