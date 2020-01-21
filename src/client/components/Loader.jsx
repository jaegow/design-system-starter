import React from 'react';
import classnames from 'classnames';
import './Loader.scss';

const Loader = ({ loading, children }) => (
  <div className={classnames('loader', { 'is-loading': loading })}>
    {children}
    <div className="loader__animation" />
  </div>
);

export default Loader;
