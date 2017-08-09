import React, { Component } from 'react';
import { Card, CardText, MuiThemeProvider, RaisedButton } from 'material-ui';
import Script from 'react-load-script';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.Signout = this.Signout.bind(this);
  }

  Signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log('hi');
    window.isLoggedIn = false;
    });
  }

  render() {
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
