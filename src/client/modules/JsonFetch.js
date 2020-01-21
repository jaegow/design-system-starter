/* eslint-disable no-else-return,no-unused-vars,arrow-body-style */
import path from 'path';
import { buildLoggers } from './Log';
import { objectFromPath } from '../utils/object';

// eslint-disable-next-line no-unused-vars
const { log, warn } = buildLoggers('jsonFetch');

const apiHost = process.env.API_HOST;
const apiHostEnv = objectFromPath(window, 'CPConfig.Core.WSRoot') || '';

// log({ apiHostEnv });

// todo: keep an eye on this one
const client_cache = {};
const cache = {
  get: ({ method = 'GET', url }) => {
    // if (method === 'GET') {
    //   return objectFromString(client_cache, `${method}.${url}.data`);
    // } else {
    //   return undefined;
    // }
    return undefined;
  },
  set: ({ method = 'GET', url }, data) => {
    // log('cache.set', 'client_cache.before', client_cache);
    // client_cache = objectFromString_append(client_cache, `${method}.${url}.data`, data);
    // log('cache.set', 'client_cache.after', client_cache);
    // objectFromString_create(client_cache, `${method}.${url}.data`)
    // if (method === 'GET') {
    //   client_cache[method][url].data = data;
    // }
  },
};

const resolveFetchOptions = (options) => {
  let { body, headers } = options;
  headers = {
    ...headers,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (body && typeof body !== 'string') {
    body = JSON.stringify(body);
  }
  return {
    ...options,
    headers,
    body,
  };
};

const timeout = (milliseconds) => new Promise((resolve, reject) => {
  setTimeout(() => { resolve(); }, milliseconds);
});

// eslint-disable-next-line import/prefer-default-export
export const jsonFetch = ({ reducer, ...fetchOptions }) => ({
  fetch: async () => {
    const options = resolveFetchOptions(fetchOptions);
    const { url } = options;
    const api_url = apiHost + path.normalize(`/${apiHostEnv}/${url}/`);
    log('fetch()', { api_url });
    const cached_value = cache.get(options);
    if (cached_value) {
      return cached_value;
    }

    // log('options.body', options.body);
    // log('typeof is string', typeof options.body !== 'string');

    // for testing purposes
    // await timeout(1000); warn('MAKE SURE THIS IS LINE IS COMMENTED OUT');

    const response = await fetch(api_url, options);
    const response_json = await response.json();
    // log('fetch()', { response_json });
    const data = reducer ? reducer(response_json) : response_json;
    // log('fetch()', { data });
    // set to a custom client cache to avoid having to make unnecessary requests
    cache.set(options, data);
    return data;
  },
});
