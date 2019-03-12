import { fork, all } from "redux-saga/effects";

import { userSagas } from "../ducks/user";

export default function* rootSaga() {
  yield all([fork(userSagas)]);
}
