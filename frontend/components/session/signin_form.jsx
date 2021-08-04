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
    this.pwStateChange = this.pwStateChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  updateField(field) {
    if (field === 'password') {
      let icon = document.getElementById("pw-hidden");
      if (icon) {
        if (this.state.password.length > 0) {
          document.getElementById("pw-hidden").classList.add("enabled");
        } else {
          document.getElementById("pw-hidden").classList.remove("enabled");
        }
      }
    };

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
  }

  pwStateChange(stateChange) {
    if (stateChange === 'reveal') {
      document.getElementById("pw-hidden").classList.remove("enabled");
      document.getElementById("pw-revealed").classList.add("enabled");
      document.getElementById("signin-input-pw-hidden").classList.add("disabled");
      document.getElementById("signin-input-pw-revealed").classList.add("enabled");
    } else if (stateChange === 'hide') {
      document.getElementById("pw-revealed").classList.remove("enabled");
      document.getElementById("pw-hidden").classList.add("enabled");
      document.getElementById("signin-input-pw-hidden").classList.remove("disabled");
      document.getElementById("signin-input-pw-revealed").classList.remove("enabled");
    }
  }

  render() {
    return (
      <form id="signin-form" onSubmit={this.handleSubmit}>
        <label className="signin-form-label-email signin-labels">
          <input className="signin-inputs" id="signin-input-email" type="text" placeholder="Email" value={this.state.email} onChange={this.updateField('email')} />
        </label>
        <label className="signin-form-label-pw signin-labels">
          <input className="signin-inputs" id="signin-input-pw-hidden" type="password" placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
          <input className="signin-inputs" id="signin-input-pw-revealed" type="text" placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
          <div>
            <a id="signin-form-pw-input-hidden">
              <div onClick={() => this.pwStateChange('reveal')} id="pw-hidden"></div>
            </a>
            <a id="signin-form-pw-input-revealed">
              <div onClick={() => this.pwStateChange('hide')} id="pw-revealed"></div>
            </a>
          </div>
        </label>
        <input type="submit" value="Log In" className="signin-submit-button" />
        <button className="signin-demo-acc"><p onClick={this.demoLogin} className="signin-demo-acc-text">Demo Login</p></button>
        <button onClick={this.displaySignupForm} className="signin-display-create-button">Create New Account</button>
      </form>
    );
  }
}
