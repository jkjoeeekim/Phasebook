import React from 'react';

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.allMonths = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    // setup a new Date object and get current date
    this.date = new Date();
    let dateidx = this.date.getMonth();
    this.currentDate = {
      month: this.allMonths[dateidx],
      day: this.date.getDate(),
      year: this.date.getFullYear(),
    };

    this.state = this.props.state ?
      this.props.state : {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthMonth: this.currentDate.month,
        birthDate: this.currentDate.day,
        birthYear: this.currentDate.year,
        gender: '',
      };

    // Map over the array of allMonths, returning <select> elements
    this.months = this.allMonths.map((month, idx) => {
      return (
        <option key={idx} value={month}>{month}</option>
      );
    });

    // Create an array of days, then map over them returning <select> elements
    this.days = [];
    for (let i = 1; i < 32; i++) {
      this.days.push(i);
    }
    this.days = this.days.map((day, idx) => {
      return (
        <option key={idx} value={day}>{day}</option>
      );
    });

    // Create an array of years, then map over them returning <select> elements
    this.years = [];
    for (let i = 1905; i < 2022; i++) {
      this.years.push(i);
    }
    this.years = this.years.map((year, idx) => {
      return (
        <option key={idx} value={year}>{year}</option>
      );
    });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.exitSignupForm = this.exitSignupForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('user[first_name]', this.state.first_name)
    // formData.append('user[last_name]', this.state.last_name)
    // formData.append('user[email]', this.state.email.toLowerCase())
    // formData.append('user[password]', this.state.password)
    // formData.append('user[birthday]', `${this.state.birthYear}/${this.allMonths.indexOf(this.state.birthMonth) + 1}/${this.state.birthDate}`)
    // formData.append('user[gender]', this.state.gender)
    let state = this.state;
    this.props.createNewUser({
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      password: state.password,
      birthday: `${this.state.birthYear}/${this.allMonths.indexOf(this.state.birthMonth) + 1}/${this.state.birthDate}`,
      gender: state.gender,
    });
  }

  updateField(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }); };
  }

  exitSignupForm() {
    document.getElementById("signup-form-div").classList.remove('enabled');
    document.getElementById("signup-form").classList.remove('enabled');
  }

  componentWillUnmount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
  }

  render() {
    let errors = {};
    if (this.props.errors) {
      if (this.props.errors.user) {
        if (this.props.errors.user.includes('Email has already been taken')) {
          errors.email_error = true;
        }
        if (this.props.errors.user.includes('Password is too short (minimum is 6 characters)')) {
          errors.password = true;
        }
        let keys = Object.keys(this.state);
        keys.forEach((key) => {
          if (this.state[key].length === 0) {
            errors[key] = true;
          }
        });
      }
    } else {
      errors = "";
    }

    return (
      <form id="signup-form" className="sf" onSubmit={this.handleSubmit}>
        <section className="signup-form-section-top">
          <p className="signup-form-section-top-title">Sign Up</p>
          <p className="signup-form-section-top-desc">It's quick and easy.</p>
          <a id="signup-form-exit">
            <div onClick={this.exitSignupForm} id="x"></div>
          </a>
        </section>
        <section>
          <section className="sf-label-fullname">
            <label className="sf-labels sf-label-firstname">
              <input id={errors.first_name ? "signup-inputs-errored" : ""} className="sf-input-firstname" type="text" placeholder="First name" value={this.state.first_name} onChange={this.updateField('first_name')} />
            </label>
            <p id={errors.first_name ? "enabled" : ""} className="sf-form-errors sf-form-error-fname">What is your name?</p>
            <label className="sf-labels sf-label-lastname">
              <input id={errors.last_name ? "signup-inputs-errored" : ""} className="sf-input-lastname" type="text" placeholder="Last name" value={this.state.last_name} onChange={this.updateField('last_name')} />
            </label>
            <p id={errors.last_name ? "enabled" : ""} className="sf-form-errors sf-form-error-lname">What is your name?</p>
          </section>
          <label className="sf-labels sf-label-email">
            <input id={errors.email ? "signup-inputs-errored" : ""} className="sf-input-email" type="text" placeholder="Email" value={this.state.email} onChange={this.updateField('email')} />
          </label>
          <p id={errors.email ? "enabled" : ""} className="sf-form-errors sf-form-error-email">What is your email?</p>
          <p id={errors.email_error ? "enabled" : ""} className="sf-form-errors sf-form-error-email2">Email has already been registered.</p>
          <label className="sf-labels sf-label-pw">
            <input id={errors.password ? "signup-inputs-errored" : ""} className="sf-input-pw" type="password" placeholder="New password" value={this.state.password} onChange={this.updateField('password')} />
          </label>
          <p id={errors.password ? "enabled" : ""} className="sf-form-errors sf-form-error-pw">Enter a valid password (minimum 6 characters).</p>
        </section>
        <section id="sf-section-birthdate">
          <p className="sf-birthdate-title">Birthday</p>
          <section id="sf-section-birthdate-selections">
            <label className="sf-labels sf-label-bday-month">
              <select id={errors.birthday ? "signup-inputs-errored" : ""} className="sf-select-bday-month sf-selects" defaultValue={this.state.birthMonth} onChange={this.updateField('birthMonth')}>
                {this.months}
              </select>
            </label>
            <p id={errors.birthday ? "enabled" : ""} className="sf-form-errors sf-form-error-bday">What is your birthday?</p>
            <label className="sf-label-bday-day">
              <select id={errors.birthday ? "signup-inputs-errored" : ""} className="sf-select-bday-day sf-selects" defaultValue={this.state.birthDate} onChange={this.updateField('birthDate')}>
                {this.days}
              </select>
            </label>
            <label className="sf-label-bday-year">
              <select id={errors.birthday ? "signup-inputs-errored" : ""} className="sf-select-bday-year sf-selects" defaultValue={this.state.birthYear} onChange={this.updateField('birthYear')}>
                {this.years}
              </select>
            </label>
          </section>
        </section>
        <section id="sf-section-gender">
          <p className="sf-gender-title">Gender</p>
          <section id="sf-section-gender-selections">
            <label id={errors.gender ? "signup-inputs-errored" : ""} className="sf-labels sf-label-gender-female sf-gender-labels">
              <p className="sf-label-gender-titles">Female</p>
              <input className="sf-input-gender-female sf-input-genders" type="radio" name="gender" value="female" onChange={this.updateField('gender')} />
            </label>
            <p id={errors.gender ? "enabled" : ""} className="sf-form-errors sf-form-error-gender">What is your gender?</p>
            <label id={errors.gender ? "signup-inputs-errored" : ""} className="sf-label-gender-male sf-gender-labels">
              <p className="sf-label-gender-titles">Male</p>
              <input className="sf-input-gender-male sf-input-genders" type="radio" name="gender" value="male" onChange={this.updateField('gender')} />
            </label>
            <label id={errors.gender ? "signup-inputs-errored" : ""} className="sf-label-gender-custom sf-gender-labels">
              <p className="sf-label-gender-titles">Custom</p>
              <input className="sf-input-gender-custom sf-input-genders" type="radio" name="gender" value="other" onChange={this.updateField('gender')} />
            </label>
          </section>
        </section>
        <section id="sf-section-disclaimer">
          <p className="sf-section-disclaimer-title">DISCLAIMER: </p>
          <p className="sf-section-disclaimer-desc">This is a MOCK website, do NOT use sensitive information.</p>
        </section>
        <div id="sf-submit-button-container">
          <input type="submit" value="Sign Up" className="sf-button" />
        </div>
      </form>
    );
  }
}
