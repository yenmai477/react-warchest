import { takeLatest, put, all, call } from "redux-saga/effects";
import apiCall from "../../utils/apiCall";

import { push } from "react-router-redux";
import UserActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  forgotPasswordFailure,
  resetPasswordFailure,
  resetPasswordSuccess,
  updatePasswordSuccess,
  updatePasswordFailure,
} from "./user.actions";

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
    yield put(push("/app"));
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
export function* signUp({
  payload: { name, email, password, passwordConfirm },
}) {
  try {
    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.post("/users/signup", { name, email, password, passwordConfirm })
    );
    const { user } = data.data;
    yield localStorage.setItem("token", data.token);
    yield put(signUpSuccess(user));
    yield put(push("/app"));
  } catch (error) {
    yield put(signUpFailure(error));
    yield put(hideLoading());
    if (error.response) {
      yield showMessage("error", error.response.data.message, 2, {
        top: 70,
      });
    } else {
      yield showMessage("error", "Có gì đó không đúng! Vui lòng thử lại.", 2, {
        top: 70,
      });
    }
  } finally {
    yield put(hideLoading());
  }
}
export function* forgotPassword({ payload: { email } }) {
  try {
    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.post("/users/forgotPassword", { email })
    );
    yield showMessage(
      "success",
      " Đã gửi mail, Vui lòng kiểm tra email của bạn",
      2,
      {
        top: 70,
      }
    );
  } catch (error) {
    yield put(forgotPasswordFailure(error));
    yield put(hideLoading());
    if (error.response) {
      yield showMessage("error", error.response.data.message, 2, {
        top: 70,
      });
    } else {
      yield showMessage("error", "Có gì đó không đúng! Vui lòng thử lại.", 2, {
        top: 70,
      });
    }
  } finally {
    yield put(hideLoading());
  }
}
export function* resetPassword({
  payload: { password, passwordConfirm, token, history },
}) {
  try {
    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.patch(`/users/resetPassword/${token}`, {
        password,
        passwordConfirm,
        token,
      })
    );
    const { user } = data.data;
    yield localStorage.setItem("token", data.token);
    yield put(resetPasswordSuccess(user));

    // yield put(push('/app'));
    history.push("/app");
  } catch (error) {
    yield put(resetPasswordFailure(error));
    yield put(hideLoading());
    if (error.response) {
      yield showMessage("error", error.response.data.message, 2, {
        top: 70,
      });
    } else {
      yield showMessage("error", "Có gì đó không đúng! Vui lòng thử lại.", 2, {
        top: 70,
      });
    }
  } finally {
    yield put(hideLoading());
  }
}
export function* updatePassword({
  payload: { passwordCurrent, password, passwordConfirm, history },
}) {
  try {
    yield put(showLoading());
    const { data } = yield call(() =>
      apiCall.patch(`/users/updateMyPassword`, {
        passwordCurrent,
        password,
        passwordConfirm,
      })
    );
    const { user } = data.data;
    yield localStorage.setItem("token", data.token);
    yield put(updatePasswordSuccess(user));
    // yield put(push('/app'));
    history.push("/app");
  } catch (error) {
    yield put(updatePasswordFailure(error));
    yield put(hideLoading());
    if (error.response) {
      yield showMessage("error", error.response.data.message, 2, {
        top: 70,
      });
    } else {
      yield showMessage("error", "Có gì đó không đúng! Vui lòng thử lại.", 2, {
        top: 70,
      });
    }
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
    yield put(hideLoading());
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
export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
export function* onForgotPassword() {
  yield takeLatest(UserActionTypes.FORGOT_PASSWORD_START, forgotPassword);
}
export function* onResetPassword() {
  yield takeLatest(UserActionTypes.RESET_PASSWORD_START, resetPassword);
}
export function* onUpdatePassword() {
  yield takeLatest(UserActionTypes.UPDATE_PASSWORD_START, updatePassword);
}
export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignUp),
    call(onForgotPassword),
    call(onResetPassword),
    call(onUpdatePassword),
  ]);
}
