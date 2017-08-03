import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, FontIcon } from 'material-ui';
import CompetitionDescriptor from './CompetitionDescriptor';
import TextEditor from './TextEditor';
import TextEditorSettings from './TextEditorSettings';
import { Link } from 'react-router-dom';

export default class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 22,
      mode: 'javascript',
      theme: 'twilight',
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    const { fontSize, mode, theme } = this.state;
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
              <TextEditorSettings
                fontSize={fontSize}
                updateState={this.updateState}
              />}
          />
          <div className="MainCompetition">
            <CompetitionDescriptor />
            <TextEditor
              fontSize={fontSize}
              mode={mode}
              theme={theme}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
