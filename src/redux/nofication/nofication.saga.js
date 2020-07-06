import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import noficationActionTypes from "./nofication.types";

import {
  getNoficationDetailSucess,
  addNoficationSucess,
  updateNoficationDetailSucess,
  getNoficationsSucess,
  getNoficationsFailure,
  deleteNoficationDetailSucess,
  setNoficationLoading,
} from "./nofication.action";

import { showLoading, hideLoading } from "react-redux-loading-bar";
import showMessage from "../../utils/showMessage";

export function* addNofication({ payload: params }) {
  try {
    yield put(showLoading());
    const { data } = yield call(() => apiCall.post(`/nofications`, params));
    const nofication = data.data.data;
    yield put(addNoficationSucess(nofication));
    showMessage("success", "Thêm đăng ký theo dõi giá thành công", 3);
  } catch (error) {
    // yield put(searchProductsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* getNoficationDetail({ payload: productId }) {
  try {
    // yield put(showLoading());

    console.log(productId);

    const { data } = yield call(() =>
      apiCall.get(`/nofications/product/${productId}`)
    );
    let nofication = data.data.data;
    if (nofication && nofication.length) {
      nofication = nofication[0];
      yield put(getNoficationDetailSucess(nofication));
    }
  } catch (error) {
    // yield put(searchProductsFailure(error));
    // yield put(hideLoading());
  } finally {
    // yield put(hideLoading());
  }
}

export function* getUserNofications() {
  try {
    yield put(showLoading());
    yield put(setNoficationLoading());
    const { data } = yield call(() => apiCall.get(`/users/me/nofications`));
    let nofications = data.data.data;
    yield put(getNoficationsSucess(nofications));
  } catch (error) {
    yield put(getNoficationsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}

export function* updateNoficationDetail({ payload: params }) {
  try {
    yield put(showLoading());
    const { id, active } = params;
    const action = active ? "Kích hoạt" : "Hủy đăng kí";
    const { data } = yield call(() =>
      apiCall.patch(`/nofications/${id}`, params)
    );
    const nofication = data.data.data;
    yield put(updateNoficationDetailSucess(nofication));
    showMessage("success", `${action} theo dõi giá thành công`, 3);
  } catch (error) {
    // yield put(searchProductsFailure(error));
    yield put(hideLoading());
  } finally {
    yield put(hideLoading());
  }
}
export function* deleteNoficationDetail({ payload: id }) {
  try {
    yield put(showLoading());

    yield call(() => apiCall.delete(`/nofications/${id}`));
    yield put(deleteNoficationDetailSucess(id));
    showMessage("success", `Xóa theo dõi giá thành công`, 3);
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

export function* onGetNoficationDetailStart() {
  yield takeLatest(
    noficationActionTypes.GET_NOFICATION_DETAIL_START,
    getNoficationDetail
  );
}

export function* onUpdateNoficationDetailStart() {
  yield takeLatest(
    noficationActionTypes.UPDATE_NOFICATION_DETAIL_START,
    updateNoficationDetail
  );
}

export function* onGetUserNoficationsStart() {
  yield takeLatest(
    noficationActionTypes.GET_NOFICATIONS_START,
    getUserNofications
  );
}
export function* onDeleteNoficationDetailStart() {
  yield takeLatest(
    noficationActionTypes.DELETE_NOFICATION_DETAIL_START,
    deleteNoficationDetail
  );
}

export function* noficationSagas() {
  yield all([
    call(onAddNoficationStart),
    call(onGetNoficationDetailStart),
    call(onUpdateNoficationDetailStart),
    call(onGetUserNoficationsStart),
    call(onDeleteNoficationDetailStart),
  ]);
}
