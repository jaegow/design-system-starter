/* eslint-disable import/prefer-default-export */
import { buildLoggers } from './Log';

const { log, error } = buildLoggers('DataTransport');

// export const build = ({
//   in: () => false,
//   out: () => false,
// }) => {
//
//   // ??? differentiate between data in or data out
//
//   // handle graphQL
//   // handle restful api
//   // handle socket
//   // handle mock data
//
//   // return a promise
//   // promise resolution returns
//   // - success
//   // - success message
//   // - success data
//   // - error
//   // - error message
//   // - error code
// };

// process.env.NODE_ENV = 'development';

// const built_case = process.env.NODE_ENV === 'development' ? 'this is dev' : 'this is prod';

const cases = [
  () => 'case one',
  () => 'case two',
];

const globPromise = (development_case, production_case) => new Promise((resolve, reject) => {
  // glob(glob_url, glob_options, (err, files) => {
  //   if (err) reject(err);
  //   resolve(files);
  // });
});

const apiHelper = (development_case, production_case) => {

};

export const development = (development_case, production_case, { alwaysDevelopment, alwaysProduction }) => async () => {
  log('apiHelper()');
  try {
    const is_development = process.env.NODE_ENV === 'development';
  } catch (err) {
    error('apiHelper()', err);
  }
};
