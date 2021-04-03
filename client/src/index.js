import React from 'react';
import ReactDOM from 'react-dom';
import LoginApp from './login/loginApp.jsx';
import MainApp from './mainPage/mainApp.js';

ReactDOM.render(window.location.pathname === '/home/' ? <MainApp /> : <LoginApp />, document.getElementById('app'))