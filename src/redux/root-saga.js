import { all, call } from "redux-saga/effects";
import { countSagas } from "./count/count.saga";
import { userSagas } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(countSagas), call(userSagas)]);
}
