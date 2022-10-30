import visit from './class-visit.js'
import request from './request-create.js'
import { cardnothing, cardnothingQuestion } from './mudule_register.js'

class Create {
	constructor() {
		this.mainCard = document.querySelector('.main-cards')
		this.url = 'https://ajax.test-danit.com/api/v2/cards'
	}

	renderCard({
		doctor,
		title,
		description,
		weight,
		age,
		id,
		priority,
		full_name,
		diseases,
		mass_index,
		pressure,
		data_pressure,
		register_time,
		register_data,
		age_therapevt,
	}) {
		const card = document.createElement('div')
		card.setAttribute('data-id', id)
		card.classList.add('card')
		if (doctor === '1') {
			doctor = "Cardiologist"
			card.innerHTML = `
			<img class="img__Doctor" src="./img/firstPeople.png">
			<div>
			<p class="card__name">${full_name}</p><br/>
			<div class="card__time-register">
		<p class="card__register-time">${register_data}</p>
		<p class="card__register-data">${register_time}</p><br/>
		</div><br/>
        <p class="card__doctor">Doctor:<span class="card__doctor-num">${doctor}</span></p><br/>
		<p class="card__priority">priority:<span class="card__priority-num">${priority}</span></p><br/>
			<p class="card__show">Show more</p>
			<svg class="card__edit" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.8508 26.4167H11.1491C10.8545 26.4168 10.5688 26.3161 10.3392 26.1314C10.1097 25.9468 9.9502 25.6892 9.88716 25.4015L9.36145 22.968C8.66015 22.6607 7.99517 22.2764 7.37874 21.8223L5.00595 22.5779C4.7251 22.6674 4.42205 22.6582 4.14715 22.5518C3.87224 22.4454 3.64202 22.2481 3.4947 21.9928L1.1387 17.9227C0.992932 17.6671 0.938213 17.3696 0.983499 17.0789C1.02878 16.7882 1.17139 16.5215 1.38799 16.3223L3.22862 14.6432C3.14491 13.8825 3.14491 13.115 3.22862 12.3543L1.38799 10.679C1.17109 10.4798 1.02828 10.2128 0.982991 9.92184C0.937698 9.63084 0.992601 9.33309 1.1387 9.07737L3.48954 5.00475C3.63685 4.74941 3.86708 4.55214 4.14198 4.4457C4.41689 4.33926 4.71993 4.33006 5.00079 4.41962L7.37358 5.17525C7.68874 4.94275 8.01683 4.72575 8.35524 4.52942C8.68204 4.346 9.01787 4.17937 9.36145 4.03083L9.88845 1.59992C9.95119 1.31213 10.1104 1.05443 10.3397 0.869541C10.569 0.684653 10.8546 0.583684 11.1491 0.583374H15.8508C16.1453 0.583684 16.4309 0.684653 16.6602 0.869541C16.8895 1.05443 17.0487 1.31213 17.1115 1.59992L17.6436 4.03212C18.344 4.34118 19.0088 4.72533 19.6263 5.17783L22.0004 4.42221C22.2811 4.33297 22.5838 4.34234 22.8585 4.44877C23.1331 4.55519 23.3631 4.75227 23.5104 5.00733L25.8612 9.07996C26.1609 9.60567 26.0575 10.2709 25.6119 10.6803L23.7713 12.3595C23.855 13.1201 23.855 13.8877 23.7713 14.6483L25.6119 16.3275C26.0575 16.7383 26.1609 17.4022 25.8612 17.9279L23.5104 22.0005C23.3631 22.2558 23.1328 22.4531 22.8579 22.5596C22.583 22.666 22.28 22.6752 21.9991 22.5856L19.6263 21.83C19.0104 22.2838 18.3458 22.6677 17.6449 22.9744L17.1115 25.4015C17.0485 25.689 16.8891 25.9464 16.6599 26.131C16.4306 26.3157 16.1452 26.4165 15.8508 26.4167V26.4167ZM13.4948 8.33337C12.1245 8.33337 10.8103 8.87772 9.8414 9.84666C8.87246 10.8156 8.32812 12.1298 8.32812 13.5C8.32812 14.8703 8.87246 16.1845 9.8414 17.1534C10.8103 18.1224 12.1245 18.6667 13.4948 18.6667C14.8651 18.6667 16.1792 18.1224 17.1482 17.1534C18.1171 16.1845 18.6615 14.8703 18.6615 13.5C18.6615 12.1298 18.1171 10.8156 17.1482 9.84666C16.1792 8.87772 14.8651 8.33337 13.4948 8.33337V8.33337Z" fill="#00A6ED"/>
	</svg>
			</div>
			

	
			`
		} else if (doctor === '2') {
			doctor = "Dantist"
			card.innerHTML = `
		<img class="img__Doctor" src="./img/secondlyPeople.png">
		<div>
		<p class="card__name">${full_name}</p><br/>
		<div class="card__time-register">
		<p class="card__register-time">${register_data}</p>
		<p class="card__register-data">${register_time}</p><br/>
		</div><br/>
        <p class="card__doctor">Doctor:<span class="card__doctor-num">${doctor}</span></p><br/>
		<p class="card__priority">priority:<span class="card__priority-num">${priority}</span></p><br/>
        <p class="card__show">Show more</p>
		<svg class="card__edit" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8508 26.4167H11.1491C10.8545 26.4168 10.5688 26.3161 10.3392 26.1314C10.1097 25.9468 9.9502 25.6892 9.88716 25.4015L9.36145 22.968C8.66015 22.6607 7.99517 22.2764 7.37874 21.8223L5.00595 22.5779C4.7251 22.6674 4.42205 22.6582 4.14715 22.5518C3.87224 22.4454 3.64202 22.2481 3.4947 21.9928L1.1387 17.9227C0.992932 17.6671 0.938213 17.3696 0.983499 17.0789C1.02878 16.7882 1.17139 16.5215 1.38799 16.3223L3.22862 14.6432C3.14491 13.8825 3.14491 13.115 3.22862 12.3543L1.38799 10.679C1.17109 10.4798 1.02828 10.2128 0.982991 9.92184C0.937698 9.63084 0.992601 9.33309 1.1387 9.07737L3.48954 5.00475C3.63685 4.74941 3.86708 4.55214 4.14198 4.4457C4.41689 4.33926 4.71993 4.33006 5.00079 4.41962L7.37358 5.17525C7.68874 4.94275 8.01683 4.72575 8.35524 4.52942C8.68204 4.346 9.01787 4.17937 9.36145 4.03083L9.88845 1.59992C9.95119 1.31213 10.1104 1.05443 10.3397 0.869541C10.569 0.684653 10.8546 0.583684 11.1491 0.583374H15.8508C16.1453 0.583684 16.4309 0.684653 16.6602 0.869541C16.8895 1.05443 17.0487 1.31213 17.1115 1.59992L17.6436 4.03212C18.344 4.34118 19.0088 4.72533 19.6263 5.17783L22.0004 4.42221C22.2811 4.33297 22.5838 4.34234 22.8585 4.44877C23.1331 4.55519 23.3631 4.75227 23.5104 5.00733L25.8612 9.07996C26.1609 9.60567 26.0575 10.2709 25.6119 10.6803L23.7713 12.3595C23.855 13.1201 23.855 13.8877 23.7713 14.6483L25.6119 16.3275C26.0575 16.7383 26.1609 17.4022 25.8612 17.9279L23.5104 22.0005C23.3631 22.2558 23.1328 22.4531 22.8579 22.5596C22.583 22.666 22.28 22.6752 21.9991 22.5856L19.6263 21.83C19.0104 22.2838 18.3458 22.6677 17.6449 22.9744L17.1115 25.4015C17.0485 25.689 16.8891 25.9464 16.6599 26.131C16.4306 26.3157 16.1452 26.4165 15.8508 26.4167V26.4167ZM13.4948 8.33337C12.1245 8.33337 10.8103 8.87772 9.8414 9.84666C8.87246 10.8156 8.32812 12.1298 8.32812 13.5C8.32812 14.8703 8.87246 16.1845 9.8414 17.1534C10.8103 18.1224 12.1245 18.6667 13.4948 18.6667C14.8651 18.6667 16.1792 18.1224 17.1482 17.1534C18.1171 16.1845 18.6615 14.8703 18.6615 13.5C18.6615 12.1298 18.1171 10.8156 17.1482 9.84666C16.1792 8.87772 14.8651 8.33337 13.4948 8.33337V8.33337Z" fill="#00A6ED"/>
</svg>
		</div>
		

        `
		} else if (doctor === '3') {
			doctor = "Therapist"
			card.innerHTML = `
			<img class="img__Doctor" src="./img/threePeople.png">
			<div>
			<p class="card__name">${full_name}</p><br/>
			<div class="card__time-register">
		<p class="card__register-time">${register_data}</p>
		<p class="card__register-data">${register_time}</p><br/>
		</div><br/>
        <p class="card__doctor">Doctor:<span class="card__doctor-num">${doctor}</span></p><br/>
		<p class="card__priority">priority:<span class="card__priority-num">${priority}</span></p><br/>
			<p class="card__show">Show more</p>
			<svg class="card__edit" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.8508 26.4167H11.1491C10.8545 26.4168 10.5688 26.3161 10.3392 26.1314C10.1097 25.9468 9.9502 25.6892 9.88716 25.4015L9.36145 22.968C8.66015 22.6607 7.99517 22.2764 7.37874 21.8223L5.00595 22.5779C4.7251 22.6674 4.42205 22.6582 4.14715 22.5518C3.87224 22.4454 3.64202 22.2481 3.4947 21.9928L1.1387 17.9227C0.992932 17.6671 0.938213 17.3696 0.983499 17.0789C1.02878 16.7882 1.17139 16.5215 1.38799 16.3223L3.22862 14.6432C3.14491 13.8825 3.14491 13.115 3.22862 12.3543L1.38799 10.679C1.17109 10.4798 1.02828 10.2128 0.982991 9.92184C0.937698 9.63084 0.992601 9.33309 1.1387 9.07737L3.48954 5.00475C3.63685 4.74941 3.86708 4.55214 4.14198 4.4457C4.41689 4.33926 4.71993 4.33006 5.00079 4.41962L7.37358 5.17525C7.68874 4.94275 8.01683 4.72575 8.35524 4.52942C8.68204 4.346 9.01787 4.17937 9.36145 4.03083L9.88845 1.59992C9.95119 1.31213 10.1104 1.05443 10.3397 0.869541C10.569 0.684653 10.8546 0.583684 11.1491 0.583374H15.8508C16.1453 0.583684 16.4309 0.684653 16.6602 0.869541C16.8895 1.05443 17.0487 1.31213 17.1115 1.59992L17.6436 4.03212C18.344 4.34118 19.0088 4.72533 19.6263 5.17783L22.0004 4.42221C22.2811 4.33297 22.5838 4.34234 22.8585 4.44877C23.1331 4.55519 23.3631 4.75227 23.5104 5.00733L25.8612 9.07996C26.1609 9.60567 26.0575 10.2709 25.6119 10.6803L23.7713 12.3595C23.855 13.1201 23.855 13.8877 23.7713 14.6483L25.6119 16.3275C26.0575 16.7383 26.1609 17.4022 25.8612 17.9279L23.5104 22.0005C23.3631 22.2558 23.1328 22.4531 22.8579 22.5596C22.583 22.666 22.28 22.6752 21.9991 22.5856L19.6263 21.83C19.0104 22.2838 18.3458 22.6677 17.6449 22.9744L17.1115 25.4015C17.0485 25.689 16.8891 25.9464 16.6599 26.131C16.4306 26.3157 16.1452 26.4165 15.8508 26.4167V26.4167ZM13.4948 8.33337C12.1245 8.33337 10.8103 8.87772 9.8414 9.84666C8.87246 10.8156 8.32812 12.1298 8.32812 13.5C8.32812 14.8703 8.87246 16.1845 9.8414 17.1534C10.8103 18.1224 12.1245 18.6667 13.4948 18.6667C14.8651 18.6667 16.1792 18.1224 17.1482 17.1534C18.1171 16.1845 18.6615 14.8703 18.6615 13.5C18.6615 12.1298 18.1171 10.8156 17.1482 9.84666C16.1792 8.87772 14.8651 8.33337 13.4948 8.33337V8.33337Z" fill="#00A6ED"/>
	</svg>
	
			</div>

			
			`
		}


		this.showMore(
			doctor,
			card,
			title,
			description,
			weight,
			age,
			id,
			priority,
			full_name,
			diseases,
			mass_index,
			pressure,
			data_pressure,
			age_therapevt,
			register_time,
			register_data
		)
		this.mainCard.append(card)
		this.edit(card, id)

	}
	showMore(
		doctor,
		card,
		title,
		description,
		weight,
		age,
		id,
		priority,
		full_name,
		diseases,
		mass_index,
		pressure,
		data_pressure,
		age_therapevt,
		register_time,
		register_data,
	) {
		const show = card.querySelector('.card__show')
		const more = document.createElement('div')
		more.classList.add('more')
		card.append(more)
		const moreHide = card.querySelector('.card__show')
		const afterpriority = card.querySelector('.card__priority')
		afterpriority.after(more)
		if (doctor === 'Cardiologist') {
			more.innerHTML = `
            <p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
            <p class="card__pressure">pressure:<span class="card__pressure-num">${pressure}</span></p>
			<p class="card__mass_index">mass index:<span class="card__mass_index-num">${mass_index}</span></p>
			<p class="card__diseases">diseases:<span class="card__diseases-num">${diseases}</span></p>
			<p class="card__age">age:<span class="card__age-num">${age}</span></p>
			<p class="card-close">Delete Card</p>
            `
		} else if (doctor === 'Dantist') {
			more.innerHTML = `
            <p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
			<p class="data_pressure">data_pressure:<span class="card__data_pressure-num">${data_pressure}</span></p>
				<p class="card-close">Delete Card</p>
                `
		} else if (doctor === 'Therapist') {
			more.innerHTML = `
            <p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
			<p class="card__age-therapevt">age:<span class="card__card__age-therapevt-num">${age_therapevt}</span></p>
			<p class="card-close">Delete Card</p>
            `
		}
		show.addEventListener('click', e => {
			e.preventDefault()
			moreHide.classList.toggle('moreHide')
			more.classList.toggle('visible')

			if (show.textContent === 'Show more') {
				show.textContent = 'Hide'
			} else {
				show.textContent = 'Show more'
			}
		})
		const closeButton = card.querySelector('.card-close')
		closeButton.addEventListener('click', () => {
			console.log(closeButton);
			let token = localStorage.getItem('token')
			fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			card.remove()

			if (this.mainCard.childNodes.length == '1') {
				// cardnothing.textContent = 'No items have been added'
				cardnothing.classList.remove('display-none')
				cardnothingQuestion.classList.remove('display-none')
			}
		})
	}

	updateCard({
		title,
		description,
		age,
		doctor,
		priority,
		full_name,
		id,
		diseases,
		mass_index,
		pressure,
		data_pressure,
		age_therapevt,
		register_time,
		register_data,
	}) {
		const card = this.mainCard.querySelector(`[data-id="${id}"]`)
		const titleElement = card.querySelector('.card__title')
		const descriptionElement = card.querySelector('.card__description')
		const priorityElement = card.querySelector('.card__priority-num')
		const doctorElement = card.querySelector('.card__doctor-num')
		const NameElement = card.querySelector('.card__name')
		const more = card.querySelector('.more')
		const registerTime = card.querySelector('.card__register-time')
		const registerData = card.querySelector('.card__register-data')

		titleElement.textContent = `title:${title}`
		descriptionElement.textContent = `description:${description}`
		priorityElement.textContent = `${priority}`
		switch (doctor) {
			case '1':
				doctor = "Cardiologist"
				break;
			case '2':
				doctor = "Dantist"
				break;
			case '3':
				doctor = "Therapist"
				break;
			default:
				alert("You didn't choose doctor ");
		}
		doctorElement.textContent = `${doctor}`
		NameElement.textContent = `${full_name}`
		registerTime.textContent = `${register_time}`
		registerData.textContent = `${register_data}`

		if (doctor === 'Cardiologist') {
			more.innerHTML = `
            <p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
            <p class="card__pressure">pressure:<span class="card__pressure-num">${pressure}</span></p>
			<p class="card__mass_index">mass index:<span class="card__mass_index-num">${mass_index}</span></p>
			<p class="card__diseases">diseases:<span class="card__diseases-num">${diseases}</span></p>
			<p class="card__age">age:<span class="card__age-num">${age}</span></p>
			<p class="card-close">Delete Card</p>
            `
		}
		if (doctor === 'Dantist') {

			more.innerHTML = `
			<p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
			<p class="data_pressure">data_pressure:<span class="card__data_pressure-num">${data_pressure}</span></p>
			<p class="card-close">Delete Card</p>
                `
			// <p class="card__title">title:${title}</p>
			// <p class="card__description">description:${description}</p>
			// <p class="card__priority">priority:<span class="card__priority-num">${priority}</span></p><br/>
			// <p class="card__data">Last data:${data_pressure}</p>
		}
		if (doctor === 'Therapist') {

			more.innerHTML = `
			<p class="card__title">title:<span class="card__title-num">${title}</span></p>
			<p class="card__description">description:<span class="card__description-num">${description}</span></p>
			<p class="card__age-therapevt">age:<span class="card__card__age-therapevt-num">${age_therapevt}</span></p>
			<p class="card-close">Delete Card</p>
        `
		}
		const closeButton = card.querySelector('.card-close')
		closeButton.addEventListener('click', () => {
			let token = localStorage.getItem('token')
			fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			card.remove()

			if (this.mainCard.childNodes.length == '1') {
				// cardnothing.textContent = 'No items have been added'
				cardnothing.classList.remove('display-none')
				cardnothingQuestion.classList.remove('display-none')
			}
		})
	}
	edit(card, id) {
		const edit = card.querySelector('.card__edit')

		edit.addEventListener('click', e => {
			const url = this.url + '/' + id
			let token = localStorage.getItem('token')

			fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(response => response.json())
				.then(response => {
					visit.createCard(response)
				})
		})
	}
}

const create = new Create()

export default create
