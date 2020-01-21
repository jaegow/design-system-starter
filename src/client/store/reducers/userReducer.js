import { ActionTypes } from '../actions/ActionsTypes';
import { buildLoggers } from '../../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('userReducer');

const initialState = {
  ip: null,
  config: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ActionTypes.USER_GET_IP) {
    const { ip } = payload;
    return {
      ...state,
      ip,
    };
  }

  if (type === ActionTypes.UPDATE_USER_CONFIG) {
    const config = payload;
    return {
      ...state,
      config,
    };
  }

  return state;
};
