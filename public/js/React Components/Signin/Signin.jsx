import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AppBar, Card, CardText, MuiThemeProvider } from 'material-ui';
import Script from 'react-load-script';
import { GoogleLogin } from 'react-google-login-component';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginLoaded: false,
      user: null,
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
    console.log({ accessToken: idToken, email: userEmail });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/signin', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
      window.isLoggedIn = true;
      window.user = userEmail;
      this.setState({
        userLoginLoaded: true,
        user: userEmail,
      });
    };
    xhr.send(`idtoken=${idToken}`);
  }
  render() {
    return (
      <MuiThemeProvider >
        <div className="Signin">
          <Script url="https://apis.google.com/js/platform.js" />
          {this.state.userLoginLoaded ? <Redirect to="/dash" /> : <div />}
          <Card>
            <AppBar showMenuIconButton={false} title="BattleCode!" style={{ backgroundColor: '#FF6F00' }} />
            <CardText className="signin-buttons">
              <GoogleLogin
                socialId="106454631553-mles8i7ktt96qbvps7uoh2k9idop90e0.apps.googleusercontent.com"
                className="login-btn"
                scope="profile"
                responseHandler={this.responseGoogle}
                buttonText="Login With Google"
              />
              <br />
              <button className="login-btn" onClick={this.Signout}>Sign Out</button>
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
