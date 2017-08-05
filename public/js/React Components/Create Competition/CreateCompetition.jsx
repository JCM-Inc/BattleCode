import React, { Component } from 'react';
import { AppBar, Card, CardText, FontIcon, MuiThemeProvider, RaisedButton, TextField } from 'material-ui';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PreviewTest from './PreviewTest';
import Expect from './Expect';

export default class CreateCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      tests: {},
      expects: 1,
    };
    this.updateTests = this.updateTests.bind(this);
    this.addAnotherExpect = this.addAnotherExpect.bind(this);
    this.removeExpect = this.removeExpect.bind(this);
    this.createCompetition = this.createCompetition.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
  }

  updateTests(newTests) {
    this.setState({
      tests: newTests,
    });
  }

  addAnotherExpect() {
    this.setState({
      expects: this.state.expects + 1,
    });
  }

  removeExpect(expect) {
    const newTests = Object.assign(this.state.tests);
    delete newTests[expect];
    this.setState({
      tests: newTests,
      expects: this.state.expects - 1,
    });
  }

  createCompetition() {
    const { name, description, tests } = this.state;
    axios.post('/makechallenge', { name, description, tests }).then((res) => {
      console.log(res);
    });
  }

  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  descriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  render() {
    const { name, tests } = this.state;

    const Expects = [];
    for (let i = 0; i < this.state.expects; i += 1) {
      Expects.push(
        <Expect
          key={i}
          tests={tests}
          removeExpect={this.removeExpect}
          updateTests={this.updateTests}
        />);
    }

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            iconElementLeft={
              <Link to="/dash">
                <FontIcon className={'material-icons icons iconsLeft'}>
                  navigate_before
                </FontIcon>
              </Link>
            }
            title="Create A Challenge"
            style={{ backgroundColor: '#FF6F00' }}
          />
          <Link to="/dash">
            <RaisedButton
              label="Create"
              onClick={this.createCompetition}
              fullWidth
            />
          </Link>
          <Card>
            <CardText className="CreateCompetition">
              <FontIcon className={'material-icons addExpect'} onClick={this.addAnotherExpect}>
                add
              </FontIcon>
              <div className="AllExpects">
                {Expects}
              </div>
              <PreviewTest tests={tests} name={name} />
              <Card className="CreateCompetitionNameDesc">
                <CardText>
                  <h2>Name</h2>
                  <TextField
                    name="CreateCompetitionName"
                    onChange={this.nameChange}
                    floatingLabelStyle={{ color: '#FF6F00' }}
                    underlineFocusStyle={{ borderColor: '#FF6F00' }}
                  />
                  <h2>Description</h2>
                  <TextField
                    name="CreateCompetitionDesc"
                    onChange={this.descriptionChange}
                    floatingLabelStyle={{ color: '#FF6F00' }}
                    underlineFocusStyle={{ borderColor: '#FF6F00' }}
                  />
                </CardText>
              </Card>
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
