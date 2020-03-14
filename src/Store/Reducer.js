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
      const generic = gn.sort((a, b) => {
        const _aname = a.name.toUpperCase();
        const _bname = b.name.toUpperCase();
        return _aname < _bname ? -1 : _aname > _bname ? 1 : 0;
      });
      return { ...state, genericUsers: generic, specificUsers: specific, loading: false };
    case ACTIONS.GET_USERS_FAILED:
      return { ...state, loading: false };

    // remove generic user.
    case ACTIONS.REMOVE_GENERIC_USER_ACTION:
      const newGeneric = state.genericUsers.filter((user) => user.name !== name);
      const _newSpecific = state.specificUsers.filter((user) => user.name !== name);
      return { ...state, genericUsers: newGeneric, specificUsers: _newSpecific };

    // remove specific user.
    case ACTIONS.REMOVE_SPECIFIC_USER_ACTION:
      const _newSpecificUsers = state.specificUsers.filter((user) => user.name !== name);
      return { ...state, specificUsers: _newSpecificUsers };

    // add user to generic list
    case ACTIONS.ADD_GENERIC_USER_ACTION:
      let newSpecific = [ ...state.specificUsers, { name, age, fromGeneric: true } ];
      let _newGeneric = [ ...state.genericUsers, { name, age, fromGeneric: true } ];
      newSpecific = newSpecific.sort((a, b) => a.age - b.age);
      _newGeneric = _newGeneric.sort((a, b) => {
        const _aname = a.name.toUpperCase();
        const _bname = b.name.toUpperCase();
        return _aname < _bname ? -1 : _aname > _bname ? 1 : 0;
      });
      return {
        ...state,
        specificUsers: newSpecific,
        genericUsers: _newGeneric
      };

    // add user to specific list
    case ACTIONS.ADD_SPECIFIC_USER_ACTION:
      let newSpec = [ ...state.specificUsers, { name, age } ];
      newSpec = newSpec.sort((a, b) => a.age - b.age);
      return {
        ...state,
        specificUsers: newSpec
      };

    // send generic list
    case ACTIONS.SEND_DATA_SORTED_BY_NAME_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_DATA_SORTED_BY_NAME_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_DATA_SORTED_BY_NAME_FAILED:
      return { ...state, loading: false };

    // send specific list
    case ACTIONS.SEND_DATA_SORTED_BY_AGE_ACTION:
      return { ...state, loading: true };
    case ACTIONS.SEND_DATA_SORTED_BY_AGE_SUCCESSFUL:
      return { ...state, loading: false };
    case ACTIONS.SEND_DATA_SORTED_BY_AGE_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

// export default combineReducers({ users: userReducer });
