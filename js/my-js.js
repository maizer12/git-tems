//create tth popup
const popupsAll = document.querySelector('.popups-order')
const popupCreateBtn = document.querySelector('.create-tth')
const popupCreateCloseBtn = document.querySelector('.create-warehouse__close ')

function switchPopCreate (e){
	if(e){
		popupsAll.classList.add('popups-order-create')
	}else{
		popupsAll.classList.remove('popups-order-create')
	}
}
const switchPop = e => {
	const elem = e.target
	const one = elem.classList.contains('popups-order')
	if (one) {
		switchPopCreate(false)
	}
}
popupCreateCloseBtn?.addEventListener('click', ()=> switchPopCreate(false) )
popupCreateBtn?.addEventListener('click', ()=> switchPopCreate(true))
popupsAll?.addEventListener('click', switchPop)

//client-pop
const popupsCreateClient = document.querySelector('.popups-create-client')
const buttonOpenAddClient = document.querySelector('.add-client-btn')
const buttonCloseAddClient  = document.querySelector('.popups-create-client__close')

function switchClientPop(a){
	if(a){
		popupsCreateClient.classList.add('popups-create-client-active')
	}else{
		popupsCreateClient.classList.remove('popups-create-client-active')
	}
}

const closeClientPop = e => {
	const elem = e.target
	const check = elem.classList.contains('popups-create-client')
	if (check) {
		switchClientPop(false)
	}
}

popupsCreateClient?.addEventListener('click', closeClientPop)
buttonCloseAddClient?.addEventListener('click', () => switchClientPop(false))
buttonOpenAddClient?.addEventListener('click',  () => switchClientPop(true))

//plus-minus

const ordersItemsAll = document.querySelector('.order-wind-items')
const inputsResultAll = document.querySelectorAll('.input-result-calk') 

if(inputsResultAll){
	console.log(inputsResultAll)
	inputsResultAll.forEach(element => {
		console.log(element)
		element.disabled = true
	}); 
}



ordersItemsAll?.addEventListener('click', (e)=>{
	const elem = e.target
	const plus = elem.classList.contains('btn-plus-calk')
	const minus = elem.classList.contains('btn-minus-calk')
	const input = elem.parentNode.querySelector('.order-item-input__input')
	const num = Number(input.value)
	if(plus){
		input.value = num  + 1
	}
	if(minus && num){
		input.value = num  - 1
	}
})