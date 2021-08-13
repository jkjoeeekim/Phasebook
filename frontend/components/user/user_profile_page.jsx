import React from 'react';
import TopNavBarContainer from '../navbar/top_nav_bar_container';
import PostContainer from '../posts/post_container';
import NewPostForm from '../posts/new_post_form';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requested: false,
    };

    this.friendStatus = '';

    this.displayPostForm = this.displayPostForm.bind(this);
    this.hidePostForm = this.hidePostForm.bind(this);
    this.handleFriendRequest = this.handleFriendRequest.bind(this);
  }

  displayPostForm(e) {
    e.preventDefault();
    document.getElementById("new-post-form-wrapper").classList.add('enabled');
    document.getElementById("new-post-textarea").focus();
    document.getElementById("empty-space").onclick = this.hidePostForm;
  }

  hidePostForm(e) {
    e.preventDefault();
    document.getElementById("new-post-form-wrapper").classList.remove('enabled');
  }

  handleFriendRequest() {
    if (this.friendStatus === 'Add Friend') {
      this.props.requestFriendship({
        user_id: this.props.user.id,
        friend_id: this.props.profileUser.id,
        active: false
      });
      this.setState({ requested: true });
      this.props.requestFriendships(this.props.user.id);
    } else if (this.friendStatus === 'Friends') {
    } else if (this.friendStatus === 'Request Sent') {
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
    this.props.requestFriendships(this.props.user.id);
  }

  render() {
    if (!this.props.posts || !this.props.users || !this.props.user || !this.props.profileUser) return null;

    let allPosts = [];
    let allComments = {};

    let users = this.props.users;
    let currentUser = this.props.user;

    let user = '';
    let placeholder = '';
    let notFriended = '';

    if (!!this.props.friendships[this.props.profileUser.id]) {
      this.friendStatus = 'Request Sent';
    } else if (this.props.friends.includes(this.props.profileUser.id)) {
      this.friendStatus = 'Friends';
    } else if (this.props.user.id === this.props.profileUser.id) {
      this.friendStatus = '';
    } else {
      this.friendStatus = 'Add Friend';
    }

    if (this.props.friends.includes(this.props.profileUser.id) || this.props.user.id === this.props.profileUser.id) {
      if (Object.values(this.props.posts).length > 1 && Object.values(this.props.users).length > 2) {
        let posts = Object.values(this.props.posts).reverse();
        posts.forEach((post, idx) => {
          allComments[post.postId] ||= [];
          allComments[post.id] ||= [];
          if (!!post.postId) {
            allComments[post.postId].push(post.id);
          }
        });
        posts.forEach((post, idx) => {
          if (this.props.profileUser.id === post.userId && !post.postId) {
            let postComments = allComments[post.id];
            allPosts.push(
              <PostContainer comments={postComments}
                post={post}
                key={idx}
                idx={idx}
                user={users[post.authorId]}
                currentUser={currentUser}
              />
            );
          }
        });
      }
      if (this.props.user.id === this.props.profileUser.id) {
        placeholder = `What's on your mind?`;
        user = (
          <section id="profile-section-user-controls">
            <section className="user-section">
              <img src={this.props.user.pictureUrl} className="pictures"></img>
              <button onClick={this.displayPostForm} className="button-create-post">What's on your mind?</button>
            </section>
            <div className="createLine"></div>
            <section className="button-section">
              <button onClick={this.displayPostForm}>Post</button>
            </section>
          </section>
        );
      } else {
        placeholder = `Write something to ${this.props.profileUser.firstName}`;
        user = (
          <section id="profile-section-user-controls" >
            <section className="user-section">
              <img src={this.props.user.pictureUrl} className="pictures"></img>
              <button onClick={this.displayPostForm} className="button-create-post">Write something to {this.props.profileUser.firstName}</button>
            </section>
            <div className="createLine"></div>
            <section className="button-section">
              <button onClick={this.displayPostForm}>Post</button>
            </section>
          </section>
        );
      }
    } else {
      notFriended = (
        <section id="no-posts-available">
          <div className="spacer"></div>
          <section className="info-section">
            <p className="title">Restricted</p>
            <p className="title">Add as friend to view posts</p>
          </section>
        </section>
      );
    }

    let friendRequestButton;
    let classitem;
    if (this.friendStatus === 'Request Sent') {
      classitem = 'sent';
    } else if (this.friendStatus === 'Friends') {
      classitem = 'friends';
    } else if (this.friendStatus === 'Add Friend') {
      classitem = 'add';
    }

    if (this.props.user.id !== this.props.profileUser.id) {
      friendRequestButton = (
        <button onClick={this.handleFriendRequest} className={`friend-button ${classitem}`}>
          {this.friendStatus}
        </button>
      );
    } else {
      friendRequestButton = '';
    }

    return (
      <div>
        <TopNavBarContainer user={this.props.user}
          logout={this.props.logout}
          searchUser={this.props.searchUser}
          history={this.props.history}
          requests={this.props.requests}
        />
        <div id="new-post-form-wrapper">
          <div id="empty-space"></div>
          <NewPostForm user={this.props.user}
            placeholdermsg={placeholder}
            postPost={this.props.postPost}
            profileUserId={this.props.profileUser.id}
            postingType='profile'
          />
        </div>
        <section id="user-profile-section-top">
          <section className="user-picture-and-name">
            <section className="user-section">
              <img src={this.props.profileUser.pictureUrl} className="profile-pictures"></img>
              <p className="user-name-main">
                {this.props.profileUser.firstName} {this.props.profileUser.lastName}
              </p>
            </section>
            <section className="friend-section">
              {friendRequestButton}
            </section>
          </section>
        </section>
        {notFriended}
        {user}
        <section id="profile-section-all-posts">
          {allPosts}
        </section>
        <div className="spacer"></div>
      </div>
    );
  }
}
