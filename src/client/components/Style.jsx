import React from 'react';
import { useSelector } from 'react-redux';
// import { buildLoggers } from '../utils/log';
// const { log } = buildLoggers('Style');

/**
 * Style Component
 * provides some css imports based on a configuration
 * used with conjunction with 'web components' to scope css
 *
 * @version 0.0.1
 * @author [Justin Gow](https://github.com/jaegow)
 */
const Style = () => {
  const app_config = useSelector((state) => state.App.config);
  const css_imports = app_config && app_config.css && app_config.css.imports;
  if (!css_imports || !css_imports.length) return false;
  const style_strings = css_imports.map((url) => `@import "${url}";`);

  return (<style>{style_strings}</style>);
};

export default Style;
