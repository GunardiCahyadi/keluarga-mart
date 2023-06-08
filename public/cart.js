import {
	MENU,
	getCartFromLocalStorage,
	getOrdersFromLocalStorage,
	updateOrderStatus,
	removeItemFromCart,
	createNewOrder,
	addItemToCart
} from "./shared.js";

const cart = getCartFromLocalStorage();
// const cart = { "item-1": 2, "item-2": 3 };
const orders = getOrdersFromLocalStorage();

let cartEmpty = document.getElementById("section-body-empty");
let cartFilled = document.getElementById("section-body-filled");
let cartPrice = document.querySelector(".bottombar-info");
let cartCO = document.querySelector(".bottombar-cta");

cartCO.addEventListener("click", function(){
	createNewOrder(cart, orders)
	console.log(orders)

})

function renderEmptyCart() {
	cartEmpty.style.display = "flex";
	cartFilled.style.display = "none";
	cartPrice.style.display = "none";
	cartCO.setAttribute("disabled", "true");
}

if (Object.keys(cart).length === 0) {
	renderEmptyCart();
} else {
	cartFilled.style.display = "flex";
	/* total harga di baris bawah*/
	let temp = 0;
	let totalPrice = "";

	for (let itemId in cart) {
		temp += MENU[itemId].price * cart[itemId];
		totalPrice = `Rp ${temp.toLocaleString()}`;

		cartPrice.innerText = totalPrice;

		/* display item jika ada item*/

		let itemDiv = document.createElement("div");
		itemDiv.classList.add("item-card");

		let cardBody = document.createElement("div");
		cardBody.classList.add("item-card-body");

		let h3 = document.createElement("h3");
		h3.classList.add("item-card-title");
		h3.innerText = MENU[itemId].name;

		let bodyFooter = document.createElement("div");
		bodyFooter.classList.add("item-card-body-footer");

		let spanPrice = document.createElement("span");
		spanPrice.classList.add("item-card-price");
		spanPrice.innerText = `Rp ${MENU[itemId].price.toLocaleString()}`;

		let itemQuantity = document.createElement("div");
		itemQuantity.classList.add("item-card-quantity-editor");

		let spanQuantity = document.createElement("span");
		spanQuantity.classList.add("item-card-quantity-editor-quantity");
		spanQuantity.innerText = cart[itemId];

		let btnMin = document.createElement("button");
		btnMin.classList.add("item-card-quantity-editor-button");
		btnMin.innerText = "-";
		btnMin.addEventListener("click", function () {
			removeItemFromCart(itemId, cart);
			spanQuantity.innerText = cart[itemId];

			if (!cart[itemId]) {
				itemDiv.remove();
				// console.log(cart)
				if (Object.keys(cart).length === 0) {
					renderEmptyCart();
				}
			}
		});

		let btnPlus = document.createElement("button");
		btnPlus.classList.add("item-card-quantity-editor-button");
		btnPlus.innerText = "+";
		btnPlus.addEventListener("click", function () {
			addItemToCart(itemId, cart);
			spanQuantity.innerText = cart[itemId];
		});

		let picture = document.createElement("img");
		picture.classList.add("item-card-image");
		picture.setAttribute("src", `/assets/${itemId}.jpeg`);
		picture.setAttribute("alt", "");
		picture.setAttribute("height", "120");
		picture.setAttribute("width", "120");

		/*append element*/

		itemQuantity.appendChild(btnMin);
		itemQuantity.appendChild(spanQuantity);
		itemQuantity.appendChild(btnPlus);

		bodyFooter.appendChild(spanPrice);
		bodyFooter.appendChild(itemQuantity);

		cardBody.appendChild(h3);
		cardBody.appendChild(bodyFooter);

		itemDiv.appendChild(cardBody);
		itemDiv.appendChild(picture);

		cartFilled.appendChild(itemDiv);
	}
}
