//alert
const popupsAll = document.querySelector('.popups-order')
document.querySelector('.create-tth').addEventListener('click', () => {
	console.log(123)
	popupsAll.classList.add('popups-order-create')
})

const switchPop = e => {
	const elem = e.target
	const one = elem.classList.contains('popups-order')
	if (one) {
		popupsAll.classList = ''
		popupsAll.classList.add('popups-order')
	}
}

popupsAll?.addEventListener('click', switchPop)
