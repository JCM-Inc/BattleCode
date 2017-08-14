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
  componentDidMount() {
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
        });
      });
    });
  }

  render() {
    console.log(this.state.RankingsList);
    this.setState({
      RankingsList: this.winner,
    });
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
