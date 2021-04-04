import React from 'react';
import ReactDOM from 'react-dom';
// import LoginApp from './login/loginApp';
import MainApp from './mainPage/mainApp';

ReactDOM.render(window.location.pathname === '/home/' ? <MainApp /> : <LoginApp />, document.getElementById('app'));
