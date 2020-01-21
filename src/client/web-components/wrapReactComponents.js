/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import ReactWebComponent from './ReactWebComponent';
import configureStore from '../store/configureStore';
import ReduxContext from '../store/ReduxContext';
import { loadAppConfig } from '../store/actions/appActions';
import Style from '../components/Style';
// import { buildLoggers } from '../utils/log';
// const { log, warn } = buildLoggers('initializeWebComponents');

/**
 * Builds a set of react components and wraps them in a web component and a redux context.
 *
 * @param componentManifest
 * @returns {{}}
 */
const wrapReactComponents = (componentManifest) => {
  const store = configureStore();
  const webComponentNames = Object.keys(componentManifest);

  webComponentNames.forEach((webComponentName) => {
    const ReactComponent = componentManifest[webComponentName];
    const ReduxReactComponent = (props) => (
      <ReduxContext store={store}>
        <ReactComponent {...props} />
        <Style />
      </ReduxContext>
    );
    ReactWebComponent.create(ReduxReactComponent, webComponentName);
  });

  // initialize the config that can be shared between all components
  store.dispatch(loadAppConfig());
};


export default wrapReactComponents;
