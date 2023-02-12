import axios, { AxiosError } from "axios";
// @ts-ignore
import { API_KEY, BASE_URL } from "@env";

import { RespondCurrentWeatherType } from "../types/weathersTypes";

import { cityLat, cityLon } from "../consts/requestConsts";

export default function getCurrentWeather() {
	return axios({
		method: "get",
		url: `${BASE_URL}/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=metric&appid=${API_KEY}`,
		responseType: "json"
	})
		.then((response: RespondCurrentWeatherType) => {
			return response.data;
		})
		.catch((er: AxiosError) => {
			return er?.response?.data;
		});
}
