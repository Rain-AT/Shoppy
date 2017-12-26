/**
 * Load the product list from database
 */

import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_PRODUCT_LIST } from './constants';
import { fetchDataSuccess, fetchDataError } from './actions';

import axios from 'axios';
import firebase from 'firebase';

function getProductListData(api) {
	return new Promise((resolve, reject) => {
		axios.get(api)
		  .then(data => {
		    resolve(data);
		  })
		  .catch(error => {
		    reject(error);
		  });
	});
}

/*export function* getProductList({api}) {
  try {
    const productList = yield call(getProductListData, api);
    console.log(productList);
    yield put(fetchDataSuccess(productList));
    //yield call(resolve);
  } catch (err) {
    yield put(fetchDataError(err));
    //yield call(reject, err);
  }
}*/

function getFireBaseProductList(startIndex, numData) {
	var productsRef = firebase.database().ref('products').orderByKey().limitToFirst(numData);
	if (startIndex) {
		productsRef = firebase.database().ref('products').orderByKey().limitToFirst(numData).startAt(startIndex);
	}

	return new Promise((resolve, reject) => {
		productsRef.once('value', snapshot => {
      resolve(snapshot.val());
    }, err => {
    	reject(err);
    });
	});
}

export function* getProductList({startIndex = 0, numData = 6}) {
	try {
    const productList = yield call(getFireBaseProductList, startIndex, numData);
    yield put(fetchDataSuccess(productList));
  } catch (err) {
    yield put(fetchDataError(err));
  }
}

export function* productData() {
	//const watcher = yield takeLatest(LOAD_PRODUCT_LIST, getProductList);
	const watcher = yield takeLatest(LOAD_PRODUCT_LIST, getProductList);
}

// All sagas to be loaded
export default [
  productData,
];
