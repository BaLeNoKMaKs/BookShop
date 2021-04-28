import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

import store from './store';

// store().dispatch({
//   type: 'SET_BOOKS',
//   payload: {
//     books: [{
//       title: 'asdf',
//       id: 1
//     }]
//   }
// })

// store().dispatch({
//   type: 'ADD_BOOK_TO_CART',
//   payload: {
//     book: {
//       id: 1
//     }
//   }
// })

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

