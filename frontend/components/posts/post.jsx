import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../comments/comment';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      comments: '',
      posts: '',
    };

    this.months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    };

    this.commentsLength;
    this.liked = this.props.liked;

    this.post = React.createRef();

    this.toggleComments = this.toggleComments.bind(this);
    this.updateBody = this.updateBody.bind(this);
    // this.focusInput = this.focusInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  toggleComments() {
    if (this.props.ui) {
      this.props.closeComments(this.props.post.id);
    } else {
      this.props.openComments(this.props.post.id);
    }
  }

  focusInput(idx) {
    return (e) => {
      e.preventDefault();
      document.getElementById(`input-field-${idx}`).focus();
    };
    // document.getElementById(`input-field-${idx}`).focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    let wnd = document.getElementById("root");
    let that = this;
    let currentPost = this.post.current;
    let newPost = { body: this.state.body, author_id: this.props.currentUser.id, post_id: this.props.post.id };
    this.setState({ body: '' });
    // disableBodyScroll(wnd);
    this.props.postPost(newPost)
      // .then(res => {
      //   // enableBodyScroll(wnd);
      //   currentPost.focus();
      //   that.focusInput(that.props.idx);
      // });
  }

  toggleLike() {
    if (this.props.liked) {
      let user = this.props.currentUser;
      this.props.likes[this.props.post.id].forEach((like) => {
        if (like.userId === user.id) {
          this.props.deleteLike(like.id);
        }
      });
      this.setState({ liked: false });
    } else {
      this.props.postLike({
        user_id: this.props.currentUser.id,
        post_id: this.props.post.id
      });
      this.setState({ liked: true });
    }
  }

  // componentDidMount() {
  //   debugger;
  //   enableBodyScroll(document.getElementById("root"));
  // }

  render() {
    if (!this.props.user || !this.props.currentUser || !this.props.posts || !this.props.users) return null;
    let post = this.props.post;
    let user = this.props.user ? `${this.props.user.firstName} ${this.props.user.lastName}` : "";
    let date = {};
    let allComments = [];
    let deleteButton = '';
    let comments = this.props.comments;
    let likes = '';
    let likeButton;
    let commentButton = (
      <button onClick={this.focusInput(this.props.idx)}
        className="comments-button">
        <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/comment.png' className="comment-picture"></img>
        Comment
      </button>
    );
    let numComments = '';
    let viewMore = '';
    let posts = this.props.posts;
    let img = (
      <img src={this.props.user.pictureUrl} className="picture" id={`comment-section-picture-${this.props.idx}`}></img>
    );
    let imgCurrent = (
      <img src={this.props.currentUser.pictureUrl} className="picture" id={`comment-section-picture-${this.props.idx}`}></img>
    );

    if (comments.length === 1) {

      numComments = (
        <button className='comments-counts' onClick={this.toggleComments}>
          {comments.length} Comment
        </button>
      );
      comments.forEach((comment, idx) => {
        allComments.unshift(
          <Comment idx={idx}
            key={idx}
            user={this.props.users[posts[comment].authorId]}
            currentUser={this.props.currentUser}
            comment={this.props.posts[comment]}
            deletePost={this.props.deletePost}
          />
        );
      });

    } else if (comments.length > 1) {

      numComments = (
        <button className='comments-counts' onClick={this.toggleComments}>
          {comments.length} Comments
        </button>
      );

      if (!!this.props.ui) {
        viewMore = (
          <button className='comments-show-toggle' onClick={this.toggleComments}>
            Hide comments
          </button>
        );
        comments.forEach((comment, idx) => {
          allComments.unshift(
            <Comment idx={idx}
              key={idx}
              user={this.props.users[posts[comment].authorId]}
              currentUser={this.props.currentUser}
              comment={this.props.posts[comment]}
              deletePost={this.props.deletePost}
            />
          );
        });
      } else {
        viewMore = (
          <button className='comments-show-toggle' onClick={this.toggleComments}>
            View {comments.length - 1} more comments
          </button>
        );
        allComments.unshift(
          <Comment idx={0}
            key={0}
            user={this.props.users[posts[comments[0]].authorId]}
            currentUser={this.props.currentUser}
            comment={this.props.posts[comments[0]]}
            deletePost={this.props.deletePost}
          />
        );
      }
    }
    this.commentsLength = allComments.length;

    let postLikes = [];
    let likerNames = [];
    if (this.props.likers) {
      postLikes = this.props.likers.length;
      this.props.likers.forEach((liker, idx) => {
        likerNames.push(
          <p key={idx}>
            {this.props.users[liker.userId].firstName} {this.props.users[liker.userId].lastName}
          </p>
        );
      });
    }
    if (!!this.props.liked) {
      likeButton = (
        <button onClick={this.toggleLike} className="likes blue">
          <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/liked.png' className='like-icon'></img>
          Liked
        </button>
      );
      if (postLikes === 1) {
        likes = 'You like this';
      } else if (postLikes > 1) {
        likes = `You and ${postLikes - 1} others`;
      }
    } else {
      if (postLikes > 0) {
        likes = postLikes;
      }
      likeButton = (
        <button onClick={this.toggleLike} className="likes">
          <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/like.png' className='like-icon'></img>
          Like
        </button>
      );
    }

    if (post) {
      let fullDate = post.createdAt.split("T")[0];
      let fullTime = post.createdAt.split("T")[1];
      date.month = this.months[fullDate.split("-")[1]];
      date.day = fullDate.split("-")[2];
      date.year = fullDate.split("-")[0];
      date.hour = fullTime.split(":")[0];
      date.minutes = fullTime.split(":")[1];
      if (date.day < 10) {
        date.day = date.day.split("0");
      }
      if (date.hour > 12) {
        date.hour = date.hour - 12;
        date.status = "PM";
      } else if (date.hour === "00") {
        date.hour = 12;
        date.status = "AM";
      } else {
        date.status = "AM";
      }
    }

    if (this.props.user.id === this.props.currentUser.id) {
      deleteButton = (
        <button onClick={() => { this.props.deletePost(this.props.post.id); }} className="delete-button-section">
          <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/close.png' className="delete-x-icon"></img>
        </button>
      );
    }

    let numLikes = (likes === '') ? (
      ""
    ) : (
      <section className="post-likes-section">
        <section className="num-likes-section">
          <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/likedcircle.png' className="liked-circle-icon"></img>
          <p>
            {likes}
          </p>
        </section>
        <section className="likes-names-section">
          {likerNames}
        </section>
      </section>
    );

    return (
      <section className="posts">
        <section className="user-details">
          <section className="user-section">
            {img}
            <section className="name-and-date">
              <Link to={`/${this.props.user.id}`} className="links">{user}</Link>
              <Link to="/" className="created-ats">{date.month} {date.day} at {date.hour}:{date.minutes} {date.status}</Link>
            </section>
          </section>
          {deleteButton}
        </section>
        <section className="post-details">
          <p className="bodys">{post.body}</p>
        </section>
        <section className="count-likes-comments">
          {numLikes}
          {numComments}
        </section>
        <section className="likes-and-comments">
          {likeButton}
          {commentButton}
        </section>
        <section className="comments-section">
          {viewMore}
          {allComments.map(comment => {
            return comment;
          })}
        </section>
        <form className="new-comment" onSubmit={this.handleSubmit}>
          {imgCurrent}
          <input id={`input-field-${this.props.idx}`}
            className="input-fields"
            type="text"
            placeholder="Write a comment..."
            value={this.state.body}
            onChange={this.updateBody}
          ></input>
          {/* <input type='submit' ref={this.post}></input> */}
        </form>
      </section>
    );
  }
}
