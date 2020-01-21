import { ActionTypes } from '../actions/ActionsTypes';

// import { buildLoggers } from '../../modules/Log';
// const { todo, log } = buildLoggers('navReducer');

const initialState = {
  config: {
    root: '',
    css: {
      imports: [],
    },
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  // if (type === ActionTypes.LOAD_APP_CONFIG) {
  //   todo('ActionTypes.LOAD_NAV_CONFIG', 'is this necessary??');
  // }

  if (type === ActionTypes.UPDATE_APP_CONFIG) {
    const { config } = payload;
    // log('ActionTypes.UPDATE_APP_CONFIG', {config});
    return {
      ...state,
      config,
    };
  }

  return state;
};
