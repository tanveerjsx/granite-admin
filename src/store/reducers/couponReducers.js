import * as types from "../types/coupon";
const initialState = {
  coupons: []
};

const couponReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_COUPONS_SUCCESS:
      return {
        ...state,
        coupons: actions.coupons
      };

    case types.ADD_COUPON_SUCCESS:
      return {
        ...state
      };
    case types.UPDATE_COUPON_SUCCESS:
      return {
        ...state
      };

    case types.DELETE_COUPON_SUCCESS: {
      let coupons = [...state.coupons];
      coupons = coupons.filter(e => e._id !== actions.id);
      return (state = {
        ...state,
        coupons
      });
    }

    default:
      return state;
  }
};

export default couponReducers;
