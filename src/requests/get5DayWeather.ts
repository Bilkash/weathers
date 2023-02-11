import axios, { AxiosError } from "axios";
import { API_KEY, BASE_URL } from "@env";

import { ResponseType } from "../types/weathersTypes";

import { cityLat, cityLon } from "../consts/requestConsts";

export default function get5DayWeather() {
	return axios({
		method: "get",
		url: `${BASE_URL}/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=metric&&appid=${API_KEY}`,
		responseType: "json"
	})
		.then((response: ResponseType) => {
			return response.data;
		})
		.catch((er: AxiosError) => {
			return er?.response?.data;
		});
}
