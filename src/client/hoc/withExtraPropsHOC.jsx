/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// import { buildLoggers } from '../modules/Log';
// const { log } = buildLoggers('withExtraPropsHOC');

function withExtraPropsHOC(Component, extraProps) {
  const WithExtraProps = (props) => (<Component {...props} {...extraProps} />);
  return WithExtraProps;
}

export default withExtraPropsHOC;
