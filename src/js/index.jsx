import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Luxian from './containers/Luxian';
import lever from './reducers/lever';

const store = createStore(lever);

ReactDOM.render(
  <Provider store={store}>
    <Luxian />
  </Provider>,
  document.getElementById('app')
);
