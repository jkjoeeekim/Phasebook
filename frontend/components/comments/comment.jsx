import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../../app/assets/images/close.png';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pic: "",
    };
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.comment || !this.props.user) return null;

    let pic = (
      <img src={this.props.user.pictureUrl} className="picture" id={`comment-picture-${this.props.idx}`}></img>
    );
    let date = {
      timeAgo: 0,
      suffix: ""
    };
    let post = this.props.comment;
    let deleteButton = '';

    if (post) {
      let today = new Date();
      let todayMinutes = today.getMinutes();
      let todayHour = today.getHours();
      let todayDay = today.getDate();
      let todayMonth = today.getMonth();
      let fullDate = post.createdAt.split("T")[0];
      let fullTime = post.createdAt.split("T")[1];
      let postMonth = fullDate.split("-")[1];
      let postDay = fullDate.split("-")[2];
      let postHour = fullTime.split(":")[0];
      let postMinutes = fullTime.split(":")[1];
      if ((todayMonth - postMonth) > 0) {
        date.timeAgo += ((todayMonth - postMonth) * 4);
        date.suffix = "w";
      } else if ((todayDay - postDay) > 0) {
        date.timeAgo += ((todayDay - postDay));
        date.suffix = "d";
      } else if ((todayHour - postHour) > 0) {
        date.timeAgo += ((todayHour - postHour));
        date.suffix = "h";
      } else if ((todayMinutes - postMinutes) > 0) {
        date.timeAgo += ((todayMinutes - postMinutes));
        date.suffix = "m";
      } else {
        date.timeAgo += 1;
        date.suffix = "m";
      }
    }

    if (this.props.user.id === this.props.currentUser.id) {
      deleteButton = (
        <button className="delete-button" onClick={() => { this.props.deletePost(this.props.comment.id); }}>
          <img src={close} className="delete-icon"></img>
        </button>
      );
    }

    return (
      <div id={`comment-id-${this.props.idx}`} className='comments' key={this.props.idx}>
        <section className='left-section'>
          <section className='picture-section'>
            {pic}
          </section>
          <section className="section">
            <section className="description-section">
              <Link to={`/${this.props.user.id}`} className='comment-user'>{this.props.user.firstName} {this.props.user.lastName}</Link>
              <p id={`comment-body-${this.props.idx}`} className='comment-bodies'>{this.props.comment.body}</p>
            </section>
            <section className="time-section">
              <Link to="/" className="created-ats">{date.timeAgo}{date.suffix}</Link>
            </section>
          </section>
        </section>
        <section className="right-section">
          {deleteButton}
        </section>
      </div>
    );
  }
}
