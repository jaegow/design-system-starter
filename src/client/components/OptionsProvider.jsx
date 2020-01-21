// eslint-disable-next-line no-unused-vars
import React from 'react';
import { childrenRendererHelper } from '../utils/react';
// import { buildLoggers } from '../modules/Log';
// const { log } = buildLoggers('OptionsProvider');

const OptionsProvider = ({ data, optionReducer, defaultOptionReducer, children, ...props }) => {
  // set to a default if none passed in
  let { options = [], defaultOption } = props;
  if (data && optionReducer) {
    options = optionReducer(data);
  }
  if (data && defaultOptionReducer) {
    defaultOption = defaultOptionReducer(data);
  }
  // log('render()', {options, defaultValue});
  return childrenRendererHelper(children, { ...props, options, defaultOption });
};

export default OptionsProvider;
