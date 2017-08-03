import React, { Component } from 'react';

export default class Badges extends Component {
  constructor() {
    super();
    this.state = {
      BadgesList: [['one-liner master', 123], ['did it once', 332]],
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
        <h4> Badges </h4>
        <hr />
        <ul className="DashBoardList">
          {BadgesList}
        </ul>
      </div>
    );
  }
}
