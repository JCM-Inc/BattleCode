import React, { PropTypes } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';

import 'brace/theme/twilight';
import 'brace/theme/solarized_dark';
import 'brace/theme/github';

const TextEditor = ({ fontSize, mode, theme }) => (
  <AceEditor
    className="TextEditor"
    mode={mode}
    theme={theme}
    fontSize={fontSize}
  />
);

TextEditor.propTypes = {
  fontSize: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TextEditor;

