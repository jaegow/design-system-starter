import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadAppConfig } from '../store/actions/appActions';
import { loadNavConfig } from '../store/actions/navActions';
import { loadUserConfig } from '../store/actions/userActions';

const InitialDataLoad = () => {
  const dispatch = useDispatch();
  // load all data when this component first renderers
  useEffect(() => {
    dispatch(loadAppConfig());
    dispatch(loadNavConfig());
    dispatch(loadUserConfig());
  }, [dispatch]);

  return (<p style={{ display: 'none' }}>initial data loader</p>);
};

export default InitialDataLoad;
