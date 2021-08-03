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

    this.state = {
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
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state, { birthday: `${this.state.birthYear}/${this.allMonths.indexOf(this.state.birthMonth) + 1}/${this.state.birthDate}` });
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthMonth: this.currentDate.month,
      birthDate: this.currentDate.day,
      birthYear: this.currentDate.year,
      gender: '',
    });
    this.props.createNewUser(user);
  }

  updateField(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }); };
  }

  render() {
    return (
      <form id="signup-form" className="sf" onSubmit={this.handleSubmit}>
        <section className="signup-form-section-top">
          <p className="signup-form-section-top-title">Sign Up</p>
          <p className="signup-form-section-top-desc">It's quick and easy.</p>
        </section>
        <section>
          <section className="sf-label-fullname">
            <label className="sf-label-firstname">
              <input className="sf-input-firstname" type="text" placeholder="First name" value={this.state.first_name} onChange={this.updateField('first_name')} />
            </label>
            <label className="sf-label-lastname">
              <input className="sf-input-lastname" type="text" placeholder="Last name" value={this.state.last_name} onChange={this.updateField('last_name')} />
            </label>
          </section>
          <label className="sf-label-email">
            <input type="text" placeholder="Email" value={this.state.email} onChange={this.updateField('email')} />
          </label>
          <label className="sf-label-pw">
            <input type="password" placeholder="New password" value={this.state.password} onChange={this.updateField('password')} />
          </label>
        </section>
        <section id="sf-section-birthdate">
          <p>Birthday</p>
          <label className="sf-label-bday-month">
            <select defaultValue={this.state.birthMonth} onChange={this.updateField('birthMonth')}>
              {this.months}
            </select>
          </label>
          <label className="sf-label-bday-day">
            <select defaultValue={this.state.birthDate} onChange={this.updateField('birthDate')}>
              {this.days}
            </select>
          </label>
          <label className="sf-label-bday-year">
            <select defaultValue={this.state.birthYear} onChange={this.updateField('birthYear')}>
              {this.years}
            </select>
          </label>
        </section>
        <section id="sf-section-gender">
          <p>Gender</p>
          <label>Male
            <input type="radio" name="gender" value="male" onChange={this.updateField('gender')} />
          </label>
          <label>Female
            <input type="radio" name="gender" value="female" onChange={this.updateField('gender')} />
          </label>
          <label>Custom
            <input type="radio" name="gender" value="other" onChange={this.updateField('gender')} />
          </label>
        </section>
        <section>
          <p>DISCLAIMER: This is a TEST website, please do NOT use sensitive information.</p>
        </section>
        <input type="submit" value="Sign Up" className="sf-button" />
      </form>
    );
  }
}
