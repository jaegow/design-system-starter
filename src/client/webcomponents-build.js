import wrapReactComponents from './web-components/wrapReactComponents';
import InitialDataLoad from './components/InitialDataLoad';
import './webcomponents-styles.scss';
// import { buildLoggers } from './modules/Log';
// const { todo } = buildLoggers('webcomponents-build.js');
// todo('remove CMS util before production build');

wrapReactComponents({
  'ds-initial-load': InitialDataLoad, // used to populate the store with initial data values
});


