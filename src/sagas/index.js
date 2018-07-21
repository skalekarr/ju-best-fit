import * as bestFitSaga from '../sagas/BestFit';

export default function* rootSaga() {
  yield [
    bestFitSaga.watchSaveFitSaga(),
    bestFitSaga.watchGetFitSaga(),
  ];
}
