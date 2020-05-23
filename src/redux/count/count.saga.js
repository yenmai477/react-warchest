import { takeLatest, delay, put, call, all } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function* onIncrement() {
  try {
    yield put(showLoading());
    yield console.log("I am incremented");
    yield delay(3000);
    yield put({ type: "INCREMENT" });
  } finally {
    yield put(hideLoading());
  }
}

function* incrementSaga() {
  yield takeLatest("INCREMENT_START", onIncrement);
}

export function* countSagas() {
  yield all([call(incrementSaga)]);
}
