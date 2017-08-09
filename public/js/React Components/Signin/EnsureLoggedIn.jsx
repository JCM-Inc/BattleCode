import { Component } from 'react';


export default class EnsureLoggedIn extends Component {
  isLoggedIn() {
    // check to see if user is authenticated
  }
  redirectToLogin() {
    // redirect to login page
  }
  redirectToLink() {
    // redirect to desired path
  }
  render() {
    if (!this.isLoggedIn) {
      this.redirectToLogin();
    } else {
      this.redirectToLink();
    }
  }
}
