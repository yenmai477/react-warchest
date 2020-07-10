import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import productActionTypes from "./product.types";

import {
  searchProductsSucess,
  searchProductsFailure,
  getProductDetailSuccess,
  getProductDetailFail,
} from "./product.actions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getNoficationDetailStart } from "../nofication/nofication.action";

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
    const product = data.data;
    yield put(getNoficationDetailStart(product._id));
    yield put(getProductDetailSuccess(product));
  } catch (error) {
    yield put(getProductDetailFail(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* searchProductUrl({ payload: { url, history } }) {
  try {
    yield put(showLoading());

    const { data } = yield call(() => apiCall.post(`/products`, { url }));
    const product = data.data.data;

    history.push(`/app/products/${product._id}`);
  } catch (error) {
    console.log(error);

    yield put(searchProductsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* onSearchProductsStart() {
  yield takeLatest(productActionTypes.SEARCH_PRODUCTS_START, searchProducts);
}

export function* onSearchProductsUrlStart() {
  yield takeLatest(
    productActionTypes.SEARCH_URL_PRODUCT_START,
    searchProductUrl
  );
}

export function* onGetProductsDetailStart() {
  yield takeLatest(
    productActionTypes.GET_PRODUCT_DETAIL_START,
    getProductDetails
  );
}

export function* productSagas() {
  yield all([
    call(onSearchProductsStart),
    call(onGetProductsDetailStart),
    call(onSearchProductsUrlStart),
  ]);
}
