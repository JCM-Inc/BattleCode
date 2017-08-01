import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DashBoard from './DashBoard/Dash';
import Login from './Login_Signup/Login';

injectTapEventPlugin();

ReactDom.render(<Login />, document.getElementById('root'));
