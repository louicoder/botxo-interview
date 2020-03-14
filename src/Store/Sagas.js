import * as ACTIONS from './Actions';
import * as ACTION_CREATORS from './ActionCreators';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import * as REQUESTS from './Api';

function* watchGetAllUsers () {
  yield takeLatest(ACTIONS.GET_USERS_ACTION, getAllUsers);
}

function* getAllUsers () {
  try {
    const response = yield call(() => REQUESTS.getAllUsersRequest());
    if (response.data) yield put(ACTION_CREATORS.getAllUsersSuccessful(response.data));
  } catch (error) {
    yield put(ACTION_CREATORS.getAllUsersFailed({}));
  }
}

export default function* () {
  yield all([ watchGetAllUsers() ]);
}
