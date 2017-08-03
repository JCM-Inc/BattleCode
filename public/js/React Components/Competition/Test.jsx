import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    eval(`
      mocha.setup('bdd');

      const expect = chai.expect;
      describe('test', () => {
        it('testtest', () => {
          expect(2).to.equal(1);
        })
      })

      mocha.run();
    `);
  }

  render() {
    return (
      <div id="mocha" />
    );
  }
}
