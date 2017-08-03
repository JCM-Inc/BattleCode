import React from 'react';
import { MuiThemeProvider, AppBar, FontIcon } from 'material-ui';
import CompetitionDescriptor from './CompetitionDescriptor';
import TextEditor from './TextEditor';
import TextEditorSettings from './TextEditorSettings';

export default class Competition extends React.Component {
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
              <FontIcon
                className={'material-icons icons iconsLeft'}>
                  navigate_before
              </FontIcon>}
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
