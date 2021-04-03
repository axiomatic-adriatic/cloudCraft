import React from 'react';
import ReactDOM from 'react-dom';
import LoginApp from './login/loginApp.js';
import MainApp from './mainPage/mainApp.js';

ReactDOM.render(window.location.pathname === '/home/' ? <MainApp /> : <LoginApp />, document.getElementById('app')) 