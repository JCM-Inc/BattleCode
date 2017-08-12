import React, { Component } from 'react';

export default class Badges extends Component {
  constructor() {
    super();
    this.state = {
      BadgesList: [['one-liner master', 123], ['is cool', 332]],
    };
  }
  render() {
    const BadgesList = this.state.BadgesList.map(e => (
      <li key={e[1]}>
        <b> {e[0]} </b>
      </li>
    ));
    return (
      <div className="DashBoardHalf">
        <div className="ListTitle">
          <h1> Badges </h1>
        </div>
        <ul className="DashBoardList">
          {BadgesList}
        </ul>
      </div>
    );
  }
}
