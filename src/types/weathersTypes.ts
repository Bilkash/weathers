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
