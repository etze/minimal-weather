export enum WeatherActionTypes {
	FETCH_WEATHER = '@@weather/FETCH_WEATHER',
	SET_WEATHER = '@@weather/SET_WEATHER',
	SET_ERROR = '@@weather/SET_ERROR',
}

export interface ILocation {
	// METAWEATHER api Requires no input
}

export interface IWeather {
	readonly title: string
	readonly weather_state_name: string
	readonly applicable_date: string
	readonly max_temp: number
	readonly min_temp: number
	readonly wind_speed: number
	readonly wind_direction: number
	readonly weather_state_abbr: string,
	readonly created: Date
}
export interface WeatherState {
	weatherData: IWeather[]
	title: string
	time: Date
}

