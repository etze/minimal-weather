import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import LocationCard from '../../components/LocationCard';
import { WeatherCard } from '../../components/WeatherCard';
import logo from '../../logo.svg';
import { WeatherState } from '../../redux/weather/types';
import { useHomeStyles } from '../../styles/useWeatherStyles';

export default function Home() {
	const { weatherData, time = weatherData[0]?.created, title } = useSelector(({ weatherData, time, title }: WeatherState): WeatherState => {
		return {
			title,
			time,
			weatherData: weatherData.filter(dataPerDay =>
				[
					dataPerDay.applicable_date,
					dataPerDay.title,
					dataPerDay.weather_state_name,
					dataPerDay.max_temp,
					dataPerDay.min_temp,
					dataPerDay.wind_direction,
					dataPerDay.wind_speed
				])
		}
	});

	const { home, spinner } = useHomeStyles()
	return (
		weatherData.length ?
			<div className={home}>
				<LocationCard
					time={time} locationTitle={title} />
				{weatherData.map((weatherData, index) =>
					<WeatherCard key={index} 	{...weatherData} />)}
			</div> :
			<div className={spinner}>
				<img
					src={logo}
					className="App-logo"
					alt="logo" />
			</div>
	)
}
