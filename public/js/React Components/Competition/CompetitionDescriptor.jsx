import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';
import Test from './Test';

const CompetitionDescriptor = (props) => {
  const { desc, name, test, userInput } = props;
  return (
    <div className="CompetitionDescriptor">
      <div className="TopDescription">
        <Card className="Description">
          <CardText>
            <h1>{name}</h1>
            <p>{desc}</p>
          </CardText>
        </Card>
      </div>
      <Test
        test={test}
        userInput={userInput}
      />
    </div>
  );
};

CompetitionDescriptor.propTypes = {
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
};

export default CompetitionDescriptor;
