import React from 'react';
import TopNavBar from '../navbar/top_nav_bar';

export default class UserProfilePage extends React.Component {
  render() {
    return (
      <div>
        <TopNavBar user={this.props.currentUser} logout={this.props.logout} />
        <p id="user-profile-title">Profile page for {this.props.currentUser.firstName}</p>
      </div>
    );
  }
}
