import React from 'react';
import { Link } from 'react-router-dom';
import Comment from '../comments/comment';

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

    this.toggleComments = this.toggleComments.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    document.getElementById(`input-field-${idx}`).focus();
  }

  focusInputAfterSubmit() {
    if (document.getElementById(`input-field-${this.props.idx + 1}`)) {
      document.getElementById(`input-field-${this.props.idx + 1}`).focus();
    }
  }

  handleSubmit(e) {
    // debugger;
    e.preventDefault();
    this.props.postPost({ body: this.state.body, author_id: this.props.currentUser.id, post_id: this.props.post.id });
    this.setState({ body: '' });
    if (this.state.revealComments) {
      this.setState({ revealComments: true });
    }
  }

  render() {
    // debugger;
    if (!this.props.user || !this.props.currentUser || !this.props.posts || !this.props.users) return null;
    let post = this.props.post;
    let user = this.props.user ? `${this.props.user.firstName} ${this.props.user.lastName}` : "";
    let date = {};
    let allComments = [];
    let deleteButton = '';
    let comments = this.props.comments;
    let numComments = '';
    let posts = this.props.posts;
    let img = (
      <img src={this.props.user.pictureUrl} className="picture" id={`comment-section-picture-${this.props.idx}`}></img>
    );
    let imgCurrent = (
      <img src={this.props.currentUser.pictureUrl} className="picture" id={`comment-section-picture-${this.props.idx}`}></img>
    );


    if (comments.length === 1) {

      numComments = (
        <button className='comments-counts' onClick={this.toggleComments} >{comments.length} Comment</button>
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
      // console.log('in render ' + this.props.post.id + this.state.revealComments);
      // console.log('in render ' + comments);
      // console.log('in render ' + allComments.reverse());

      if (!!this.props.ui) {
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
        // console.log('in render' + comments);
        // console.log('in render' + allComments.reverse());
      } else {
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
        <button onClick={() => { this.props.deletePost(this.props.post.id); }}>Delete</button>
      );
    }

    return (
      <section className="posts">
        <section className="user-details">
          {img}
          <section className="name-and-date">
            <Link to="/" className="links">{user}</Link>
            <Link to="/" className="created-ats">{date.month} {date.day} at {date.hour}:{date.minutes} {date.status}</Link>
          </section>
          {deleteButton}
        </section>
        <section className="post-details">
          <p className="bodys">{post.body}</p>
        </section>
        <section className="count-likes-comments">
          <p>Likes</p>
          {numComments}
        </section>
        <section className="likes-and-comments">
          <button className="likes">Like</button>
          <button onClick={() => this.focusInput(this.props.idx)} className="comments-button">Comment</button>
        </section>
        {allComments.map(comment => {
          return comment;
        })}
        <form className="new-comment" onSubmit={this.handleSubmit}>
          {imgCurrent}
          <input id={`input-field-${this.props.idx}`} className="input-fields" type="text" placeholder="Write a comment..." value={this.state.body} onChange={this.updateBody}></input>
          <input type='submit' value=""></input>
        </form>
      </section>
    );
  }
}
