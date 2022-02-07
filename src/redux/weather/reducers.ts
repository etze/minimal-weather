
import { Reducer } from 'redux'
import { WeatherActionTypes, WeatherState } from './types'

export const initialState: WeatherState = {
	weatherData: [],
	time: undefined,
	title: undefined,

}

const reducer: Reducer<WeatherState> = (state = initialState, action) => {
	switch (action.type) {
		case WeatherActionTypes.FETCH_WEATHER: {
			return { ...state }
		}
		case WeatherActionTypes.SET_WEATHER: {
			return { ...state, ...action.payload }
		}
		case WeatherActionTypes.SET_ERROR: {
			return { ...state }
		}
		default: {
			return state
		}
	}
}

export { reducer as weatherReducer }
