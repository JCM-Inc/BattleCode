import React, { Component } from 'react';
import axios from 'axios';

import { BarChart } from 'react-easy-chart';

const ReactDOM = require('react-dom');

export default class Rankings extends Component {
  constructor() {
    super();
    this.state = {
      RankingsList: [],
      WinnerListByID: [],
    };
  }
  componentDidMount() {
    axios.get('/games').then(({ data }) => {
      const winners = data.reduce((prev, cur) => prev.concat(cur.winner), []);
      const allWinners = winners.reduce((prev, cur) => {
        prev[cur] = prev[cur] + 1 || 1;
        return prev;
      }, {});
      const winnerCollection = [];
      for (const key in allWinners) {
        axios.get('/findUserById', {
          params: {
            _id: key,
          },
        }).then((data) => {
          if (allWinners.hasOwnProperty(key)) {
            winnerCollection.push({
              x: data.data.username.split('@')[0],
              y: allWinners[key],
            });
          }
        }).then(() => {
          this.state.WinnerListByID.sort((a, b) => b.wins - a.wins);
          this.setState({ WinnerListByID: winnerCollection.sort((a, b) => b.y - a.y) });
        });
      }
    });
  }

  render() {
    return (
      <div className="DashBoardHalf">
        <div className="ListTitle">
          <h1> Rankings </h1>
        </div>
        <ul className="DashBoardList">
          <BarChart
            colorBars
            axes
            axisLabels={{ x: 'Username', y: 'Wins' }}
            yAxisOrientLeft
            height={250}
            width={350}
            data={this.state.WinnerListByID}
          />
        </ul>
      </div>
    );
  }
}
