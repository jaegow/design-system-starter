import React from 'react';
import { buildLoggers } from '../modules/Log';

const {todo} = buildLoggers('LoadingIndicator');

const LoadingIndicator = (props) => {
  todo('add correct loading indicator UI/UX');
  return (<p>Loading...</p>);
}

export default LoadingIndicator;
