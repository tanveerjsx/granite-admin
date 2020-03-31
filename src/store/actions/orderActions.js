import * as types from "./../types/order";
import { medias } from "../services/order";
import { orders } from "../services/order";

export const getOrder = () => {
  return {
    type: types.GET_ORDER
  };
};
export const getOrderSuccess = orders => {
  return {
    type: types.GET_ORDER_SUCCESS,
    orders
  };
};

export const getMyOrder = () => {
  return {
    type: types.GET_MY_ORDER
  };
};
export const getMyOrderSuccess = orders => {
  return {
    type: types.GET_MY_ORDER_SUCCESS,
    orders
  };
};

export const deleteOrder = (id, token) => {
  return {
    type: types.DELETE_ORDER,
    payload: { id, token }
  };
};
export const deleteOrderSuccess = id => {
  return {
    type: types.DELETE_ORDER_SUCCESS,
    id
  };
};
