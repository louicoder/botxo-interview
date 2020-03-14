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

// send data sorted by name
function* watchDataSortedByName () {
  yield takeLatest(ACTIONS.SEND_DATA_SORTED_BY_NAME_ACTION, sendDataSortedByName);
}

function* sendDataSortedByName () {
  try {
    const response = yield call(() => REQUESTS.sendDataSortedByName());
    if (response.data) yield put(ACTION_CREATORS.sendDataSortedByNameSuccessful(response.data));
  } catch (error) {
    yield put(ACTION_CREATORS.sendDataSortedByNameFailed({}));
  }
}

// send data sorted by age
function* watchDataSortedByAge () {
  yield takeLatest(ACTIONS.SEND_DATA_SORTED_BY_AGE_ACTION, sendDataSortedByAge);
}

function* sendDataSortedByAge () {
  try {
    const response = yield call(() => REQUESTS.sendDataSortedByAge());
    if (response.data) yield put(ACTION_CREATORS.sendDataSortedByAgeSuccessful(response.data));
  } catch (error) {
    yield put(ACTION_CREATORS.sendDataSortedByAgeFailed(error));
  }
}

export default function* () {
  yield all([ watchGetAllUsers(), watchDataSortedByName(), watchDataSortedByAge() ]);
}
