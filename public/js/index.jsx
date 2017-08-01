import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DashBoard from './DashBoard/Dash';

injectTapEventPlugin();

ReactDom.render(<DashBoard />, document.getElementById('root'));
