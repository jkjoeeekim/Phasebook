import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    let prevState = this.props.prevState ? this.props.prevState : {
      email: '',
      password: '',
    };
    this.state = Object.assign({}, prevState, { reveal: false });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.pwStateChange = this.pwStateChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email.toLowerCase(),
      password: this.state.password
    });
  }

  updateField(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }); };
  }

  displaySignupForm(e) {
    e.preventDefault();
    document.getElementById("signup-form-div").classList.add('enabled');
    document.getElementById("signup-form").classList.add('enabled');
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({
      email: 'Joe@Kim.com',
      password: '111111'
    });
    <Redirect to='/' />;
  }

  pwStateChange() {
    this.setState({
      reveal: !this.state.reveal
    });
  }

  render() {
    let state = this.state;
    let errors;
    if (this.props.errors.errors) {
      errors = this.props.errors.errors.session.map((error, idx) => (<li key={idx} className="login-form-errors">{error}</li>));
    } else {
      errors = "";
    }

    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <label className="login-form-label-email login-labels">
          <input className={this.props.errors.errors ? "login-inputs-errored" : "login-inputs"} id="login-input-email" type="text" placeholder="Email" value={state.email} onChange={this.updateField('email')} />
        </label>
        <ul>
          {errors}
        </ul>
        <label className="login-form-label-pw login-labels">
          <input className={this.props.errors.errors ? "login-inputs-errored" : "login-inputs"} id="login-input-pw" type={state.reveal ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
          {
            state.password.length > 0 ?
              <div>
                <a id="login-form-pw-input-revealed">
                  <div onClick={this.pwStateChange} id={state.reveal ? "pw-reveal" : "pw-hidden"}></div>
                </a>
              </div> : ""
          }
        </label>
        <input type="submit" value="Log In" className="login-submit-button" />
        <button className="login-demo-acc"><p onClick={this.demoLogin} className="login-demo-acc-text">Demo Login</p></button>
        <button onClick={this.displaySignupForm} className="login-display-create-button">Create New Account</button>
      </form>
    );
  }
}
