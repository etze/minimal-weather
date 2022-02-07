import { action } from 'typesafe-actions'
import { ILocation, IWeather, WeatherActionTypes } from './types'

export const weatherGetter = (data: ILocation) => action(WeatherActionTypes.FETCH_WEATHER, data);
export const weatherSetter = (data: IWeather[]) => action(WeatherActionTypes.SET_WEATHER, data);
export const errorSetter = (data: any) => action(WeatherActionTypes.SET_ERROR, data)

