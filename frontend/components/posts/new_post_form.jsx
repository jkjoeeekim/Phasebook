import React from 'react';

export default class NewPostForm extends React.Component {
  render() {
    let user = (
      <div className="user-container">
        <img src={this.props.user.pictureUrl} className="pictures"></img>
        <p className="name">{this.props.user.firstName} {this.props.user.lastName}</p>
      </div>
    );
    return (
      <form id="new-post-form">
        <section className="form-header">
          <p className="title">Create Post</p>
        </section>
        {user}
        <textarea className="post-textarea" placeholder={`What's on your mind, ${this.props.user.firstName}`}></textarea>
        <button className="post-button">Post</button>
      </form>
    );
  }
}
