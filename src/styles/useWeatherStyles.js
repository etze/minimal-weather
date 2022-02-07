import { createUseStyles } from 'react-jss'

export const useHomeStyles = createUseStyles({
	home: {
		display: 'flex', flexWrap: 'wrap',
	},
	spinner: {
		display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px'
	},
	appLogo: {
		height: '40vmin',
		pointerEvents: 'none'
	}
})

export const useCardStyles = createUseStyles({

	collection_item: {
		boxSizing: 'border-box',
		padding: '15px',
		display: 'flex',
		flexDirection: 'column',
		marginBottom: '20px',
		alignItems: 'flex-start',
		width: '160px',
	},
	columns: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	initialAlign: {
		textAlign: 'initial'
	},
	weather_stateContainer: {
		display: 'flex', marginBottom: '10px'
	},
	weather_imageContainer: {
		marginRight: '5px'
	},
	title: {
		color: 'blue'
	},
	'@media screen and (max-width:899px)': {
		weather_stateName: {
			display: 'none'
		}
	},
	weather_stateName: {
		width: 'fit-content', whiteSpace: 'nowrap'
	},
	'@media screen and (max-width:800px)': {
		"collection_item": {
			"&:last-child": {
				display: "none !important"
			}
		}
	},
})
export const useArrowStyles = createUseStyles((theme) =>
({
	arrow: {
		transform: `rotate(${theme.input}deg)`,
		marginRight: '10px',
	},
	arrowContainer: {
		textAlign: 'left',
		marginTop: '10px',
		display: 'flex',
		flexDirection: 'row'
	}
}))