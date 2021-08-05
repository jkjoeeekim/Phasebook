import React from 'react';
import { Redirect } from 'react-router-dom';

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
  }

  pwStateChange() {
    this.setState({
      reveal: !this.state.reveal
    });
  }

  render() {
    let state = this.state;
    if (this.props.errors.session) {
      return <Redirect to='/login' prevState={this.state} login={this.props.login} errors={this.props.errors} currentUser={this.props.currentUser} />;
    }
    return (
      <form id="signin-form" onSubmit={this.handleSubmit}>
        <label className="signin-form-label-email signin-labels">
          <input className="signin-inputs" id="signin-input-email" type="text" placeholder="Email" value={state.email} onChange={this.updateField('email')} />
        </label>
        <label className="signin-form-label-pw signin-labels">
          <input className="signin-inputs" id="signin-input-pw" type={state.reveal ? "text" : "password"} placeholder="Password" value={this.state.password} onChange={this.updateField('password')} />
          {
            state.password.length > 0 ?
              <div>
                <a id="signin-form-pw-input-revealed">
                  <div onClick={this.pwStateChange} id={state.reveal ? "pw-reveal" : "pw-hidden"}></div>
                </a>
              </div> : ""
          }
        </label>
        <input type="submit" value="Log In" className="signin-submit-button" />
        <button className="signin-demo-acc"><p onClick={this.demoLogin} className="signin-demo-acc-text">Demo Login</p></button>
        <button onClick={this.displaySignupForm} className="signin-display-create-button">Create New Account</button>
      </form>
    );
  }
}
