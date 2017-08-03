import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    mocha.setup('bdd');
    eval(`
      const expect = chai.expect;
      describe('test', () => {
        it('testtest', () => {
          expect(2).to.equal(2);
        })
      })
    `);
    mocha.run();
  }

  render() {
    return (
      <div id="mocha" />
    );
  }
}
