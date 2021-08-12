import React from 'react';
import TopNavBar from '../navbar/top_nav_bar';
import PostContainer from '../posts/post_container';
import NewPostForm from '../posts/new_post_form';

export default class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.displayPostForm = this.displayPostForm.bind(this);
    this.hidePostForm = this.hidePostForm.bind(this);
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

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
  }

  render() {
    if (!this.props.posts || !this.props.users || !this.props.user || !this.props.profileUser) return null;

    let allPosts = [];
    let allComments = {};

    let user;

    let users = this.props.users;
    let currentUser = this.props.user;
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
    let placeholder;
    if (this.props.user.id === this.props.profileUser.id) {
      placeholder = `What's on your mind?`;
      user = (
        <section id="post-section-user-controls" >
          <section className="user-section">
            <img src={this.props.user.pictureUrl} className="pictures"></img>
            <button onClick={this.displayPostForm} className="button-create-post">What's on your mind?</button>
          </section>
          <div className="createLine"></div>
          <section>
            <button onClick={this.displayPostForm}>Post</button>
          </section>
        </section>
      );
    } else {
      placeholder = `Write something to ${this.props.profileUser.firstName}`;
      user = (
        <section id="post-section-user-controls" >
          <section className="user-section">
            <img src={this.props.user.pictureUrl} className="pictures"></img>
            <button onClick={this.displayPostForm} className="button-create-post">Write something to {this.props.profileUser.firstName}</button>
          </section>
          <div className="createLine"></div>
          <section>
            <button onClick={this.displayPostForm}>Post</button>
          </section>
        </section>
      );
    }

    return (
      <div>
        <TopNavBar user={this.props.user} logout={this.props.logout} />
        <div id="new-post-form-wrapper">
          <div id="empty-space"></div>
          <NewPostForm user={this.props.user} placeholdermsg={placeholder} postPost={this.props.postPost} />
        </div>
        <section id="user-profile-section-top">
          <section className="user-section">
            <img src={this.props.profileUser.pictureUrl} className="profile-pictures"></img>
            <p>{this.props.profileUser.firstName} {this.props.profileUser.lastName}</p>
          </section>
          <section className="friend-section">
            <button className="friend-button">add friend</button>
          </section>
        </section>
        {user}
        <section id="profile-section-all-posts">
          {allPosts}
        </section>
      </div>
    );
  }
}
