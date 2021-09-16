import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import close from '../../../app/assets/images/close.png';

export default class Comment extends React.Component {
  calcTimeAgo() {
    let date = {
      timeAgo: 0,
      suffix: '',
    };

    let commentTime = new Moment(this.props.comment.createdAt).format('YYYYMMDDhhmmss');
    let timeAgo = new Moment(this.props.comment.createdAt, 'YYYYMMDDhhmmss').fromNow(true).split(' ');

    console.log(commentTime);
    console.log(timeAgo);

    date.timeAgo = timeAgo[0];

    switch (timeAgo[1]) {
      case ('few'):
        if (timeAgo[2] === 'seconds') {
          date.suffix = 'm'
          date.timeAgo = 1;
        } 
        break;
      case ('minutes'):
        date.suffix = 'm';
        break;
      case ('minute'):
        date.timeAgo = 1;
        date.suffix = 'm';
        break;
      case ('hours'):
        date.suffix = 'h';
        break;
      case ('hour'):
        date.timeAgo = 1;
        date.suffix = 'h';
        break;
      case ('days'):
        if (date.timeAgo > 7) {
          date.timeAgo = Math.floor(date.timeAgo / 7);
          date.suffix = 'w';
        } else {
          date.suffix = 'd';
        }
        break;
      case ('day'):
        date.timeAgo = 1;
        date.suffix = 'd';
        break;
      case ('months'):
        date.timeAgo = date.timeAgo * 4;
        date.suffix = 'w';
        break;
      case ('month'):
        date.timeAgo = 4;
        date.suffix = 'w';
        break;
      case ('years'):
        date.suffix = 'y';
        break;
      case ('year'):
        date.timeAgo = 1;
        date.suffix = 'y';
        break;
    }

    return date;
  }

  render() {
    if (!this.props.comment || !this.props.user) return null;

    let pic = (
      <img src={this.props.user.pictureUrl} className="picture" id={`comment-picture-${this.props.idx}`}></img>
    );
    let date = {};
    let time;
    let post = this.props.comment;
    let deleteButton = '';

    if (post) {
      date = this.calcTimeAgo();
      time = new Moment(post.createdAt).format('dddd, MMMM DD, YYYY [at] h:mm a');
    }

    if (this.props.user.id === this.props.currentUser.id) {
      deleteButton = (
        <button className="delete-button" onClick={() => { this.props.deletePost(this.props.comment.id); }}>
          <img src='https://fazebook-seeds.s3.us-west-1.amazonaws.com/close.png' className="delete-icon"></img>
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
              <p className="created-ats-full">{time}</p>
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
