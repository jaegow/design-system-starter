/* eslint-disable global-require,no-unused-expressions,func-names */
import Client from './modules/Client';
import Environment from './modules/Environment';
// import { buildLoggers } from './modules/Log';
// const { log } = buildLoggers('index.spa');
// log('Environment', Environment.is);
// log('Client', Client.is);

if (Client.is.IE || Client.is.Edge) {
  // extra/duplicate js needed for promises and/or import functions to work
  require('core-js/stable');
  require('regenerator-runtime/runtime');
  // todo: confirm the browser code is outside of the vendor bundle
  import(/* webpackChunkName: "ie-core-js" */ 'core-js/stable');
  import(/* webpackChunkName: "ie-regenerator-runtime" */ 'regenerator-runtime/runtime');
}

const async_index = async function () {
  if (Environment.is.development) {
    await import(/* webpackChunkName: "mock-data" */ './mock-data');
    await import(/* webpackChunkName: "dev-utils" */ './dev-utils');
  }
  import(/* webpackChunkName: "globalization" */ './globalization');
  import(/* webpackChunkName: "app" */ './app-build');
};
async_index();
