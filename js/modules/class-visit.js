import nothing from './mudule_register.js'
import request from './request-create.js'
import create from './renderCard.js'
import Modal from './module_modal.js'
import { cardnothing, cardnothingQuestion } from './mudule_register.js'

const modal = new Modal()

class Visit {
	constructor(selectDoctor) {
		this.selectDoctor = selectDoctor
		this.container = document.querySelector('.container')
		this.urlCreateCard = 'https://ajax.test-danit.com/api/v2/cards'
	}

	createCard(response = null) {
		let modalVisible = localStorage.getItem('modalVisible')
		const documetElement = document.querySelector('.container')
		if (modalVisible === 'true') {
			modalVisible = false
			window.localStorage.setItem('modalVisible', modalVisible)

			modal.createForm(this.container)
			const FormCard = document.querySelector('.create-card__form')

			modal.createSelect(
				'form-content__chooseCard',
				'doctor',
				'Choose_doctor Cardiologist Dantist Therapist',
				FormCard
			)
			const formContentChoose = document.querySelector('#doctor')
			formContentChoose.options[0].disabled = true

			modal.createInput('input', ' Purpose of visit', 'title', FormCard, true)
			modal.createInput(
				'input',
				' Descripton of the visit',
				'description',
				FormCard,
				true
			)
			modal.createSelect(
				'form-content__chooseCard form-content__choose-main',
				'priority',
				'Ordinary Priority Urgent',
				FormCard
			)
			modal.createInput('input', ' Full name', 'full_name', FormCard, true)
			modal.createInput('input input__for-DataRegister', ' Register data', 'register_data', FormCard, true)
			const DataRegister = document.querySelector('.input__for-DataRegister')
			DataRegister.type = 'date'
			// DataRegister.value = new Date()
			modal.createInput('input', ' Register time', 'register_time', FormCard, true)
			modal.createButton('Create Card', 'create_id', FormCard)
			let modalBaton = FormCard.querySelector('.modal-button')
			let token = localStorage.getItem('token')
			this.selectDoctor = document.getElementById('doctor')
			if (response !== null) {
				const visitCardiologist = new VisitCardiologist()
				visitCardiologist.cardiologist()
				visitCardiologist.cardiologistNow(response.doctor)
				const visitTherapist = new VisitTherapist()
				visitTherapist.therapist(response.doctor)
				visitTherapist.therapistMow(response.doctor)
				const visitDentist = new VisitDantist()
				visitDentist.dantist(response.doctor)
				visitDentist.dantistNow(response.doctor)

				const modalBaton = FormCard.querySelector('.modal-button')
				modalBaton.textContent = "Update Card"
				const { title, description, doctor, priority, full_name, diseases, id, age, pressure, mass_index, data_pressure, age_therapevt, register_time, register_data, } = response
				const {
					title: titleElement,
					description: descriptionElement,
					doctor: doctorElement,
					priority: priorityElement,
					full_name: full_nameElement,
					register_time: register_timeElement,
					register_data: register_dataElement,
					age_therapevt: age_therapevtElement,
					data_pressure: data_pressureElement,
					pressure: pressureElement,
					mass_index: mass_indexElement,
					diseases: diseasesElement,
					age: ageElement,
				} = FormCard.elements

				titleElement.value = title
				descriptionElement.value = description
				doctorElement.value = doctor
				priorityElement.value = priority
				full_nameElement.value = full_name
				register_dataElement.value = register_data
				register_timeElement.value = register_time
				switch (doctor) {
					case '1':
						diseasesElement.value = diseases
						mass_indexElement.value = mass_index
						pressureElement.value = pressure
						ageElement.value = age
						break;
					case '2':
						data_pressureElement.value = data_pressure
						break;
					case '3':
						age_therapevtElement.value = age_therapevt
						break;
					default:
						alert("You didn't choose doctor ");
				}

				const requestType = 'put'
				this.submit(FormCard, requestType, token, id)

			} else {
				const requestType = 'add'

				this.submit(FormCard, requestType, token)
				const visitCardiologist = new VisitCardiologist()
				visitCardiologist.cardiologist(requestType)
				const visitTherapist = new VisitTherapist()
				visitTherapist.therapist(requestType)
				const visitDentist = new VisitDantist()
				visitDentist.dantist(requestType)
			}
			const modalWindowOwerflow = document.querySelector('.overflow')

			window.onclick = function (event) {
				if (event.target == modalWindowOwerflow) {
					modalWindowOwerflow.remove()
					FormCard.remove()
					let modalVisible = true
					window.localStorage.setItem('modalVisible', modalVisible)
				}
			}

		}
	}

	submit(FormCard, requestType, token, id) {
		const modalWindowOwerflow = document.querySelector('.overflow')
		FormCard.addEventListener('submit', e => {
			e.preventDefault()
			const data = {}
			const formElements = [...FormCard.elements].filter(({ type }) => {
				return type !== 'submit'
			})
			formElements.forEach(({ id, value }) => {
				data[id] = value
			})
			FormCard.remove()
			modalWindowOwerflow.remove()
			const requestpost = {
				data: data,
				url: `${this.urlCreateCard}`,
				token: token,
			}
			let modalVisible = localStorage.getItem('modalVisible')

			switch (requestType) {
				case 'add':
					requestpost.method = 'POST'
					request.request(requestpost).then(card => {
						create.renderCard(card)
						FormCard.remove()
						modalWindowOwerflow.remove()
						cardnothing.classList.add('display-none')
						cardnothingQuestion.classList.add('display-none')
						modalVisible = true
						window.localStorage.setItem('modalVisible', modalVisible)
					})
					break

				case 'put':
					requestpost.method = 'PUT'
					requestpost.url = `${this.urlCreateCard}/ ${id}`
					request.request(requestpost).then(card => {
						create.updateCard(card)
						FormCard.remove()
						modalWindowOwerflow.remove()
						modalVisible = true
						window.localStorage.setItem('modalVisible', modalVisible)
					})
					break
			}
		})
	}
}

const div = document.createElement('div')

div.classList.add('modal_additional-box')
const FormCard = document.querySelector('.create-card__form')
const divak = document.createElement('div')

class VisitCardiologist extends Visit {
	cardiologist(requestType) {
		const doctor = document.getElementById('doctor')
		const modalBtn = document.querySelector('.modal-button')
		modalBtn.classList.add('modal-button__create')
		if (requestType === 'add') {
			div.remove()
			// const divDelete = document.querySelector('.modal_additional-box')
			// divDelete.remove()

			divak.classList.add('modal_additional-box')
			modalBtn.before(divak)

			doctor.addEventListener('change', function () {
				if (doctor.value === '1') {
					divak.innerHTML = `
							<input required class="input create-card__pressure" type="text" id="pressure" name="pressure" placeholder=" normal pressure">
							<input required class="input" type="text" id="mass_index" name="mass-index" placeholder=" body mass index">
							<input required class="input" type="text" id="diseases" name="diseases" placeholder=" transferred diseases">
							<input required class="input" type="text" id="age" name="age" placeholder=" age">
							`

				}
			})
		} else {
			modalBtn.before(div)

			doctor.addEventListener('change', function () {
				if (doctor.value === '1') {
					div.innerHTML = `
							<input required class="input create-card__pressure" type="text" id="pressure" name="pressure" placeholder=" normal pressure">
							<input required class="input" type="text" id="mass_index" name="mass-index" placeholder=" body mass index">
							<input required class="input" type="text" id="diseases" name="diseases" placeholder=" transferred diseases">
							<input required class="input" type="text" id="age" name="age" placeholder=" age">
							`

				}
			})
		}



	}
	cardiologistNow(doctor) {

		if (doctor === '1') {
			div.innerHTML = `
					<input required class="input create-card__pressure" type="text" id="pressure" name="pressure" placeholder=" normal pressure">
					<input required class="input" type="text" id="mass_index" name="mass-index" placeholder=" body mass index">
					<input required class="input" type="text" id="diseases" name="diseases" placeholder=" transferred diseases">
					<input required class="input" type="text" id="age" name="age" placeholder=" age">
					`

		}
	}
}
class VisitTherapist extends Visit {
	therapist(requestType) {
		const modalBtn = document.querySelector('.modal-button')
		modalBtn.classList.add('modal-button__create')

		if (requestType === 'add') {
			div.remove()


			divak.classList.add('modal_additional-box')
			modalBtn.before(divak)

			doctor.addEventListener('change', () => {
				if (doctor.value === '2') {

					divak.innerHTML = `
					<label class="form-content__text" for="pressure">Date of last visit</label>
					<input required class="input create-card__lastDate" type="date" id="data_pressure" name="pressure">
					`
					const pressure = document.querySelector('#pressure')
					pressure.setAttribute('max', new Date().toISOString().slice(0, -14))
				}
			})
		} else {
			modalBtn.before(div)

			doctor.addEventListener('change', () => {
				if (doctor.value === '2') {

					div.innerHTML = `
					<label class="form-content__text" for="pressure">Date of last visit</label>
					<input required class="input create-card__lastDate" type="date" id="data_pressure" name="pressure">
					`
					const pressure = document.querySelector('#pressure')
					pressure.setAttribute('max', new Date().toISOString().slice(0, -14))
				}
			})
		}

	}
	therapistMow(doctor) {
		if (doctor === '2') {
			div.innerHTML = `
			<label class="form-content__text" for="pressure">Date of last visit</label>
			<input required class="input create-card__lastDate" type="date" id="data_pressure" name="pressure">
			`
			const pressure = document.querySelector('#pressure')
		}
	}
}
class VisitDantist extends Visit {
	dantist(requestType) {
		const modalBtn = document.querySelector('.modal-button')
		modalBtn.classList.add('modal-button__create')
		if (requestType === 'add') {
			div.remove()
			2
			divak.classList.add('modal_additional-box')
			modalBtn.before(divak)

			doctor.addEventListener('change', () => {
				if (doctor.value === '3') {

					divak.innerHTML = `
							 <input  required class="input create-card__age" type="text" id="age_therapevt" name="age" placeholder=" age">
							`
				}
			})
		} else {
			modalBtn.before(div)

			doctor.addEventListener('change', () => {
				if (doctor.value === '3') {

					div.innerHTML = `
							 <input  required class="input create-card__age" type="text" id="age_therapevt" name="age" placeholder=" age">
							`
				}
			})
		}

	}
	dantistNow(doctor) {
		if (doctor === '3') {

			div.innerHTML = `
					 <input  required class="input create-card__age" type="text" id="age_therapevt" name="age" placeholder=" age">
					`
		}
	}
}

const visit = new Visit()
export default visit
