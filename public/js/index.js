import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dash from './DashBoard/DashBoard.jsx';

injectTapEventPlugin();

ReactDom.render(<Dash />, document.getElementById('root'));
