import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import createStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store = createStore();

  ReactDOM.render(<Root store={store} />, root);
});