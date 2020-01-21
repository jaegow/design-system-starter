import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const childrenRendererHelper = (children, props) => {
  if (!children) return null;
  const isChildren = React.isValidElement(children);
  if (isChildren) return React.Children.map(children, (child) => React.cloneElement(child, props));

  const isChildrenFunction = typeof children === 'function';
  if (isChildrenFunction) return children(props);
  // when would this be a thing
  return null;
};
