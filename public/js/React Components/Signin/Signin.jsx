import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardText, MuiThemeProvider } from 'material-ui';
import Script from 'react-load-script';
import { GoogleLogin } from 'react-google-login-component';
import boat from '../../../../images/SSBattleCode.png';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoginLoaded: false,
      user: null,
    };
    this.responseGoogle = this.responseGoogle.bind(this);
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
        <Card>
          <div className="col-md-12 Signin">
            <Script url="https://apis.google.com/js/platform.js" />
            {this.state.userLoginLoaded ? <Redirect to="/dash" /> : <div />}
            <div id="boat">
              <img className="animated" src={boat} alt="battle boat" />
            </div>
            <h1 className="headers">BattleCode!</h1>
            <h3 className="headers">Compete against others to prove your coding skills!</h3>
            <CardText className="signin-buttons">
              <GoogleLogin
                socialId="500724803395-pma9je3unef7t0ugokspsjq3vq9olu7d.apps.googleusercontent.com"
                className="login-btn"
                scope="https://www.googleapis.com/auth/userinfo.email"
                responseHandler={this.responseGoogle}
                buttonText="Login With Google"
              />
            </CardText>
          </div>
        </Card>
      </MuiThemeProvider>
    );
  }
}
