import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';

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
    const { fontSize, mode, theme, userInput } = this.props;
    return (
      <CodeMirror
        options={{ lineNumbers: true, mode, theme: 'dracula' }}
        onChange={this.newUserInput}
        value={userInput}
      />
    );
  }
}

TextEditor.propTypes = {
  fontSize: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  userInput: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
};

export default TextEditor;

