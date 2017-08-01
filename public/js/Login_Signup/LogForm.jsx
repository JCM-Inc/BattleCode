import React from 'react';
import { Card, CardText, MuiThemeProvider, TextField, RaisedButton, LinearProgress } from 'material-ui';

const LogForm = (props) => (
  <MuiThemeProvider>
    <InnerLogForm type={props.type} handler={props.handler}/>
  </MuiThemeProvider >
);

class InnerLogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    }
  }

  Login() {
    console.log('logging in');
    if (this.state.submitted === false) {
      this.setState({
        submitted: true,
      });
      console.log('one time');
      this.props.handler(this);
    }
  }

  render() {
    return (
      <Card>
        <CardText>
          <h1 style={{ textAlign: "center" }}>{this.props.type}</h1>
          <TextField hintText="Username" type="text" fullWidth />
          <br/>
          <TextField hintText="Password" type="password" fullWidth />
          <br/>
          <RaisedButton label={this.props.type} fullWidth onClick={this.Login.bind(this)}/>
          <LinearProgress mode="indeterminate" style={(this.state.submitted === true) ? { display: 'block' } : { display: 'none' }}/>
        </CardText>
      </Card>
    );
  }
}

export default LogForm;
