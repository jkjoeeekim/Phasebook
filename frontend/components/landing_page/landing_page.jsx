import React from 'react';
import SigninForm from '../session/signin_form';
import SignupForm from '../session/signup_form';

export default class LandingPage extends React.Component {
  render() {
    const forms = this.props.currentUser ? (
      null
    ) : (
      <div>
        <SigninForm login={this.props.login} />
        <SignupForm />
      </div>
    );

    return (
      <div>
        <div>
          <p className="landing-page-title">phasebook</p>
          <p>Connect with friends and the world around you on Phasebook.</p>
        </div>
        {forms}
      </div>
    );
  }
}
