import { takeEvery, put } from "redux-saga/effects";
import get5DayWeather from "../requests/get5DayWeather";
import getCurrentWeather from "../requests/getCurrentWeather";

function* get5DayData():Generator<any> {
	try {
		const weather = yield get5DayWeather();
		yield put({ type: "GET_5_DAY_WEATHER", payload: weather });
	} catch (e) {
		yield put({ type: "SET_ERROR_5_DAY_WEATHER", payload: e });
	}
}

function* getCurrentData():Generator<any> {
	try {
		const currentWeather = yield getCurrentWeather();
		yield put({ type: "GET_CURRENT_WEATHER", payload: currentWeather });
	} catch (e) {
		yield put({ type: "SET_ERROR_CURRENT_WEATHER", payload: e });
	}
}

export function* rootSaga() {
	yield takeEvery("GET_WEATHER_DATA", get5DayData);
	yield takeEvery("GET_CURRENT_WEATHER_DATA", getCurrentData);
}
