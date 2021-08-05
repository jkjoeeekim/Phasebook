import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render() {
    let post = this.props.post;
    let user = this.props.user ? `${this.props.user.firstName}` : "";
    let date = {};
    if (post) {
      let fullDate = post.createdAt.split("T")[0];
      let fullTime = post.createdAt.split("T")[1];
      date.month = this.months[fullDate.split("-")[1]];
      date.day = fullDate.split("-")[2];
      date.year = fullDate.split("-")[0];
    }
    return (
      <section className="posts">
        <Link to="/" className="user-links">{user}</Link>
        <p className="post-index-posts-created-at">{date.month} {date.day} {date.year}</p>
        <p className="post-index-posts-body">{post.body}</p>
      </section>
    );
  }
}
