import { Component } from 'react';

export default class EnsureLoggedIn extends Component {
  loggedIn() {
    console.log(window.id);
    return window.id;
  }

  // requireAuth(nextState, replace) {
  //   console.log('checking');
  //   if (!this.loggedIn()) {
  //     replace({
  //       pathname: '/login',
  //     });
  //   }
  // }

  render() {
    this.loggedIn();
  }
}
