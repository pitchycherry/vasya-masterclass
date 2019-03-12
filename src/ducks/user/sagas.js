import { all, takeLatest, put, call } from "redux-saga/effects";
// import * as services from "./services";
import * as actions from "./actions";
import * as types from "./types";

const awaiting = (data, duration) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });

function* fetchUserSaga({ id }) {
  const user = yield call(awaiting, { id, name: "Vasya" }, 2000);
  yield put(actions.fetchUserSuccess(user));
}

export default function* userRootSaga() {
  yield all([takeLatest(types.FETCH_USER_REQUEST, fetchUserSaga)]);
}
