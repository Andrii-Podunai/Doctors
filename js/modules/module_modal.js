class Modal {
	createInput(
		inputClassName,
		inputPlaceholder,
		inputID = '',
		root,
		required = true
	) {
		const input = document.createElement('input')
		input.required = required
		input.classList.add(...inputClassName.split(' '))
		input.placeholder = inputPlaceholder
		input.id = inputID
		this.modalVisible
		root.appendChild(input)
	}
	createSelect(selectClassName, selectID = '', selectOptions, root) {
		const select = document.createElement('select')
		select.required = true
		select.classList.add(...selectClassName.split(' '))
		select.id = selectID

		const arrSelectOp = [selectOptions.split(' ')]
		arrSelectOp.forEach(element => {
			element.forEach((item, key) => {
				select[key] = new Option(item, key)
			})
		})

		root.appendChild(select)
	}

	createButton(buttonText, buttonID = '', root) {
		const button = document.createElement('button')
		button.textContent = buttonText
		button.className = 'modal-button'
		button.id = buttonID

		root.appendChild(button)
	}
	createModal(width, height, root, name) {
		const modalWindowOwerflow = document.createElement('div')
		modalWindowOwerflow.classList.add('overflow')
		const modalWindow = document.createElement('div')
		modalWindow.width = `${width}px`
		modalWindow.height = `${height}px`
		modalWindow.classList.add('modal')
		modalWindow.textContent = name

		const closeButton = document.createElement('button')
		const imgClose = new Image();
		imgClose.src = './img/close.svg'
		closeButton.append(imgClose)
		// closeButton.textContent = 'X'
		closeButton.classList.add('modal-close')
		closeButton.addEventListener('click', () => {

			let modalVisible = localStorage.getItem('modalVisible')
			modalVisible = true
			window.localStorage.setItem('modalVisible', modalVisible)
			modalWindowOwerflow.remove()
			modalWindow.remove()
		})
		// window.onclick = function (event) {
		// 	if (event.target !== modalWindow) {
		// 		modalWindow.remove()
		// 		modalWindowOwerflow.remove()
		// 	}
		// }
		modalWindow.appendChild(closeButton)
		modalWindowOwerflow.appendChild(modalWindow)
		root.appendChild(modalWindowOwerflow)
	}
	createForm(root, name) {
		const modalWindowOwerflow = document.createElement('div')
		modalWindowOwerflow.classList.add('overflow')
		const modalWindow = document.createElement('Form')
		modalWindow.classList.add('create-card__form')
		modalWindow.textContent = name

		const closeButton = document.createElement('button')
		// closeButton.textContent = 'X'
		const imgClose = new Image();
		imgClose.src = './img/close.svg'
		closeButton.append(imgClose)
		closeButton.classList.add('modal-close')
		closeButton.classList.add('modal-close__form')
		closeButton.addEventListener('click', () => {

			let modalVisible = localStorage.getItem('modalVisible')
			modalVisible = true
			window.localStorage.setItem('modalVisible', modalVisible)
			modalWindowOwerflow.remove()
			modalWindow.remove()
		})

		modalWindow.appendChild(closeButton)
		modalWindowOwerflow.appendChild(modalWindow)
		root.appendChild(modalWindowOwerflow)
	}
}

export default Modal
