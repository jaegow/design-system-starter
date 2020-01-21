import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import User from './userReducer';
import Nav from './navReducer';
import App from './appReducer';

const rootReducer = combineReducers({
  App,
  User,
  Nav,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: reduxFormReducer,
});

export default rootReducer;
