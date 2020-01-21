
const development = process.env.NODE_ENV === 'development';
const release = process.env.IS_RELEASE === true;

const _is = () => ({
  development,
  release,
});

const is = _is();

// console.log('Environment.is', is);

export default {
  is,
};

// process.env.NODE_ENV = 'development';
// const built_case = process.env.NODE_ENV === 'development' ? 'this is dev' : 'this is prod';
// const cases = [
//   () => 'case one',
//   () => 'case two',
// ];
// const globPromise = (development_case, production_case) => new Promise((resolve, reject) => {
//   // glob(glob_url, glob_options, (err, files) => {
//   //   if (err) reject(err);
//   //   resolve(files);
//   // });
// });
// const apiHelper = (development_case, production_case) => {
//
// };
// export const casePromise = (development_case, production_case, {alwaysDevelopment, alwaysProduction}) => new Promise((resolve, reject) => {
//
//
// });

//   log('apiHelper()');
//   try {
//     const is_development = process.env.NODE_ENV === 'development';
//   } catch (err) {
//     error('apiHelper()', err);
//   }
// };
