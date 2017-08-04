import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import parseToMocha from '../Competition/parseToMocha';

const PreviewTest = props => (
  <Paper className="Preview">
    <h2>Preview</h2>
    {parseToMocha(props.tests, props.name).split('\n').map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ))}
  </Paper>
);

PreviewTest.propTypes = {
  tests: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default PreviewTest;
