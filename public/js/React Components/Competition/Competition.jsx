import React, { Component } from 'react';
import { AppBar, FontIcon, MuiThemeProvider } from 'material-ui';
import { Link } from 'react-router-dom';
import CompetitionDescriptor from './CompetitionDescriptor';
import TextEditor from './TextEditor';
import TextEditorSettings from './TextEditorSettings';

export default class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'javascript',
      theme: 'blackboard',
      userInput: 'function a(n) {return n * 2',
      test: `
        mocha.suite.suites.splice(0, 1);
        mocha.setup('bdd');

        const expect = chai.expect;
        describe('test', () => {
          it('a(89123) -> 89123*2', () => {
            expect(a(89123)).to.equal(89123*2);
          });
        });

        mocha.run();
      `,
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    const { mode, test, theme, userInput } = this.state;
    return (
      <MuiThemeProvider>
        <div className="Competition">
          <AppBar
            title="Challenge"
            style={{ backgroundColor: '#FF6F00' }}
            iconElementLeft={
              <Link to="/dash">
                <FontIcon className={'material-icons icons iconsLeft'}>
                    navigate_before
                </FontIcon>
              </Link>
            }
            iconElementRight={
              <TextEditorSettings updateState={this.updateState} />}
          />
          <div className="MainCompetition">
            <CompetitionDescriptor
              updateState={this.updateState}
              userInput={userInput}
              test={test}
            />
            <TextEditor
              className="TextEditor"
              mode={mode}
              theme={theme}
              userInput={userInput}
              updateState={this.updateState}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
