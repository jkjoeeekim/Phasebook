import React from 'react';

export default class UserProfilePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi profile page for user{this.props.match.params.id}</h1>
      </div>
    );
  }
}
