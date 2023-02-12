import { CurrentWeatherPoint, Weather5DayType } from "./weathersTypes";

export type StateType = {
  weatherFor5Day: Weather5DayType | null,
  weatherFor5DayError: string | null,
  currentWeather: CurrentWeatherPoint | null,
  currentWeatherError: string | null;
}
