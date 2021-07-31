import React from 'react';

export default class SigninForm extends React.Component {
  render() {
    return (
      <form id="signup-form">
        <label className="signup-form-label-email">
          <input type="text" placeholder="Email or Phone Number" />
        </label>
        <label className="signup-form-label-pw">
          <input type="password" placeholder="Password" />
        </label>
        <input type="submit" value="Sign Up" className="signup-form-button" />
      </form>
    );
  }
}
