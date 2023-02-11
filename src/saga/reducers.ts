import { StateType } from "../types/sagaTypes";

const initialState = {
	day: null,
	weatherFor5Day: null,
	weatherFor5DayError: null
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
	case "SET_DAY":
		return { ...state, day: action.payload };
	case "CLEAR_DAY":
		return { ...state, day: null };
	case "GET_5_DAY_WEATHER":
		return { ...state, weatherFor5Day: action.payload };
	case "SET_ERROR_5_DAY_WEATHER":
		return { ...state, weatherFor5DayError: action.payload };
	default:
		return state;
	}
}
