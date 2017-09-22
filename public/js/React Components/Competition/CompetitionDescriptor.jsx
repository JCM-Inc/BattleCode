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
      updated: false,
    };
    this.makeUpdateTrue = this.makeUpdateTrue.bind(this);
    this.getState = this.getState.bind(this);
  }

  getState() {
    return this.state.passed;
  }
  makeUpdateTrue() {
    this.setState({
      updated: true,
      passed: true,
    });
  }
  render() {
    const { desc, testId, name, test, user, userInput } = this.props;
    return (
      <div className="CompetitionDescriptor">
        <div className="TopDescription">
          <SocketPlace
            passed={this.getState}
            user={user}
            testName={name}
          />
          <Card className="Description">
            <CardText>
              <h1>{name}</h1>
              <p>{desc}</p>
            </CardText>
          </Card>
        </div>
        <Test
          passed={this.state.updated}
          update={this.makeUpdateTrue}
          test={test}
          userInput={userInput}
          user={user}
          testId={testId}
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
