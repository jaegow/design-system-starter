import { ActionTypes } from './ActionsTypes';
import { buildLoggers } from '../../modules/Log';

// eslint-disable-next-line no-unused-vars
const { error } = buildLoggers('appActions');

// eslint-disable-next-line no-unused-vars
export const updateAppConfig = (config) => async (dispatch, getState) => {
  // log('updateAppConfig', { config });
  dispatch({
    type: ActionTypes.UPDATE_APP_CONFIG,
    payload: { config },
  });
};

// eslint-disable-next-line no-unused-vars
export const loadAppConfig = () => async (dispatch, getState) => {
  try {
    await dispatch({ type: ActionTypes.LOAD_APP_CONFIG });
    return dispatch(updateAppConfig({
      todo: 'add-config',
    }));
  } catch (err) {
    error('loadNavConfig()', err);
  }
};
