import { ActionTypes } from '../actions/ActionsTypes';
import { buildLoggers } from '../../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('navReducer');

const initialState = {
  config: undefined,
  open: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === ActionTypes.UPDATE_NAV_CONFIG) {
    const config = payload;
    return {
      ...state,
      config,
    };
  }

  return state;
};
