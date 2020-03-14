import * as ACTIONS from './Actions';
// import { combineReducers } from 'redux';

const initialState = {
  // users: [],
  specificUsers: [],
  genericUsers: []
};

export default (state = initialState, { type, payload, error, name, age }) => {
  switch (type) {
    // get all users
    case ACTIONS.GET_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.GET_USERS_SUCCESSFUL:
      const sp = [ ...payload ];
      const gn = [ ...payload ];
      const specific = sp.sort((a, b) => a.age - b.age);
      const generic = sp.sort((a, b) => a.name - b.name);
      return { ...state, genericUsers: generic, specificUsers: specific, loading: false };
    case ACTIONS.GET_USERS_FAILED:
      return { ...state, loading: false };

    // add user to generic list
    case ACTIONS.ADD_GENERIC_USER_ACTION:
      let newSpecific = [ ...state.specificUsers, { name, age } ];
      newSpecific = newSpecific.sort((a, b) => a.age - b.age);
      return {
        ...state,
        specificUsers: newSpecific,
        genericUsers: [ ...state.genericUsers, { name, age } ]
      };
    case ACTIONS.ADD_GENERIC_USER_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.ADD_GENERIC_USER_FAILED:
      return { ...state, loading: false };

    // add user to specific list
    case ACTIONS.ADD_SPECIFIC_USER_ACTION:
      let newSpec = [ ...state.specificUsers, { name, age } ];
      newSpec = newSpec.sort((a, b) => a.age - b.age);
      return {
        ...state,
        specificUsers: newSpec
      };
    case ACTIONS.ADD_SPECIFIC_USER_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.ADD_SPECIFIC_USER_FAILED:
      return { ...state, loading: false };

    // send generic list
    case ACTIONS.SEND_GENERIC_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_GENERIC_USERS_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_GENERIC_USERS_FAILED:
      return { ...state, loading: false };

    // send specific list
    case ACTIONS.SEND_SPECIFIC_USERS_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_SPECIFIC_USERS_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_SPECIFIC_USERS_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

// export default combineReducers({ users: userReducer });
