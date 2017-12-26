/*
 *
 * ItemList actions
 *
 */

import {
  LOAD_PRODUCT_LIST,
  LIST_IS_LOADING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from './constants';


export function loadProductList(payload = {}) {
  return {
    type: LOAD_PRODUCT_LIST,
    payload
  };
}

export function isLoading() {
  return {
    type: LIST_IS_LOADING,
    isLoading: Boolean
  };
}

export function fetchDataSuccess(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error
  };
}