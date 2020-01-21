import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { buildLoggers } from './modules/Log';
import './app-styles.scss';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('spa-build');

ReactDOM.render(<App />, document.getElementById('root'));
