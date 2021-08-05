import React from 'react';

export default class PostRightAside extends React.Component {
  render() {
    let friends = [];

    if (this.props.friends && Object.keys(this.props.users).length > 1) {
      this.props.friends.forEach((userId, idx) => {
        friends.push(<div key={idx} class_name="friends">{this.props.users[userId].firstName} {this.props.users[userId].lastName}</div>);
      });
    }

    return (
      <div>
        {friends}
      </div>
    );
  }
}
