import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class PostNavBar extends React.Component {
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
    return (
      <Redirect to="/" />
    );
  }

  render() {
    return (
      <section id="navbar">
        <section className="user-profile-section">
          <Link id="user-profile" to="/">
            <img id="nav-bar-picture"></img>
            <p>{this.props.user.firstName}</p>
          </Link>
        </section>
        <button onClick={this.props.logout}>Log Out</button>
      </section>
    );
  }
}
