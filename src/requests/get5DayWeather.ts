import axios, { AxiosError } from "axios";

import { weatherApiKey, cityLat, cityLon } from "../consts/requestConsts";
import { ResponseType } from "../types/weathersTypes";

export default function get5DayWeather() {
	return axios({
		method: "get",
		url: `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=metric&&appid=${weatherApiKey}`,
		responseType: "json"
	})
		.then((response: ResponseType) => {
			return response.data;
		})
		.catch((er: AxiosError) => {
			return er?.response?.data;
		});
}
