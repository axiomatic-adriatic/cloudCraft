import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MainApp from '../mainPage/mainApp.js';
import LogoutButton from './logoutButton.jsx';
import CloudIcon from '../../dist/images/cloudIcon.jpg';
import styles from './login.css';

const LoginApp = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {
        !isAuthenticated && (
          <div>
            <div id={styles.titleDiv}>
              <img id={styles.cloudIcon} src={CloudIcon} alt="Cloud" />
              <div id={styles.titleFont}>CloudCraft</div>
            </div>
            <div id={styles.loginButtonDiv}>
              <button type="button" id={styles.loginButton} onClick={() => loginWithRedirect()}>Log In</button>
            </div>
          </div>
        )
      }
      {
        isAuthenticated && (
          <div>
            <MainApp email={user.email} picture={user.picture} />
          </div>
        )
      }
    </div>
  );
};

export default LoginApp;

/*
class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id={styles.loginContainer}>
        <div id={styles.loginBox}>
          <div id={styles.signIn}>
            Sign in
          </div>
          <div id={styles.emailInputDiv}>
            <div id={styles.emailLabel}>
              Email
            </div>
            <br />
            <div id={styles.emailInput}>
              <input type="email" placeholder="example: dog@woof.com" required />
            </div>
          </div>
          <div id={styles.passwordInputDiv}>
            <div id={styles.passwordLabel}>
              Password
            </div>
            <input type="password" required />
          </div>
          <div id={styles.loginButtonDiv}>
            <button type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
*/
