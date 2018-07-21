import { takeEvery } from 'redux-saga/effects';

import { SAVE_SIZE, GET_SIZE } from '../../actions/constants/app';

export function* saveSize({payload}) {
  yield localStorage.setItem('productSize', JSON.stringify(payload));
}

export function* getSize() {
  yield localStorage.getItem('productSize');
}

/* ////////////////////////////////// */
/* WATCHERS */
/* ////////////////////////////////// */
export function* watchSaveFitSaga() {
  yield takeEvery(SAVE_SIZE, saveSize);
}

export function* watchGetFitSaga() {
  yield takeEvery(GET_SIZE, getSize);
}
