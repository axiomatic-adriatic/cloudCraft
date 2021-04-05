import React from 'react';
import styles from './login.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginApp = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
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