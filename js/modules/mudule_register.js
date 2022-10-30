import Modal from './module_modal.js'
import create from './renderCard.js'

const modal = new Modal()
const cardnothing = document.querySelector('.main-cards__text')
const cardnothingQuestion = document.querySelector('.question')

class Register {
	constructor(registerBtn) {
		this.registerBtn = registerBtn
		this.registerBtn = document.querySelector('.header-content__button')
	}

	login() {
		const main = document.querySelector('.main')
		if ('token' in localStorage) {
			this.registerBtn.textContent = 'create visit'
		} else {
			this.registerBtn.textContent = 'enter'
		}

		window.onbeforeunload = () => {
			localStorage.clear()
		}
		let modalVisible = localStorage.getItem('modalVisible')
		if (modalVisible === 'true') {
			modalVisible = false
			window.localStorage.setItem('modalVisible', modalVisible)

			modal.createModal('500', '800', main, '')
			const registerModal = document.querySelector('.modal')
			const emailLogin = document.createElement("p")
			emailLogin.classList.add('email-login')
			emailLogin.innerText = "Log In"
			registerModal.append(emailLogin)
			registerModal.classList.add('modal__register');
			modal.createInput(
				'register__input',
				'  Your Email',
				'register-email',
				registerModal,
				true
			)
			const email = document.querySelector('.register__input')
			email.type = 'email'
			modal.createInput(
				'register__input',
				'  Your Password',
				'register-password',
				registerModal,
				true
			)

			const password = document.querySelector('#register-password')
			password.type = 'password'
			modal.createInput(
				'register__submit-btn',
				'',
				'submitLogin',
				registerModal,
				true
			)
			const modalWindowOwerflow = document.querySelector('.overflow')
			const divForRegister = document.createElement('div')
			divForRegister.classList.add('divForRegister')
			registerModal.append(divForRegister)
			const forgotModal = document.createElement("a")
			forgotModal.classList.add('forgotModal')
			forgotModal.innerText = "Register"
			divForRegister.append(forgotModal)

			const signBtn = document.querySelector('.register__submit-btn')
			signBtn.type = 'submit'
			if (this.registerBtn.textContent === 'create visit') {
				registerModal.remove()
				modalWindowOwerflow.remove()
			}
			window.onclick = function (event) {
				if (event.target == modalWindowOwerflow) {
					modalWindowOwerflow.remove()
					registerModal.remove()
					modalVisible = true
					window.localStorage.setItem('modalVisible', modalVisible)
				}
			}
			forgotModal.addEventListener('click', e => {
				e.preventDefault()
				window.open('https://ajax.test-danit.com/front-pages/cards-register.html');

			})
			signBtn.textContent = "Next"
			divForRegister.append(signBtn)
			signBtn.addEventListener('click', e => {
				e.preventDefault()
				if (email.value != '' || password.value != '') {
					// registerModal.classList.add('display-none')
					registerModal.remove()
					modalWindowOwerflow.remove()
					this.getToken(email.value, password.value)
					const mainCard = document.querySelector('.main-cards')
					if (!mainCard.hasChildNodes()) {
						cardnothing.textContent = 'No items have been added'
					}
					modalVisible = true
					window.localStorage.setItem('modalVisible', modalVisible)
				} else {


					// window.localStorage.localStorage.clear()
					alert('Please provide email and password.')

				}
			})
		}
	}

	async getToken(email, password) {
		await fetch('https://ajax.test-danit.com/api/v2/cards/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: email, password: password }),
		})
			.then(response => {
				if (response.status === 200) {
					this.registerBtn.textContent = 'create visit'
					this.registerBtn.style.width = "192px"
					return response.text()
				} else {
					this.registerBtn.textContent = 'Log In'
					alert('email or password not correct.')
				}
			})
			.then(token => {
				window.localStorage.setItem('token', token)
				if (token === undefined) {
					window.localStorage.removeItem('token')
				}
				this.getPrevCard()
			})
			.catch(error => {
				console.error(error)
			})
	}

	async getPrevCard() {
		let token = localStorage.getItem('token')
		await fetch('https://ajax.test-danit.com/api/v2/cards', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})
			.then(data => {
				return data.json()
			})
			.then(data => {
				data.forEach(e => {
					let {
						diseases,
						mass_index,
						pressure,
						data_pressure,
						age_therapevt,
						title,
						description,
						doctor,
						age,
						weight,
						full_name,
						priority,
						register_data,
						register_time,
						id,
					} = e
					create.renderCard({
						doctor,
						title,
						register_data,
						register_time,
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
					})
					if (title !== null) {
						cardnothingQuestion.classList.add('display-none')
						cardnothing.classList.add('display-none')
						// cardnothing.textContent = ''
					}
				})
			})
			.catch(e => {
				console.log(e)
			})
	}
}

export default Register
export { cardnothing, cardnothingQuestion }
