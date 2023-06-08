import {
	MENU,
	getCartFromLocalStorage,
	getOrdersFromLocalStorage,
	updateOrderStatus,
} from "./shared.js";

// const cart = getCartFromLocalStorage()
const cart ={'item-1':3, 'item-2': 1}

let totals = 0
for(let key in cart){
	totals += cart[key]
}

let hasil = `${+totals} items in cart`

// const oreders = getOrdersFromLocalStorage();
const orders = {completed:[{id: 'order-1', createdAt:Date(), cart:{'item-1':3}, ticket:'M1', isCompleted:true}], ongoing:[{id: 'order-1', createdAt:Date(), cart:{'item-1':3}, ticket:'M1', isCompleted:false}]}


const ongoing = document.querySelector("ongoing-orders-section")
const completed = document.querySelector("completed-orders-section")


let section = document.querySelector("#ongoing-orders-section > .section-body")


if(orders.ongoing.length === 0){
	let empty = document.createElement("div")
	empty.classList.add("order-card-empty")
	let noOrder = document.createElement("p")
	noOrder.classList.add("italic", "leading-none")
	noOrder.innerText = 'No ongoing order.'
	let gap = document.createElement("div")
	gap.classList.add("section-body", "gap-y-5")


	empty.appendChild(noOrder)
	gap.appendChild(empty)
	section.appendChild(empty)
}else{

for (let i = 0; i < orders.ongoing.length; i++) {
	let order = orders.ongoing[i]

	let card = document.createElement("div")
	card.classList.add("order-card-ongoing")

	let ongoing = document.createElement("div")
	ongoing.classList.add("order-card-ongoing-body")

	let ticket = document.createElement("span")
	ticket.classList.add("order-card-ongoing-ticket")
	ticket.innerText = order.ticket

	let quantity = document.createElement("span")
	quantity.classList.add("order-card-ongoing-quantity")

	
	for(let key in order.cart){
		if(order.cart[key] === 1){
			quantity.innerText = order.cart[key] + ' item'	
		}else{
			quantity.innerText = order.cart[key] + ' items'
		}
	}
	// quantity.innerText = order.cart

	let timer = document.createElement("span")
	timer.classList.add("order-card-ongoing-timer")
	timer.innerText = '10s'
	
	ongoing.appendChild(ticket)
	ongoing.appendChild(quantity)
	card.appendChild(ongoing)
	card.appendChild(timer)

	console.log(section);
	section.appendChild(card)
}
}





let section2 = document.querySelector("#completed-orders-section > .section-body")

if(orders.completed.length === 0){
	let kosong = document.createElement("div")
	kosong.classList.add("order-card-empty")
	let noCompleted = document.createElement("p")
	noCompleted.classList.add("italic","leading-none")
	noCompleted.innerText = 'No completed order.'
	let gaps = document.createElement("div")
	gaps.classList.add("section-body", "gap-y-5")

	kosong.appendChild(noCompleted)
	gaps.appendChild(kosong)
	section2.appendChild(kosong)
}else{
	for (let i = 0; i < orders.completed.length; i++) {
		let completed = orders.completed[i]
	
		let card = document.createElement("div")
		card.classList.add("order-card-completed")
	
		let title = document.createElement("span")
		title.classList.add("order-card-completed-title")
	
		for(let key in completed.cart){
			if(completed.cart[key] === 1){
				title.innerText = completed.cart[key] + ' item'	
			}else{
				title.innerText = completed.cart[key] + ' items'
			}
		}
	
		let date = document.createElement("span")
		date.classList.add("order-card-completed-date")
		date.innerText = new Date(completed.createdAt).toLocaleString()
		
		card.appendChild(title)
		card.appendChild(date)
		section2.appendChild(card)
	}
}

let test =document.getElementsByClassName("bottombar-info");
test[0].innerHTML = hasil;



