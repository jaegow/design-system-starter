// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import useDeepCompareEffect from '../hooks/useDeepCompareEffect';
import { jsonFetch } from '../modules/JsonFetch';
import { childrenRendererHelper } from '../utils/react';
// import { buildLoggers } from '../modules/Log';
// const { log } = buildLoggers('DataProvider');

const DataProvider = ({ url, method, body, children, blockRequest, ...props }) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useDeepCompareEffect(() => {
    let isCancelled = false;
    async function fetchData() {
      try {
        if (blockRequest && blockRequest({ url, method, body })) {
          setData(undefined);
          setLoading(false);
          return;
        }
        setLoading(true);
        const jsonFetcher = jsonFetch({ url, method, body });
        const json = await jsonFetcher.fetch();
        if (isCancelled) return;
        setData(json);
      } catch (err) {
        setError(err.message || 'Unexpected error');
      }
      setLoading(false);
    }
    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url, method, body]);

  const _props = { ...props, loading, error, data };

  return childrenRendererHelper(children, _props);
};

export default DataProvider;
