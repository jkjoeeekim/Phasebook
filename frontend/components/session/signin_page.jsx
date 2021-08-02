import React from 'react';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';

export default class SigninPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className="landing-page-title">phasebook</p>
          <p>Connect with friends and the world around you on Phasebook.</p>
        </div>
        <div>
          <SigninFormContainer />
        </div>
        <div>
          <SignupFormContainer />
        </div>
      </div>
    );
  }
}
