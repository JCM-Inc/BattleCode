import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/javascript/javascript';

import 'codemirror/theme/ambiance.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/bespin.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/xq-dark.css';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.newUserInput = this.newUserInput.bind(this);
  }

  newUserInput(e) {
    this.props.updateState({
      userInput: e,
    });
  }

  render() {
    const { mode, theme, userInput } = this.props;
    return (
      <CodeMirror
        options={{ lineNumbers: true, mode, theme, tabSize: 2 }}
        onChange={this.newUserInput}
        value={userInput}
      />
    );
  }
}

TextEditor.propTypes = {
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default TextEditor;

