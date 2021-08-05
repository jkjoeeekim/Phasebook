import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

export default class SigninPage extends React.Component {
  render() {
    return (
      <section id="login-page-section">
        <aside className="login-page-left-aside">
          <p className="login-page-title">fazebook</p>
        </aside>
        <div className="login-page-form">
          <LoginFormContainer />
        </div>
        <div id="signup-form-div">
          <SignupFormContainer />
        </div>
      </section>
    );
  }
}
