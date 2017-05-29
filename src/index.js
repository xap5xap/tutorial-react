// Set up your application entry point here.../* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

require('./favicon.ico'); // Tell webpack to load favicon.ico
import './assets/styles.css';

import Game from './components/game';

render(
    <AppContainer>
        <Game />
    </AppContainer>,
    document.getElementById('app')
);
