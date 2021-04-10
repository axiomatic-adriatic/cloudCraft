import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginApp from './login/loginApp.jsx';
import MainApp from './mainPage/mainApp';

ReactDOM.render(
  window.location.pathname === '/home/' ? <MainApp />
    : (
      <Auth0Provider
        domain=""
        clientId=""
        redirectUri={window.location.origin}
      >
        <LoginApp />
      </Auth0Provider>
    ),
  document.getElementById('app'),
);