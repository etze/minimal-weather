import React from 'react';
import { IWeather } from '../redux/weather/types';
import { useArrowStyles, useCardStyles } from '../styles/useWeatherStyles';
import { modifyDate } from '../utils/selectors';
export function WeatherCard({
	applicable_date,
	max_temp,
	min_temp,
	weather_state_abbr,
	weather_state_name,
	wind_direction,
	wind_speed,
}: IWeather) {

	const { collection_item,
		weather_stateContainer, title, weather_imageContainer, weather_stateName } = useCardStyles()
	const { arrow, arrowContainer } = useArrowStyles({ theme: { input: wind_direction + 180 } })
	return <div
		className={collection_item}
	>
		<div>
			<p className={title}>
				{modifyDate(applicable_date)}
			</p>
		</div>
		<div className={weather_stateContainer}
		>
			<div className={weather_imageContainer}>
				<img
					width={32}
					height={32}
					alt={weather_state_name}
					src={require(`../assets/${weather_state_abbr}.svg`)} />
			</div>
			<div className={weather_stateName}>
				{weather_state_name}
			</div>
		</div>
		<div>
			{`Max: ${Math.round(max_temp)}°C`}
		</div>
		<div>
			{`Min: ${Math.floor(min_temp)}°C`}
		</div>
		<div className={arrowContainer} >
			<div className={arrow} > {`∆ `} </div>
			<div>{`${wind_speed ^ 0}mph`} </div>
		</div>
	</div >;
}
