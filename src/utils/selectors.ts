export function modifyDate(date: string) {
	const today: string = new Date().toLocaleDateString('en-CA')
	const tomorrow = new Date()
	tomorrow.setDate(new Date().getDate() + 1)


	if (date) {
		if (date === today) {
			return 'Today'
		}
		else if (date === new Date(tomorrow).toLocaleDateString('en-CA')) {
			return "Tomorrow"
		} else {
			return new Date(date).toLocaleDateString('en-CA', {
				weekday: 'short',
				day: '2-digit',
				month: 'short',
			})
		}

	}

	return date
}