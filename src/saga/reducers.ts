import { StateType } from "../types/sagaTypes";

const initialState = {
	weatherFor5Day: null,
	weatherFor5DayError: null,
	currentWeather: null,
	currentWeatherError: null,
};

type RootAction = {
	type: string,
	payload: any
};

export default function rootReducer(
	state: StateType = initialState,
	action: RootAction
) {
	switch (action.type) {
	case "GET_5_DAY_WEATHER":
		return { ...state, weatherFor5Day: action.payload };
	case "SET_ERROR_5_DAY_WEATHER":
		return { ...state, weatherFor5DayError: action.payload };
	case "GET_CURRENT_WEATHER":
		return { ...state, currentWeather: action.payload };
	case "SET_ERROR_CURRENT_WEATHER": {
		return { ...state, currentWeatherError: action.payload };
	}
	default:
		return state;
	}
}
