import React, { PropTypes } from 'react';
import { Card, CardText, MuiThemeProvider, LinearProgress, RaisedButton } from 'material-ui';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
    this.Login = this.Login.bind(this);
    this.Signout = this.Signout.bind(this);
  }

  Login() {
    if (this.state.submitted === false) {
      this.setState({
        submitted: true,
      });
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
      <MuiThemeProvider >
        <div>
          <Card>
            <CardText>
              <h1 style={{ textAlign: 'center' }}>{this.props.type}</h1>
              <a
                className="g-signin2"
                data-onsuccess="onSignIn"
                data-theme="white"
                label="Google Signin"
              />
              <br />
              <RaisedButton onClick={this.Signout} label="Sign out" />
              <LinearProgress mode="indeterminate" style={(this.state.submitted === true) ? { display: 'block' } : { display: 'none' }} />
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

Signin.defaultProps = {
  type: 'Login',
  handler: (() => { }),
};
Signin.propTypes = {
  type: PropTypes.string,
};

export default Signin;
