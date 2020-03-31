import * as types from "../types/order";
const initialState = {
  orders: []
};

const orderReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: actions.orders
      };

    case types.DELETE_ORDER_SUCCESS:
      let order = [...state.orders];
      order = order.filter(e => e._id !== actions.payload);
      return (state = {
        ...state,
        order
      });

    default:
      return state;
  }
};

export default orderReducers;
