import { ActionTypes } from './ActionsTypes';
import { buildLoggers } from '../../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log, error } = buildLoggers('navigationActions');

// eslint-disable-next-line no-unused-vars
export const updateNavConfig = (config) => (dispatch) => dispatch({
  type: ActionTypes.UPDATE_NAV_CONFIG,
  payload: { config },
});

export const loadNavConfig = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.LOAD_NAV_CONFIG });
    dispatch(updateNavConfig({
      todo: 'add-config',
    }));
  } catch (err) {
    error('loadNavConfig()', err);
  }
};
