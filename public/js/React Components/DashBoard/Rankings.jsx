import React, { Component } from 'react';

export default class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      RankingsList: [['1: cain', 142], ['2: badkid89', 133]],
    };
  }
  render() {
    const RankingsList = this.state.RankingsList.map(e => (
      <li key={e[1]} className="RankList">
        <p>
          <b> {e[0].split(':')[0]}. </b>
          <span> {e[0].split(':')[1]} </span>
        </p>
      </li>
    ));
    return (
      <div className="DashBoardHalf">
        <div className="ListTitle">
          <h1> Rankings </h1>
        </div>
        <ul className="DashBoardList">
          {RankingsList}
        </ul>
      </div>
    );
  }
}
