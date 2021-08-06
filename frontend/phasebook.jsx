import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        currentUser: window.currentUser.id,
        friends: Object.values(window.currentUser.friends).map((friend) => { return friend.id; }),
      }
    };
    delete window.currentUser;
  }
  let store = createStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
});