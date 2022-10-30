class Filter {
	searchFilter() {
		const search = document.querySelector('#formSearch')
		search.addEventListener('keyup', e => {
			e.preventDefault()
			const cardTitle = document.querySelectorAll('.card__title')
			const cardDescription = document.querySelectorAll('.card__description')

			cardDescription.forEach(el => {
				const cardDescText = el.innerText.split(':')[1]

				if (!cardDescText.includes(e.key)) {
					el.parentElement.parentElement.parentElement.style.display = 'none'
				} else {
					el.parentElement.parentElement.parentElement.style.display = 'flex'
				}
				if (
					e.target.value === '' ||
					e.target.value === undefined ||
					e.target.value === ' '
				) {
					el.parentElement.parentElement.parentElement.style.display = 'flex'
				}
				// this.searchUrgency()
			})
			cardTitle.forEach(el => {
				const cardTitleText = el.innerText.split(':')[1]
				if (!cardTitleText.includes(e.key)) {
					el.parentElement.parentElement.parentElement.style.display = 'none'
				} else {
					el.parentElement.parentElement.parentElement.style.display = 'flex'
				}
				if (
					e.target.value === '' ||
					e.target.value === undefined ||
					e.target.value === ' '
				) {
					el.parentElement.parentElement.parentElement.style.display = 'flex'
				}
				// this.searchUrgency()
			})
		})
		const urgency = document.querySelector('#formUrgency')

		urgency.addEventListener('change', e => {
			e.preventDefault()
			const allCards = document.querySelectorAll('.card')
			const urgencyValue = urgency.options[urgency.selectedIndex].value

			allCards.forEach(card => {
				const stringPriority = card.querySelector('.card__priority')
				console.log(stringPriority);
				let priority = stringPriority.innerText.slice(9)
				if (urgencyValue == priority) {
					card.style.display = 'flex'
				} else {
					card.style.display = 'none'
				}
			})
		})

	}

}

export default Filter
