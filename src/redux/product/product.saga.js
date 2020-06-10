import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import { push } from "react-router-redux";
import productActionTypes from "./product.types";

import { searchProductsSucess, searchProductsFailure } from "./product.actions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import showMessage from "../../utils/showMessage";

export function* searchProducts({ payload: params }) {
  try {
    yield put(showLoading());

    const { data } = yield call(() => apiCall.get(`/products?${params}`));
    const products = data;
    yield put(searchProductsSucess(products));
  } catch (error) {
    yield put(searchProductsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* onSearchProductsInStart() {
  yield takeLatest(productActionTypes.SEARCH_PRODUCTS_START, searchProducts);
}

export function* productSagas() {
  yield all([call(onSearchProductsInStart)]);
}
