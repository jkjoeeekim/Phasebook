import React from 'react';
import { Link } from 'react-router-dom';

export default class PostNavBar extends React.Component {
  render() {
    return (
      <section id="navbar">
        <section className="user-profile-section">
          <Link id="user-profile" to="/">
            <img className="picture"></img>
            <p>{this.props.user.firstName}</p>
          </Link>
        </section>
        <button onClick={this.props.logout}>Log Out</button>
      </section>
    );
  }
}
