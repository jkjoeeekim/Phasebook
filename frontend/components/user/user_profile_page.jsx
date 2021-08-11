import React from 'react';
import TopNavBar from '../navbar/top_nav_bar';
import PostContainer from '../posts/post_container';

export default class UserProfilePage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchPosts();
  }

  render() {
    if (!this.props.posts || !this.props.users) return null;

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
      debugger;
      posts.forEach((post, idx) => {
        if (this.props.friends.includes(post.authorId) && !post.postId && !!post.userId) {
          let postComments = allComments[post.id];
          allPosts.push(
            <PostContainer comments={postComments}
              post={post}
              key={idx}
              idx={idx}
              user={users[post.authorId]}
              currentUser={this.props.user}
            />
          );
        } else if (this.props.user.id === post.authorId && !post.postId && !!post.userId) {
          let postComments = allComments[post.id];
          allPosts.push(
            <PostContainer comments={postComments}
              post={post}
              key={idx}
              idx={idx}
              user={users[post.authorId]}
              currentUser={this.props.user}
            />
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
        <TopNavBar user={this.props.user} logout={this.props.logout} />
        <p id="user-profile-title">Profile page for {this.props.user.firstName}</p>
        {allPosts}
      </div>
    );
  }
}
