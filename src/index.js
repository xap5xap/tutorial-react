// Set up your application entry point here.../* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './assets/styles.css';

import Game from './components/game';
import ItemList from './components/ItemList';

const store = configureStore(); // You can also pass in an initialState here

render(
  <Provider store={store}>
    <AppContainer>
      <div>
        <Game />
        <ItemList />
      </div>
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);
