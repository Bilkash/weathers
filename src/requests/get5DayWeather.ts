import axios from "axios";

import {weatherApiKey, cityLat, cityLon} from '../consts/requestConsts'

export default function get5DayWeather() {
  return axios({
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=metric&&appid=${weatherApiKey}`,
    responseType: 'json'
  })
    .then((response: any) => {
      return response.data
    })
    .catch((er: any) => {
      return er.response.data.message
    });
}
