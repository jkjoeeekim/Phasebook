import React from 'react';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    if (this.props.user) return;
    this.props.fetchUser(this.props.userId);
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          <input className="input-create-post" type="text" defaultValue={`What's on your mind, ${this.props.user.firstName}`} disabled></input>
          <button onClick={this.logoutUser}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
