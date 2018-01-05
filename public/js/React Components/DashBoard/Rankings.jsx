import React, { Component } from 'react';
import axios from 'axios';

import { BarChart } from 'react-easy-chart';

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
              x: data.data.username.split('@')[0].slice(0, 8),
              y: allWinners[key],
            });
          }
        }).then(() => {
          this.setState({ WinnerListByID: winnerCollection.sort((a, b) => b.y - a.y) });
        });
      }
    });
  }

  render() {
    return (
      <div className="DashBoardHalf">
        <div className="ListTitle">
          <h1> LeaderBoard </h1>
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'center', paddingLeft: '20px' }}>
          {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a bar to show the wins'}
        </div>
        <div style={{ display: 'inline-block' }}>
          <BarChart
            axes
            axisLabels={{ x: 'Conquered Battles', y: 'Pirate Name' }}
            colorBars
            yAxisOrientLeft
            height={250}
            width={500}
            data={this.state.WinnerListByID}
            clickHandler={d => this.setState({ dataDisplay: `The number of wins for ${d.x} is ${d.y}` })}
          />
        </div>
      </div>
    );
  }
}
