import { applyMiddleware, createStore } from 'redux';
import { all, call } from 'redux-saga/effects';
import { weatherReducer } from "./weather/reducers";
import WeatherSaga from "./weather/saga";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'

export function* rootSaga() {
	yield all([
		call(WeatherSaga),
	])
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(weatherReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
