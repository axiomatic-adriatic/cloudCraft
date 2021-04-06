import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginApp from './login/loginApp.jsx';
import MainApp from './mainPage/mainApp';

ReactDOM.render(
  window.location.pathname === '/home/' ? <MainApp />
    : (
      <Auth0Provider
        domain="dev-u3lai6d6.us.auth0.com"
        clientId="EK0st6RmeWmL7pbxBjH8nIg9GhtV97AQ"
        redirectUri={window.location.origin}
      >
        <LoginApp />
      </Auth0Provider>
    ),
  document.getElementById('app'),
);
