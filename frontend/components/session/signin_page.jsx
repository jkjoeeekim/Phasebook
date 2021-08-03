import React from 'react';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';

export default class SigninPage extends React.Component {
  render() {
    return (
      <section id="login-section">
        <aside className="login-left-aside">
          <p className="login-page-title">fazebook</p>
          <p className="login-page-desc">Connect with friends and the world around you on Fazebook.</p>
        </aside>
        <div className="login-form">
          <SigninFormContainer />
        </div>
        <div id="signup-form-div">
          <SignupFormContainer />
        </div>
      </section>
    );
  }
}
