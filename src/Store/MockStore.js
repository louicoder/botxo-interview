import configureMockStore from 'redux-mock-store';
import sagaMiddleware from 'redux-saga';
import reducer from './Reducer';

const middlewares = [ sagaMiddleware ];

export default configureMockStore(reducer, middlewares);
