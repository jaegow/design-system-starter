import { buildLoggers } from '../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log, warn } = buildLoggers('object');

const object_argument_boundry = (object_argument) => {
  if (object_argument === undefined || object_argument === null) {
    throw new Error('object argument is undefined || null');
  }
};

const path_argument_overloaded = (namespace) => {
  if (Array.isArray(namespace)) {
    return namespace;
  }
  if (typeof namespace === 'string') {
    return namespace.split('.');
  }
  if (namespace === undefined || namespace === null) {
    throw new Error('namespace === undefined || namespace === null');
  } else {
    throw new Error('!namespace != Array || !namespace != String');
  }
};

// export function orderedObjectString(obj) {
//   const space = 0;
//   const allKeys = [];
//   JSON.stringify(obj, (key, value) => { allKeys.push(key); return value; });
//   allKeys.sort();
//   return JSON.stringify(obj, allKeys, space);
// }
//
// export function getObjectValueList(object) {
//   return Object.keys(object).map((typeKey) => (object[typeKey]));
// }

export const objectFromPath = (object, path) => {
  try {
    object_argument_boundry(object);
    return path_argument_overloaded(path).reduce((prev, curr) => (prev ? prev[curr] : null), object);
  } catch (err) {
    // warn('objectFromPath()', err.message);
    return undefined;
  }
};

export function objectsFromPath(objects, namespace) {
  return objects.map((_object) => objectFromPath(_object, namespace));
}

export function objectsFromPathEqual(objects, namespace) {
  const values = objectsFromPath(objects, namespace);
  return values.every((val, i, arr) => val === arr[0]);
}
