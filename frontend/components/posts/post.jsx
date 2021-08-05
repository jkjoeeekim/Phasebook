import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      author_id: null,
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

    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  render() {
    let post = this.props.post;
    let user = this.props.user ? `${this.props.user.firstName} ${this.props.user.lastName}` : "";
    let date = {};
    if (post) {
      let fullDate = post.createdAt.split("T")[0];
      let fullTime = post.createdAt.split("T")[1];
      date.month = this.months[fullDate.split("-")[1]];
      date.day = fullDate.split("-")[2];
      date.year = fullDate.split("-")[0];
      date.hour = fullTime.split(":")[0].split("0").pop();
      date.minutes = fullTime.split(":")[1];
    }
    return (
      <section className="posts">
        <section className="user-details">
          <img className="picture"></img>
          <section className="name-and-date">
            <Link to="/" className="links">{user}</Link>
            <Link to="/" className="created-ats">{date.month} {date.day} at {date.hour}:{date.minutes}</Link>
          </section>
        </section>
        <section className="post-details">
          <p className="bodys">{post.body}</p>
        </section>
        <section className="likes-and-comments">
          <p className="likes">Like</p>
          <p className="comments">Comment</p>
        </section>
        <section className="new-comment">
          <img className="picture"></img>
          <input className="input-field" type="text" placeholder="Write a comment..." value={this.state.body} onChange={this.updateBody}></input>
        </section>
      </section>
    );
  }
}
