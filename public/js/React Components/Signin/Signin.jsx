import React, { Component } from 'react';
import { Card, CardText, MuiThemeProvider, RaisedButton, Redirect } from 'material-ui';
import Script from 'react-load-script';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.Signout = this.Signout.bind(this);
  }

  Signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      window.isLoggedIn = false;
      console.log('User signed out');
    });
  }

  render() {
    console.log(window.isLoggedIn, 'cain sux');
    return (
      <MuiThemeProvider >
        <div>
          <Script url="https://apis.google.com/js/platform.js" />
          <Card>
            <CardText>
              <h1 style={{ textAlign: 'center' }}>Sign In</h1>
              <a
                className="g-signin2"
                data-onsuccess="onSignIn"
                data-theme="white"
                data-redirecturi="http://localhost:5000/#/dash"
              >
              Google Sign In
              </a>
              <br />
              <RaisedButton onClick={this.Signout} label="Sign out" />
            </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
