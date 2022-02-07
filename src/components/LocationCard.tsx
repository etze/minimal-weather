import moment from 'moment';
import { useCardStyles } from '../styles/useWeatherStyles';


interface LocationCardProps {
	locationTitle: string,
	time: Date
}
export default function LocationCard({ time, locationTitle }: LocationCardProps) {

	const momentDiff = moment(time).fromNow()
	const { collection_item, title, columns, initialAlign } = useCardStyles()

	return <div className={collection_item}>
		<div >
			<h3 className={title}>{locationTitle}</h3>
		</div>
		<div className={columns} >
			<div>
				{new Date(time)?.toLocaleString('en-US',
					{ hour: 'numeric', minute: '2-digit', hour12: true })}
			</div>
			<div className={initialAlign}>
				{`Updated ${momentDiff}`}
			</div>
		</div>
	</div>
}
