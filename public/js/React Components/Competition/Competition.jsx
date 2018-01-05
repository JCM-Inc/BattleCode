import React, { Component } from 'react';
import { AppBar, FontIcon, MuiThemeProvider } from 'material-ui';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Confetti from 'react-confetti';
import axios from 'axios';
import CompetitionDescriptor from './CompetitionDescriptor';
import TextEditor from './TextEditor';
import TextEditorSettings from './TextEditorSettings';
import parseToMocha from './parseToMocha';
import WinShare from './WinShare';

export default class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'javascript',
      theme: 'blackboard',
      userInput: '',
      test: '',
      name: '',
      desc: '',
      id: '',
    },

    axios.post('/uniquecompetition', {
      id: window.location.hash.split('?id=')[1],
    }).then(res => {
      this.setState({
        test: parseToMocha(res.data[0].tests, res.data[0].name),
        name: res.data[0].name,
        desc: res.data[0].description,
        testId: res.data[0]._id,
      });
    });
    this.updateState = this.updateState.bind(this);
  }

  updateState(newState) {
    this.setState(newState);
  }

  render() {
    const { desc, mode, name, test, theme, userInput } = this.state;
    if (this.state.name === '') {
      return <div>loading</div>;
    } return (
      <MuiThemeProvider>
        <div className="Competition">
          <Confetti className="Confetti" />
          <AppBar
            title="Challenge"
            style={{ backgroundColor: '#4FB5DB' }}
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
              name={name}
              desc={desc}
              user={this.props.user}
              testId={this.state.testId}
            />
            <TextEditor
              className="TextEditor"
              mode={mode}
              theme={theme}
              userInput={userInput}
              updateState={this.updateState}
            />
          </div>
          <WinShare
            className="WinShare"
            testId={this.state.testId}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

Competition.propTypes = {
  user: PropTypes.string.isRequired,
};
