import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, RaisedButton } from 'material-ui';

class InnerDash extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Card>
        <RaisedButton label="Go To Challenge" />
        <RaisedButton label="Create A Challenge" />
      </Card>
    );
  }
}

export default InnerDash;