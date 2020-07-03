import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        error: null
      }
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.FORGOT_PASSWORD_START:
      return {
        ...state,
        error: null
      }
    case UserActionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.RESET_PASSWORD_START:
      return {
        ...state,
        error: null
      }
    case UserActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.UPDATE_PASSWORD_START:
      return {
        ...state,
        error: null
      }
    case UserActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state;
  }
};

export default userReducer;
