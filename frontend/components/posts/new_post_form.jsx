import React from 'react';
import { Redirect } from 'react-router-dom';

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      author_id: this.props.user.id,
    };

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postPost(this.state);
    window.location.reload();
  }

  render() {
    let user = (
      <div className="user-container">
        <img src={this.props.user.pictureUrl} className="pictures"></img>
        <p className="name">{this.props.user.firstName} {this.props.user.lastName}</p>
      </div>
    );
    return (
      <form onSubmit={this.handleSubmit} id="new-post-form">
        <section className="form-header-section">
          <p className="title">Create Post</p>
        </section>
        {user}
        <section className="form-text-section">
          <textarea id="new-post-textarea" className="post-textarea" onChange={this.updateBody} placeholder={`What's on your mind, ${this.props.user.firstName}`}></textarea>
        </section>
        <section className="form-button-section">
          <button className="post-button">Post</button>
        </section>
      </form >
    );
  }
}
