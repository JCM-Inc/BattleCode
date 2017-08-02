import React from 'react';

class Rankings extends React.Component {
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
        <h4> Rankings </h4>
        <hr />
        <ul className="DashBoardList">
          {RankingsList}
        </ul>
      </div>
    );
  }
}

export default Rankings;
