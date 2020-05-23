import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import UserActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    console.log("here");

    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.post("/users/login", { email, password })
    );
    const { user } = data.data;
    yield console.log(data);

    yield localStorage.setItem("token", data.token);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  } finally {
    yield put(hideLoading());
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart)]);
}
