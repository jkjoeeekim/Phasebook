import React from 'react';

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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
    document.getElementById("signup-form-div").style.display = 'block';
    document.getElementById("signup-form").style.display = 'block';
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({
      email: 'Joe@Kim.com',
      password: '111111'
    });
  }

  render() {
    return (
      <form id="signin-form" onSubmit={this.handleSubmit}>
        <label className="signin-form-label-email signin-labels">
          <input className="signin-inputs" type="text" placeholder="Email" value={this.state.email} onChange={this.updateField('email')} />
        </label>
        <label className="signin-form-label-pw signin-labels">
          <input className="signin-inputs" type="password" placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
        </label>
        <input type="submit" value="Log In" className="signin-submit-button" />
        <button className="signin-demo-acc"><p onClick={this.demoLogin} className="signin-demo-acc-text">Demo Login</p></button>
        <button onClick={this.displaySignupForm} className="signin-display-create-button">Create New Account</button>
      </form>
    );
  }
}
