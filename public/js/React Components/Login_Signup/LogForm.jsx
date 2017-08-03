import React from 'react';
import { Card, CardText, MuiThemeProvider, TextField, RaisedButton, LinearProgress } from 'material-ui';
import PropTypes from 'prop-types';
import Script from 'react-load-script';

const LogForm = props => (
  <MuiThemeProvider>
    <InnerLogForm type={props.type} handler={props.handler} />
  </MuiThemeProvider >
);
LogForm.defaultProps = {
  type: 'Error',
  handler: (() => {}),
};
LogForm.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
};

class InnerLogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
    this.Login = this.Login.bind(this);
  }

  Login() {
    if (this.state.submitted === false) {
      this.setState({
        submitted: true,
      });
      this.props.handler(this);
    }
  }

  Signout() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  }

  render() {
    return (
      <div>
        <Script
          url="https://apis.google.com/js/platform.js"
        />
        <Card>
          <CardText>
            <h1 style={{ textAlign: 'center' }}>{this.props.type}</h1>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
            <button href="#" onClick={this.Signout}>Sign out</button>
            <LinearProgress mode="indeterminate" style={(this.state.submitted === true) ? { display: 'block' } : { display: 'none' }} />
          </CardText>
        </Card>
      </div>
    );
  }
}

InnerLogForm.defaultProps = {
  type: 'Error',
  handler: (() => { }),
};
InnerLogForm.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
};

export default LogForm;
