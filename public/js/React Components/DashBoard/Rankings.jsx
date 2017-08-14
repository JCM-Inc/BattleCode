import React, { Component } from 'react';
import axios from 'axios';

export default class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      RankingsList: [],
    };
    // [['1: cain', 142], ['2: badkid89', 133]]
  }
  componentWillMount() {
    let count = 0;
    this.winners = [];
    axios.get('/games').then((res) => {
      res.data.forEach((game) => {
        axios.get('/findUserById', {
          params: {
            _id: game.winner,
          },
        }).then((gameWinner) => {
          this.winners.push(`${count += 1}: ${gameWinner.data}`);
          this.setState({
            RankingsList: this.winners,
          });
        });
      });
    });
  }

  render() {
    const RankingsList = this.state.RankingsList.map(e => (
      <li key={e.slice(0, e.indexOf(':'))} className="RankList">
        <p>
          <b> {e.slice(0, e.indexOf(':'))}. </b>
          <span> {e.slice(e.indexOf(':'), e.indexOf('@'))} </span>
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
