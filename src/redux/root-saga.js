import { all, call } from "redux-saga/effects";
import { countSagas } from "./count/count.saga";

export default function* rootSaga() {
  yield all([call(countSagas)]);
}
