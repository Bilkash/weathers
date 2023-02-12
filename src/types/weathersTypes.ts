export interface DayItemType {
  date: string,
  temp: number,
  weather: WeatherType[]
}

export type RootStackParamList = {
  [key: string]: { date: string } | undefined;
};

export type WeatherType = {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface ResponseType {
  config: any,
  data: Weather5DayType
}

export interface Weather5DayType {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherPoint[];
  city: City;
}

export interface RespondCurrentWeatherType {
  config: any,
  data: CurrentWeatherPoint
}

export interface CurrentWeatherPoint {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: WeatherCondition[];
  wind: Wind;
}

export interface WeatherPoint {
  dt: number;
  main: Main;
  weather: WeatherCondition[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_max?: number | undefined;
  temp_min?: number | undefined;
  feels_like?: number | undefined;
  // additional properties can be added here
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Rain {
  "3h"?: number;
}

export interface Sys {
  pod: "d" | "n";
}

export interface City {
  name: string;
  coord: Coordinates;
  country: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
