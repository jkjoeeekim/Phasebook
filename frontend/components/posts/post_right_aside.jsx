import React from 'react';
import { Link } from 'react-router-dom';

export default class PostRightAside extends React.Component {
  render() {
    let friends = [];
    if (this.props.friends && Object.keys(this.props.users).length > 1 && friends.length === 0) {
      this.props.friends.forEach((userId, idx) => {
        let idx2 = (idx * idx) + 99999;
        let idx3 = (idx * idx * idx) + 9999999;

        friends.push(
          <Link to={`/${userId}`} key={idx3} className="contact-details">
            <img key={idx} id={`contacts-pic-${idx}`} src={this.props.users[userId].pictureUrl} className="pictures" >
            </img>
            <div key={idx2} className="friend-names">
              {this.props.users[userId].firstName} {this.props.users[userId].lastName}
            </div>
          </Link>
        );
      });
    }

    return (
      <section id="post-right-aside">
        <section className="contacts-section">
          <p className="title">Contacts</p>
          {friends}
        </section>
      </section>
    );
  }
}
