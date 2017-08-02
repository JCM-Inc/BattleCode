import React from 'react';
import { Card, CardText, MuiThemeProvider, TextField, RaisedButton } from 'material-ui';

class CompetitionDescriptor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CompetitionDescriptor">
        <h1>Title</h1>
        <p>Description</p>
      </div>
    );
  }
}

export default CompetitionDescriptor;
