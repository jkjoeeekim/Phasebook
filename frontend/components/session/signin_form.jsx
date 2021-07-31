import React from 'react';

export default class SigninForm extends React.Component {
  displaySignupForm() {
    document.getElementById("signup-form").style.display = 'block'
  }
  
  render() {
    return (
      <form id="signin-form">
        <label className="signin-form-label-email">
          <input type="text" placeholder="Email or Phone Number" />
        </label>
        <label className="signin-form-label-pw">
          <input type="password" placeholder="Password" />
        </label>
        <input type="submit" value="Log In" className="signin-form-button" />
        <button>Demo Login</button>
        <button onClick={this.displaySignupForm}>Create New Account</button>
      </form>
    );
  }
}
