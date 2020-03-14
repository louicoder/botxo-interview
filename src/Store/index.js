import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from '../Components/Main';
import RootSaga from './Sagas';
import { createLogger } from 'redux-logger';
import RootReducer from './Reducer';

export default () => {
  const createStoreHandler = () => {
    let middleware;
    const sagaMiddleware = createSagaMiddleware();
    const _logger = createLogger();

    middleware = composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(_logger));

    const store = createStore(RootReducer, middleware);

    if (RootSaga) sagaMiddleware.run(RootSaga);

    return store;
  };

  const store = createStoreHandler();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
