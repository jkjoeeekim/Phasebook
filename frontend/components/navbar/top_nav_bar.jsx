import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import fazebook from '../../../app/assets/images/fazebook.png';
import notificationactive from '../../../app/assets/images/notificationactive.png';
import notification from '../../../app/assets/images/notification.png';
import logout from '../../../app/assets/images/logout.png';

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      query: '',
      notifications: false,
    });

    this.logoutUser = this.logoutUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  logoutUser() {
    this.props.logout();
    window.location.reload();
    return (
      <Redirect to="/" />
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchUser(this.state.query);
    this.props.history.push(`/search?userName=${this.state.query}`);
    this.setState({ query: '' });
  }

  updateQuery(e) {
    e.preventDefault();
    this.setState({
      query: e.currentTarget.value
    });
  }

  toggleNotifications() {
    if (this.state.notifications) {
      this.setState({ notifications: false });
    } else {
      this.setState({ notifications: true });
    }
  }

  componentDidMount() {
    this.props.requestFriendships(this.props.user.id);
  }

  render() {
    if (!this.props.user || !this.props.requests || !this.props.users) return null;

    let userIds = Object.keys(this.props.requests);
    let notifications = [];
    if (userIds.length > 0) {
      userIds.forEach((userId, idx) => {
        if (this.props.users[userId]) {
          notifications.push(
            <Link to={`/${userId}`} className="link" key={idx}>
              <section className="notifications">
                <section>
                  <img src={this.props.users[userId].pictureUrl} className="picture"></img>
                </section>
                <section className="description-section">
                  <p className='bold'>{this.props.users[userId].firstName} {this.props.users[userId].lastName} </p>
                  <p>sent you a friend request, click here to view their profile.</p>
                </section>
              </section>
            </Link>
          );
        }
      });
    }

    let notificationButton;
    let noNotifications = '';
    let logoutButton = (
      <section onClick={this.props.logout} id='logout-section'>
        <button className="logout-button">
          <img src={logout} className="logout-icon"></img>
        </button>
        <section className='desc-section'>
          <p className="desc">Log Out</p>
        </section>
      </section>
    );
    if (notifications.length > 0) {
      notificationButton = (
        <button onClick={this.toggleNotifications} id="notification-button">
          <img src={notificationactive} className="picture"></img>
        </button>
      );
    } else {
      notificationButton = (
        <button onClick={this.toggleNotifications} id="notification-button">
          <img src={notification} className="picture_nonactive"></img>
        </button>
      );
      noNotifications = (
        <section className="notification-none">
          <p className="title">You have no notifications.</p>
        </section>
      );
    }

    return (
      <section id="navbar">
        <section className="navbar-icon-section">
          <Link to="/" id="navbar-icon-button">
            <img src={fazebook} id="navbar-icon"></img>
            <p id="navbar-icon-title">fazebook</p>
          </Link>
          <form onSubmit={this.handleSubmit} id="navbar-search-form">
            <input type="text"
              placeholder="Search friends"
              className="search-input-field"
              defaultValue={this.state.query}
              onChange={this.updateQuery}
            ></input>
          </form>
        </section>
        <section className="user-profile-section">
          <Link id="user-profile" to={`/${this.props.user.id}`}>
            <img id="nav-bar-picture" src={this.props.user.pictureUrl}></img>
            <p id="nav-bar-name">{this.props.user.firstName}</p>
          </Link>
          {notificationButton}
          {logoutButton}
        </section>
        <section id={this.state.notifications ? "notification-section" : "notification-section-none"}>
          <p className="notification-title">Notifications</p>
          {notifications}
          {noNotifications}
        </section>
      </section>
    );
  }
}
