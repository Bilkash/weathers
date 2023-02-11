import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import get5DayWeather from '../requests/get5DayWeather';

function* get5DayData():Generator<any> {
  try {
    const weather = yield get5DayWeather();
    yield put({type: 'GET_5_DAY_WEATHER', payload: weather});
  } catch (e) {
    yield put({type: 'SET_ERROR_5_DAY_WEATHER', payload: e})
  }
}

export function* rootSaga() {
  yield takeEvery('GET_WEATHER', get5DayData);
}
