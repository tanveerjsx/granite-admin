import * as types from "../types/user";

const initialState = {
  vendors: [],
  users: [],
  roles: []
};

const vendorReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_VENDORS_SUCCESS:
      return {
        ...state,
        vendors: actions.vendors
      };
    case types.ACTIVATE_VENDOR_SUCCESS: {
      const vendors = [...state.vendors];
      const index = vendors.findIndex(e => e._id === actions.data._id);
      vendors[index].activate = actions.data.activate;
      return { ...state, vendors };
    }
    case types.ACTIVATE_USER_SUCCESS: {
      const users = [...state.users];
      const index = users.findIndex(e => e._id === actions.data._id);
      users[index].activate = actions.data.activate;
      return { ...state, users };
    }
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: actions.user
      };
    case types.GET_ROLES_SUCCESS:
      return {
        ...state,
        roles: actions.roles
      };
    case types.DELETE_USER_SUCCESS:
      let users = [...state.users];
      let index = users.findIndex(e => e._id === actions.updateUser._id);
      users[index].activate = actions.updateUser.activate;
      return { ...state, users };

    default:
      return state;
  }
};

export default vendorReducers;
