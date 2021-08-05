import React from 'react';
import Post from './post';

export default class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
      users: this.props.users
    };

    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    this.setState({ users: this.props.fetchUsers() });
    this.setState({ posts: this.props.fetchPosts() });
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    let allPosts = [];
    let user;
    let users = this.props.users;
    if (Object.values(this.props.posts).length > 1) {
      Object.values(this.props.posts).forEach((post, idx) => {
        allPosts.push(
          <Post post={post} key={idx} idx={idx} user={users[post.authorId]} />
        );
      });
    }
    if (this.props.user) {
      user = (
        <section id="post-section-user-controls" >
          <input className="input-create-post" type="text" defaultValue={`What's on your mind, ${this.props.user.firstName}?`} disabled></input>
          <div className="createLine"></div>
          <button>Photo</button>
        </section>
      );
    }

    return (
      <div>
        <button onClick={this.logoutUser}>Log Out</button>
        {user}
        <section id="post-section-all-posts">
          {allPosts}
        </section>
      </div>
    );
  }
}
