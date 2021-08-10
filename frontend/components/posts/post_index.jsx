import React from 'react';
import Post from './post';
import PostRightAside from './post_right_aside';
import PostLeftAside from './post_left_aside';
import NewPostForm from './new_post_form';
import TopNavBar from '../navbar/top_nav_bar';
import { Link } from 'react-router-dom';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updated: false,
      commentAdded: 0,
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.displayPostForm = this.displayPostForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  componentDidUpdate() {
    if (!this.state.updated) {
      this.props.fetchPosts();
      this.setState({ updated: true });
    }
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

  logoutUser() {
    this.props.logout();
  }

  render() {
    let allPosts = [];
    let allComments = {};

    let user;

    let users = this.props.users;
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
        if (this.props.friends.includes(post.authorId) && !post.postId) {
          let postComments = allComments[post.id];
          allPosts.push(
            <Post comments={postComments} posts={this.props.posts} deletePost={this.props.deletePost} users={this.props.users} fetchPosts={this.props.fetchPosts} postPost={this.props.postPost} post={post} key={idx} idx={idx} user={users[post.authorId]} currentUser={this.props.user} />
          );
        } else if (this.props.user.id === post.authorId && !post.postId) {
          let postComments = allComments[post.id];
          allPosts.push(
            <Post comments={postComments} posts={this.props.posts} deletePost={this.props.deletePost} users={this.props.users} fetchPosts={this.props.fetchPosts} postPost={this.props.postPost} post={post} key={idx} idx={idx} user={users[post.authorId]} currentUser={this.props.user} />
          );
        }
      });
    }
    if (this.props.user) {
      user = (
        <section id="post-section-user-controls" >
          <section className="user-section">
            <img src={this.props.user.pictureUrl} className="pictures"></img>
            <button onClick={this.displayPostForm} className="button-create-post">What's on your mind, {this.props.user.firstName}?</button>
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
        <TopNavBar user={this.props.user} fetchUsers={this.props.fetchUsers} fetchPosts={this.props.fetchPosts} logout={this.props.logout} />
        <PostRightAside users={this.props.users} friends={this.props.friends} />
        <div className="spacer"></div>
        <div id="new-post-form-wrapper">
          <div id="empty-space"></div>
          <NewPostForm user={this.props.user} postPost={this.props.postPost} />
        </div>
        {user}
        <section id="post-section-all-posts">
          {allPosts}
        </section>
        <div className="spacer"></div>
      </div>
    );
  }
}
