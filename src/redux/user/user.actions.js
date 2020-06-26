import UserActionTypes from "./user.types";

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: UserActionTypes.SIGN_OUT,
  };
};

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
export const forgotPasswordStart = (email) => ({
  type: UserActionTypes.FORGOT_PASSWORD_START,
  payload: email
});
export const forgotPasswordSuccess = (email) => ({
  type: UserActionTypes.FORGOT_PASSWORD_SUCCESS,
  payload: email,
});

export const forgotPasswordFailure = (error) => ({
  type: UserActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error,
});
export const resetPasswordStart = (password) => ({
  type: UserActionTypes.RESET_PASSWORD_START,
  payload: password
});
export const resetPasswordSuccess = (password) => ({
  type: UserActionTypes.RESET_PASSWORD_SUCCESS,
  payload: password,
});

export const resetPasswordFailure = (error) => ({
  type: UserActionTypes.RESET_PASSWORD_FAILURE,
  payload: error,
});