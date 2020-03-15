import configureMockStore from 'redux-mock-store';
import sagaMiddleware from 'redux-saga';

const middlewares = [ sagaMiddleware ];

export default configureMockStore(middlewares);
