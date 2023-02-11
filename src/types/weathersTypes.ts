export interface DayItemType {
  date: string,
  temp: number,
  weather: WeatherType[]
}

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
