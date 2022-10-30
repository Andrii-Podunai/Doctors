import visit from './modules/class-visit.js'
import Register from './modules/mudule_register.js'
import Filter from './modules/module_filter.js'

const regiter = new Register()

const registerBtn = document.querySelector('.header-content__button')

function start() {
	let modalVisible = true


	window.localStorage.setItem('modalVisible', modalVisible)
	regiter.login()
	registerBtn.addEventListener('click', e => {
		if (registerBtn.textContent.toLowerCase() === 'create visit') {
			visit.createCard()
			const requestType = 'add'
		} else {
			regiter.login()
		}
	})
}
start()

const filter = new Filter()
filter.searchFilter()
