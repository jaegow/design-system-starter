import { useState } from 'react';
import useDeepCompareEffect from './useDeepCompareEffect';
import { jsonFetch } from '../modules/JsonFetch';
import { buildLoggers } from '../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('useJSONFetch()');

const useJSONFetch = (options, fetchOnMount = false) => {
  const [json, setJSON] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  // let isUnmounted = false;

  const fetch = async () => {
    try {
      // log('fetch()');
      // if (isUnmounted) return;
      setLoading(true);
      const jsonFetcher = jsonFetch(options);
      const _json = await jsonFetcher.fetch();
      log('fetch', { _json });
      // if (isUnmounted) return;
      setError(undefined);
      setLoading(false);
      setJSON(_json);
      log('fetch', { json, loading, error });
    } catch (err) {
      setError(err.message || 'Unexpected error');
    }
    setLoading(false);
  };

  useDeepCompareEffect(() => {
    if (fetchOnMount) fetch();
    // return () => {
    //   isUnmounted = true;
    // };
  }, [options]);

  const state = {
    json,
    loading,
    error,
    fetch,
  };

  return [state];
};


export default useJSONFetch;
