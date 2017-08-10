import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardText, MuiThemeProvider, RaisedButton } from 'material-ui';
import Script from 'react-load-script';
import { GoogleLogin } from 'react-google-login-component';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginLoaded: false,
    };
    this.Signout = this.Signout.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  Signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      window.isLoggedIn = false;
      console.log('User signed out');
    });
  }

  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    const profile = googleUser.getBasicProfile();
    const userEmail = profile.getEmail();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/signin', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      window.isLoggedIn = true;
      this.setState({
        userLoginLoaded: true,
      });
    };
    xhr.send(`idtoken=${idToken}`);
  }
  render() {
    return (
      <MuiThemeProvider >
        <div>
          <Script url="https://apis.google.com/js/platform.js" />
          <Card>
            {this.state.userLoginLoaded ? <Redirect to="/dash" /> : <div />}
            <CardText>
              <h1 style={{ textAlign: 'center' }}>Sign In</h1>
              <GoogleLogin
                socialId="106454631553-mles8i7ktt96qbvps7uoh2k9idop90e0.apps.googleusercontent.com"
                className="google-login"
                scope="profile"
                responseHandler={this.responseGoogle}
                buttonText="Login With Google"
              />
              <br />
              <RaisedButton onClick={this.Signout} label="Sign out" />
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
