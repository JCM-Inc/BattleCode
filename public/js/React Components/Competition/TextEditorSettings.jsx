import React, { PropTypes, Component } from 'react';
import { Menu, MenuItem, Popover, FontIcon, TextField } from 'material-ui';

export default class TextEditorSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
  }


  handleTouchTap(event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  changeFontSize(e) {
    if (e.key === 'Enter') {
      this.props.updateState({ fontSize: Number(e.target.value) });
    }
  }

  render() {
    const { open, anchorEl } = this.state;
    const { fontSize } = this.props;
    return (
      <div>
        <FontIcon className={'material-icons icons iconsRight'} onTouchTap={this.handleTouchTap}>settings</FontIcon>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="">
              <TextField
                defaultValue={fontSize}
                floatingLabelText="Font Size"
                floatingLabelFixed
                rowsMax={1}
                style={{ width: 50 }}
                onKeyPress={this.changeFontSize}
                floatingLabelStyle={{ color: '#FF6F00' }}
                underlineFocusStyle={{ borderColor: '#FF6F00' }}
              />
            </MenuItem>
          </Menu>
        </Popover >
      </div>
    );
  }
}

TextEditorSettings.propTypes = {
  fontSize: PropTypes.number.isRequired,
  updateState: PropTypes.func.isRequired,
};
