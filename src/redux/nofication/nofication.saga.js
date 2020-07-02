import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import noficationActionTypes from "./nofication.types";

import { showLoading, hideLoading } from "react-redux-loading-bar";
import showMessage from "../../utils/showMessage";

export function* addNofication({ payload: params }) {
  try {
    yield put(showLoading());
    console.log(params);

    const { data } = yield call(() => apiCall.post(`/products`, params));
    const nofication = data.data.data;
    // yield put(searchProductsSucess(products));
  } catch (error) {
    // yield put(searchProductsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* onAddNoficationStart() {
  yield takeLatest(noficationActionTypes.ADD_NOFICATION_START, addNofication);
}

export function* noficationSagas() {
  yield all([call(onAddNoficationStart)]);
}
