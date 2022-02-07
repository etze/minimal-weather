import { all, call, put, takeLatest } from 'redux-saga/effects';
import { weatherApi } from '../../services/api/useWeatherAPI';
import { weatherSetter } from './actions';
import { WeatherActionTypes } from './types';

export function* provideDataFromMetaweather() {
  try {
    const response = yield call(weatherApi);
    if (response.status === 200) {
      const { title, time, consolidated_weather: weatherData } = yield response.data
      yield put(weatherSetter({ weatherData, title, time }))
    }
  } catch (error) {
    yield put({ type: WeatherActionTypes.SET_ERROR, error });
  }
}


export function* watchFetchingWeatherData() {
  yield takeLatest(WeatherActionTypes.FETCH_WEATHER, provideDataFromMetaweather);
}

function* weatherSaga() {
  yield all([
    call(watchFetchingWeatherData),
  ])
}

export default weatherSaga
