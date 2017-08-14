import React, { Component } from 'react';
import axios from 'axios';

export default class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      RankingsList: [],
    };
  }
  componentWillMount() {
    this.winners = [];
    axios.get('/games').then((res) => {
      res.data.forEach((game) => {
        axios.get('/findUserById', {
          params: {
            _id: game.winner,
          },
        }).then((gameWinner) => {
          if (this.winners.length === 0) {
            this.winners.push({ wins: 1, user: gameWinner.data });
          } else {
            this.winners.forEach((win) => {
              if (win.user === gameWinner.data) {
                win.wins += 1;
              } else {
                this.winners.push({ wins: 1, user: gameWinner.data });
              }
              this.winners.sort((a, b) => b.wins - a.wins);
            });
          }
          this.setState({
            RankingsList: this.winners,
          });
        });
      });
    });
  }

  render() {
    const RankingsList = this.state.RankingsList.map((e, i) => (
      <li key={e.user} className="RankList">
        <p>
          <b />
          <span> {e.user.slice(0, e.user.indexOf('@'))} Wins: {e.wins}</span>
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
