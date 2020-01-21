import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Environment from '../modules/Environment';
import buildLocalStorageItem from '../modules/LocalStorageStore';
import rootReducer from './reducers';

// import { buildLoggers } from '../utils/log';
// const { error, log } = buildLoggers('configureStore');

const configureStore = () => {
  //
  const serverSideState = { ...window.__STATE__ };
  delete window.__STATE__;
  const reduxLocalStorage = buildLocalStorageItem({ id: '@@local-redux' });

  // pull in any local storage state
  const localStorageState = reduxLocalStorage.get();

  const initialState = {
    ...serverSideState,
    ...localStorageState,
  };

  let store;
  if (!Environment.is.development) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk),
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(
          thunk,
          // todo: show when onboarding and learning redux
          // createLogger()
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      ),
    );
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  store.subscribe(() => {
    // only need to save User_Redux_Hooks right now
    const state = store.getState();
    // todo: add more items that we want to be offline
    const { User } = state;
    reduxLocalStorage.set({ User });
  });

  return store;
};

export default configureStore;
