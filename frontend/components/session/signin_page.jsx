import React from 'react';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';

export default class SigninPage extends React.Component {
  render() {
    return (
      <section id="signin-page-section">
        <aside className="signin-page-left-aside">
          <p className="signin-page-title">fazebook</p>
          <p className="signin-page-desc">Connect with friends and the world around you on Fazebook.</p>
        </aside>
        <div className="signin-page-form">
          <SigninFormContainer />
        </div>
        <div id="signup-form-div">
          <SignupFormContainer />
        </div>
        <div id="footer"></div>
      </section>
    );
  }
}
