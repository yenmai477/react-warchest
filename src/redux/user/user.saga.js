import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import UserActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import showMessage from "../../utils/showMessage";

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    console.log("here");

    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.post("/users/login", { email, password })
    );
    const { user } = data.data;
    yield localStorage.setItem("token", data.token);
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
    yield put(hideLoading());
    yield showMessage("error", "Đăng nhập thất bại! Vui lòng thử lại.", 2, {
      top: 70,
    });
  } finally {
    yield put(hideLoading());
  }
}

export function* isUserAuthenticated() {
  try {
    const { data } = yield call(() => apiCall.get("/users/me"));
    const { data: user } = data;
    console.log(user);
    if (!user) return;
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onEmailSignInStart), call(onCheckUserSession)]);
}
