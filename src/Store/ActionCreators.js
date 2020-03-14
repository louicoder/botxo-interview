import * as ACTIONS from './Actions';

// get all users
export const getAllUsersAction = () => ({
  type: ACTIONS.GET_USERS_ACTION
});

export const getAllUsersSuccessful = (payload) => ({
  type: ACTIONS.GET_USERS_SUCCESSFUL,
  payload
});

export const getAllUsersFailed = (error) => ({
  type: ACTIONS.GET_USERS_FAILED,
  error
});

// add user to generic list
export const addGenericUser = () => ({
  type: ACTIONS.ADD_GENERIC_USER_ACTION
});

export const addGenericUserSuccessful = (payload) => ({
  type: ACTIONS.ADD_GENERIC_USER_SUCCESSFUL,
  payload
});

export const addGenericUserFailed = (error) => ({
  type: ACTIONS.ADD_GENERIC_USER_FAILED,
  error
});

// add user to specific list
export const addSpecificUser = () => ({
  type: ACTIONS.ADD_SPECIFIC_USER_ACTION
});

export const addSpecificUserSuccessful = (payload) => ({
  type: ACTIONS.ADD_SPECIFIC_USER_SUCCESSFUL,
  payload
});

export const addSpecificUserFailed = (error) => ({
  type: ACTIONS.ADD_SPECIFIC_USER_FAILED,
  error
});
// ---
// send generic list of users
export const sendGenericUsers = () => ({
  type: ACTIONS.SEND_GENERIC_USERS_ACTION
});

export const sendGenericUsersSuccessful = (payload) => ({
  type: ACTIONS.SEND_GENERIC_USERS_SUCCESSFUL,
  payload
});

export const sendGenericUsersFailed = (error) => ({
  type: ACTIONS.SEND_GENERIC_USERS_FAILED,
  error
});

// send specific list of users
export const sendSpecificUsers = () => ({
  type: ACTIONS.SEND_GENERIC_USERS_ACTION
});

export const sendSpecificUsersSuccessful = (payload) => ({
  type: ACTIONS.SEND_GENERIC_USERS_SUCCESSFUL,
  payload
});

export const sendSpecificUsersFailed = (error) => ({
  type: ACTIONS.SEND_GENERIC_USERS_FAILED,
  error
});
