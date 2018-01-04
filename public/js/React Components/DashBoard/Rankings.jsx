import React, { Component } from 'react';
import axios from 'axios';

export default class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      RankingsList: [],
      WinnerListByID: [],
    };
  }
  componentWillMount() {
    axios.get('/games').then(({ data }) => {
      const winners = data.reduce((prev, cur) => prev.concat(cur.winner), []);
      const allWinners = winners.reduce((prev, cur) => {
        prev[cur] = prev[cur] + 1 || 1;
        return prev;
      }, {});
      var winnerCollection = [];
      for (var key in allWinners) {
        if (allWinners.hasOwnProperty(key)) {
          winnerCollection.push({
            userId: key,
            wins: allWinners[key]
          });
        }
      }
      const wins = winnerCollection.map(function (user) {
        return user.wins
      });
      this.setState({ WinnerListByID: winnerCollection });
      const winnersByName = [];
      Object.entries(allWinners).map(winner =>
        axios.get('/findUserById', {
          params: {
            _id: winner[0],
          },
        }).then(({ data: user }) => {
          const pureWinner = winner.slice();
          pureWinner[2] = user.username.split('@')[0];
          winnersByName.push(pureWinner);
          this.setState({ RankingsList: winnersByName.sort((a, b) => b[1] - a[1]) });
        }),
      );
    });
  }

  render() {
    const RankingsList = this.state.RankingsList.map((e, i) => (
      <li key={e[0]} className="RankList">
        <p>
          <b> {i + 1}. </b>
          <span> {e[2]} Wins: {e[1]}</span>
        </p>
      </li>
    ));
    const rankList = this.state.WinnerListByID.map((user, index) => (
      <li key={user.userId} className="RankGraph">
        <p>
          <b> {index + 1}. </b>
          <span> {user.userId} Wins: {user.wins}</span>
        </p>
      </li>
    ));
    return (
      <div className="DashBoardHalf">
        <div className="ListTitle">
          <h1> Rankings </h1>
        </div>
        <ul className="DashBoardList">
          <div className="chart">
            {rankList}
          </div>
          {RankingsList}
        </ul>
      </div>
    );
  }
}
