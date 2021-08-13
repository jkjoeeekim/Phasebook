import React from 'react';
import TopNavBarContainer from '../navbar/top_nav_bar_container';
import { Link } from 'react-router-dom';

export default class UserSearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: false,
      requested: false,
    };

    this.handleFriendRequest = this.handleFriendRequest.bind(this);
  }

  handleFriendRequest(userId, status) {
    if (status === 'Add Friend') {
      this.props.requestFriendship({
        user_id: this.props.user.id,
        friend_id: userId,
        active: false
      });
      this.setState({ requested: true });
    } else if (status === 'Friends') {
    } else if (status === 'Request Sent') {
    } else if (status === 'Awaiting Response...') {
      this.props.history.push(`/${userId}`);
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.requestFriendships(this.props.user.id);
    if (!this.state.searched && !!this.props.prevSearch) {
      this.props.searchUser(this.props.prevSearch);
      this.setState({ searched: true });
    }
  }

  render() {
    if (!this.props.user || !this.props.requests || !this.props.logout || !this.props.users || !this.props.friendships) return null;
    let allUsers = Object.values(this.props.users);
    let resultUsers = [];
    let recommendedUsers = [];
    let props = this.props;
    let stat;

    allUsers.forEach((user, idx) => {
      let friendStatus = "Friend Request";
      if (!!this.props.friendships[user.id]) {
        friendStatus = 'Request Sent';
      } else if (this.props.friends.includes(user.id)) {
        friendStatus = 'Friends';
      } else if (!!this.props.requests[user.id]) {
        friendStatus = 'Awaiting Response...';
      } else {
        friendStatus = 'Add Friend';
      }
      if (props.search.includes(user.id)) {
        resultUsers.push(
          <section id={`result-user-${idx}`} className="users" key={idx}>
            <section className="user-info-section">
              <img src={user.pictureUrl} className="picture"></img>
              <section className="name-sections">
                <Link to={`/${user.id}`} className="name">{user.firstName} {user.lastName}</Link>
              </section>
            </section>
            <section className="request-section">
              <button onClick={() => this.handleFriendRequest(user.id, friendStatus)}
                className="friend-button"
              >{friendStatus}
              </button>
            </section>
          </section>
        );
      } else if (!props.friends.includes(user.id) && user.id !== props.user.id) {
        recommendedUsers.push(
          <section src={`recommended-user-${idx}`} className="users" key={idx}>
            <section className="user-info-section">
              <img src={user.pictureUrl} className="picture"></img>
              <section className="name-sections">
                <Link to={`/${user.id}`} className="name">{user.firstName} {user.lastName}</Link>
              </section>
            </section>
            <section className="request-section">
              <button onClick={() => this.handleFriendRequest(user.id, friendStatus)}
                className="friend-button"
              >{friendStatus}
              </button>
            </section>
          </section>
        );
      }
    });

    if (resultUsers.length === 0) {
      resultUsers = (
        <section className="empty-sections">
          <p className="desc">No results for "{this.props.prevSearch}"</p>
        </section>
      );
    } else if (recommendedUsers.length === 0) {
      recommendedUsers = (
        <section className="empty-sections">
          <p className="desc">No suggested users</p>
        </section>
      );
    }
    return (
      <div id="user-search">
        <TopNavBarContainer user={this.props.user}
          logout={this.props.logout}
          searchUser={this.props.searchUser}
          history={this.props.history}
          requests={this.props.requests}
        />
        <div className="spacer"></div>
        <section id="center-column">
          <p className="title">Search Results:  "{this.props.prevSearch}"</p>
          <section id="user-search-results">
            <section className="title-section">
              <p className="sub-title">People</p>
            </section>
            <section className="users-section">
              {resultUsers}
            </section>
          </section>
          <p className="title">People you may know</p>
          <section id="user-recommended-section">
            <section className="title-section">
              <p className="sub-title">People</p>
            </section>
            <section className="recommended-section">
              {recommendedUsers}
            </section>
          </section>
        </section>
        <div className="spacer"></div>
      </div>
    );
  }
}
