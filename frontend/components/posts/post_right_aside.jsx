import React from 'react';

export default class PostRightAside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picturesCreated: false,
    };
  }

  componentDidMount() {
    this.updatePictures();
  }

  updatePictures() {
    if (this.state.picturesCreated) {
      return;
    } else {
      this.props.friends.forEach((userId, idx) => {
        if (!document.getElementById(`contacts-pic-${idx}`)) return;
        document.getElementById(`contacts-pic-${idx}`).style.content = `url(${this.props.users[userId].pictureUrl})`;
        this.setState({ picturesCreated: true });
      });
    }
  }

  render() {
    let friends = [];
    if (this.props.friends && Object.keys(this.props.users).length > 1 && friends.length === 0) {
      this.props.friends.forEach((userId, idx) => {
        let idx2 = (idx * idx) + 99999;
        let idx3 = (idx * idx * idx) + 9999999;

        friends.push(
          <div key={idx3} className="contact-details">
            <img key={idx} id={`contacts-pic-${idx}`} className="pictures" >
            </img>
            <div key={idx2} className="friend-names">
              {this.props.users[userId].firstName} {this.props.users[userId].lastName}
            </div>
          </div>
        );
        this.updatePictures();
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
