import React from 'react';
import { Card, CardText, RaisedButton } from 'material-ui';
import Test from './Test';

class CompetitionDescriptor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CompetitionDescriptor">
        <h1>Title</h1>
        <p>Description</p>
        <Test />
      </div>
    );
  }
}

export default CompetitionDescriptor;
