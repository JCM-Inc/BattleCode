import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';
import Test from './Test';

export default class CompetitionDescriptor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mocha: `
        mocha.suite.suites.splice(0, 1);
        mocha.setup('bdd');
        const expect = chai.expect;
        describe('test', () => {
          it('a(2) -> 4', () => {
            expect(a(2)).to.equal(4);
          })
        })

        mocha.run();
      `,
    };
  }

  render() {
    return (
      <div className="CompetitionDescriptor">
        <div className="TopDescription">
          <Card className="Description">
            <CardText>
              <h1>Title</h1>
              <p>Description</p>
            </CardText>
          </Card>
        </div>
        <Test
          mocha={this.state.mocha}
          userInput={this.props.userInput}
        />
      </div>
    );
  }
}

CompetitionDescriptor.propTypes = {
  userInput: PropTypes.string.isRequired,
};
