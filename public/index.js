import {
	getCartFromLocalStorage,
	getOrdersFromLocalStorage,
	updateOrderStatus,
} from "./shared.js";

const cart = getCartFromLocalStorage();
const orders = getOrdersFromLocalStorage();

let total = 0;
for (let key in cart) {
	total += cart[key];
}

/** @type { HTMLElement } */
let bottombarInfo = document.querySelector(".bottombar-info");
if (total > 0) {
	let hasil = `${+total} items in cart`;
	bottombarInfo.innerText = hasil;
	bottombarInfo.style.display = "flex";
}

render();

function render() {
	let section = document.querySelector(
		"#ongoing-orders-section > .section-body"
	);
	let section2 = document.querySelector(
		"#completed-orders-section > .section-body"
	);

	if (orders.ongoing.length === 0) {
		let empty = document.createElement("div");
		empty.classList.add("order-card-empty");
		let noOrder = document.createElement("p");
		noOrder.classList.add("italic", "leading-none");
		noOrder.innerText = "No ongoing order.";
		let gap = document.createElement("div");
		gap.classList.add("section-body", "gap-y-5");

		empty.appendChild(noOrder);
		gap.appendChild(empty);
		section.appendChild(empty);
	} else {
		for (let i = 0; i < orders.ongoing.length; i++) {
			let order = orders.ongoing[i];

			let card = document.createElement("div");
			card.classList.add("order-card-ongoing");

			let ongoing = document.createElement("div");
			ongoing.classList.add("order-card-ongoing-body");

			let ticket = document.createElement("span");
			ticket.classList.add("order-card-ongoing-ticket");
			ticket.innerText = order.ticket;

			let quantity = document.createElement("span");
			quantity.classList.add("order-card-ongoing-quantity");

			for (let key in order.cart) {
				if (order.cart[key] === 1) {
					quantity.innerText = order.cart[key] + " item";
				} else {
					quantity.innerText = order.cart[key] + " items";
				}
			}

			let timer = document.createElement("span");
			timer.classList.add("order-card-ongoing-timer");

			let remainingTime = Math.round(
				(Date.parse(order.createdAt) + 10_000 - Date.now()) / 1_000
			);

			if (remainingTime < 1) {
				updateOrderStatus(order.id, orders);
				section.replaceChildren();
				section2.replaceChildren();
				render();
				break;
			} else {
				timer.innerText = `${remainingTime}s`;
				let interval;
				interval = setInterval(function countdown() {
					remainingTime--;

					if (remainingTime < 1) {
						clearInterval(interval);
						updateOrderStatus(order.id, orders);
						section.replaceChildren();
						section2.replaceChildren();
						render();
					} else {
						timer.innerText = `${remainingTime}s`;
					}
				}, 1_000);
			}

			ongoing.appendChild(ticket);
			ongoing.appendChild(quantity);
			card.appendChild(ongoing);
			card.appendChild(timer);

			console.log(section);
			section.appendChild(card);
		}
	}

	if (orders.completed.length === 0) {
		let kosong = document.createElement("div");
		kosong.classList.add("order-card-empty");
		let noCompleted = document.createElement("p");
		noCompleted.classList.add("italic", "leading-none");
		noCompleted.innerText = "No completed order.";
		let gaps = document.createElement("div");
		gaps.classList.add("section-body", "gap-y-5");

		kosong.appendChild(noCompleted);
		gaps.appendChild(kosong);
		section2.appendChild(kosong);
	} else {
		for (let i = 0; i < orders.completed.length; i++) {
			let completed = orders.completed[i];

			let card = document.createElement("div");
			card.classList.add("order-card-completed");

			let title = document.createElement("span");
			title.classList.add("order-card-completed-title");

			for (let key in completed.cart) {
				if (completed.cart[key] === 1) {
					title.innerText = completed.cart[key] + " item";
				} else {
					title.innerText = completed.cart[key] + " items";
				}
			}

			let date = document.createElement("span");
			date.classList.add("order-card-completed-date");
			date.innerText = new Date(completed.createdAt).toLocaleString();

			card.appendChild(title);
			card.appendChild(date);
			section2.appendChild(card);
		}
	}
}
