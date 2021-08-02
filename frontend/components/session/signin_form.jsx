import React from 'react';

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  updateField(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }); };
  }

  displaySignupForm(e) {
    e.preventDefault();
    document.getElementById("signup-form").style.display = 'block';
  }

  render() {
    return (
      <form id="signin-form" onSubmit={this.handleSubmit}>
        <label className="signin-form-label-email">
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.updateField('email')} />
        </label>
        <label className="signin-form-label-pw">
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
        </label>
        <input type="submit" value="Log In" className="signin-form-button" />
        <button>Demo Login</button>
        <button onClick={this.displaySignupForm}>Create New Account</button>
      </form>
    );
  }
}
