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
      <li key={e[1]}>
        <b> {e[0].split(':')[0]} </b>
        <h5> {e[0].split(':')[1]} </h5>
      </li>
    ));
    return (
      <div className="fifty">
        <h4> Rankings </h4>
        <hr />
        <ul>
          {RankingsList}
        </ul>
      </div>
    );
  }
}

export default Rankings;
