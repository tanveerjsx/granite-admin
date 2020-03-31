import * as types from "./../types/coupon";

export const getCoupons = () => {
  return {
    type: types.GET_COUPONS
  };
};
export const getCouponsSuccess = coupons => {
  return {
    type: types.GET_COUPONS_SUCCESS,
    coupons
  };
};

export const getMyCoupons = id => {
  return {
    type: types.GET_MY_COUPONS,
    id
  };
};
export const getMyCouponsSuccess = coupons => {
  return {
    type: types.GET_MY_COUPONS_SUCCESS,
    coupons
  };
};

export const deleteCoupons = (id, token) => {
  return {
    type: types.DELETE_COUPON,
    payload: { id, token }
  };
};
export const deleteCouponsSuccess = id => {
  return {
    type: types.DELETE_COUPON_SUCCESS,
    id
  };
};

export const addCoupon = (coupon, token) => {
  return {
    type: types.ADD_COUPON,
    payload: { coupon, token }
  };
};
export const addCouponSuccess = () => {
  return {
    type: types.ADD_COUPON_SUCCESS
  };
};

export const updateCoupon = (_id, coupon, token) => {
  return {
    type: types.UPDATE_COUPON,
    payload: { _id, coupon, token }
  };
};
export const updateCouponSuccess = data => {
  return {
    type: types.UPDATE_COUPON_SUCCESS,
    data
  };
};
