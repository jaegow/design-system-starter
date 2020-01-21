import { ActionTypes } from './ActionsTypes';
import { buildLoggers } from '../../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log, todo, warn, error } = buildLoggers('userActions');

export const getUserIP = () => async (dispatch) => {
  log('getUserIP()');
  try {
    const url = 'https://api.ipify.org?format=json';
    const payload = await fetch(url, { method: 'GET' }).then((response) => response.json());
    return dispatch({
      type: ActionTypes.USER_GET_IP,
      payload,
    });
  } catch (err) {
    error('getUserIP()', err);
    return dispatch({
      type: ActionTypes.USER_ERROR,
      payload: { ...err, message: 'get user ip failed' },
    });
  }
};

export const updateUserConfig = (payload) => (dispatch) => {
  // log('updateUserConfig', { config });
  dispatch({
    type: ActionTypes.UPDATE_USER_CONFIG,
    payload,
  });
};

export const loadUserConfig = () => async (dispatch) => {
  // log('loadUserConfig()');
  try {
    await dispatch({ type: ActionTypes.LOAD_USER_CONFIG });
    return dispatch(updateUserConfig({
      todo: 'add-config',
    }));
  } catch (err) {
    error('loadUserConfig()', err);
  }
};
