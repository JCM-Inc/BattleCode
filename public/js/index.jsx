import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App'

injectTapEventPlugin();

// ReactDom.render(<DashBoard />, document.getElementById('root'));
ReactDom.render(<App />, document.getElementById('root'));
// ReactDom.render(<LogForm type="Login" handler={loginHandler} />, document.getElementById('root'));

