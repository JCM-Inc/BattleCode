import React from 'react';
import { Card, CardText, MuiThemeProvider, TextField, RaisedButton, LinearProgress } from 'material-ui';
import PropTypes from 'prop-types';

const LogForm = props => (
  <MuiThemeProvider>
    <InnerLogForm type={props.type} handler={props.handler} />
  </MuiThemeProvider >
);
LogForm.defaultProps = {
  type: 'Error',
  handler: (() => {}),
};
LogForm.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
};

class InnerLogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  Login() {
    if (this.state.submitted === false) {
      this.setState({
        submitted: true,
      });
      this.props.handler(this);
    }
  }

  render() {
    return (
      <Card>
        <CardText>
          <h1 style={{ textAlign: 'center' }}>{this.props.type}</h1>
          <TextField hintText="Username" type="text" fullWidth />
          <br />
          <TextField hintText="Password" type="password" fullWidth />
          <br />
          <RaisedButton label={this.props.type} fullWidth onClick={this.Login} />
          <LinearProgress mode="indeterminate" style={(this.state.submitted === true) ? { display: 'block' } : { display: 'none' }} />
        </CardText>
      </Card>
    );
  }
}

InnerLogForm.defaultProps = {
  type: 'Error',
  handler: (() => { }),
};
InnerLogForm.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
};

export default LogForm;
