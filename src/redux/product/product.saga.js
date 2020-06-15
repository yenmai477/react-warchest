import { takeLatest, put, all, call, delay } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import { push } from "react-router-redux";
import productActionTypes from "./product.types";

import {
  searchProductsSucess,
  searchProductsFailure,
  getProductDetailSuccess,
  getProductDetailFail,
} from "./product.actions";
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

export function* getProductDetails({ payload: params }) {
  try {
    yield put(showLoading());

    const { data } = yield call(() => apiCall.get(`/products/${params}`));
    const products = data.data;
    yield put(getProductDetailSuccess(products));
  } catch (error) {
    yield put(getProductDetailFail(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* onSearchProductsStart() {
  yield takeLatest(productActionTypes.SEARCH_PRODUCTS_START, searchProducts);
}
export function* onGetProductsDetailStart() {
  yield takeLatest(
    productActionTypes.GET_PRODUCT_DETAIL_START,
    getProductDetails
  );
}

export function* productSagas() {
  yield all([call(onSearchProductsStart), call(onGetProductsDetailStart)]);
}
