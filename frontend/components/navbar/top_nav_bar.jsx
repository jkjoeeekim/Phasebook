import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import fazebook from '../../../app/assets/images/fazebook.png';

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    if (!this.props.user) return;
    if (this.props.user.pictureUrl) {
      document.getElementById("nav-bar-picture").style.content = `url(${this.props.user.pictureUrl})`;
    }
  }

  logoutUser() {
    this.props.logout();
    window.location.reload();
    return (
      <Redirect to="/" />
    );
  }

  render() {
    if (!this.props.user) return null;

    return (
      <section id="navbar">
        <section className="navbar-icon-section">
          <Link to="/" id="navbar-icon-button">
            <img src={fazebook} id="navbar-icon"></img>
            <p id="navbar-icon-title">fazebook</p>
          </Link>
        </section>
        <section className="user-profile-section">
          <Link id="user-profile" to={`/${this.props.user.id}`}>
            <img id="nav-bar-picture"></img>
            <p>{this.props.user.firstName}</p>
          </Link>
          <button onClick={this.props.logout}>Log Out</button>
        </section>
      </section>
    );
  }
}
