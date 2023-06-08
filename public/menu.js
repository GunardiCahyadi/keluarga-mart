import {
	MENU,
	addItemToCart,
	removeItemFromCart,
	getCartFromLocalStorage,
	getOrdersFromLocalStorage,
	updateOrderStatus,
	filterMenuByQuery
} from "./shared.js";

const cart = getCartFromLocalStorage();
const orders = getOrdersFromLocalStorage();
const search = document.getElementById('menu-search-input');
search.addEventListener('keyup', cariList)
const sectionBody = document.querySelector(`.section-body`)
//Fitur Search
function cariList(event) {
	const text = event.target.value;
	const filtered = filterMenuByQuery(Object.values(MENU), text)
	sectionBody.replaceChildren()
	render(filtered);
}
render(Object.values(MENU))
function render(menuList){
for (let menu of menuList) {
	renderCard(menu);
}

}
function renderCard(menu) {
	const itemCardBodyFooter = document.createElement("div"); // Parent dari button 'Add To Cart'
	const itemCardQuantityEditor = document.createElement("div"); // Button + dan - setelah klik 'Add To Cart'
	const itemCardAddToCart = document.createElement("button"); // Button 'Add To Cart'

	const itemCard = document.createElement("div");
	itemCard.classList.add("item-card");

	const itemCardBody = document.createElement("div");
	itemCardBody.classList.add("item-card-body");

	//contoh addImage dan setAttribute - pada komponen apa
	const itemCardImage = document.createElement("img");
	itemCardImage.classList.add("item-card-image");
	itemCardImage.setAttribute("src", menu.imageUrl);

	// Title pada item
	const itemCardTitle = document.createElement("h3");
	itemCardTitle.classList.add("item-card-title");
	itemCardTitle.innerText = menu.name;

	// Menambahkan class pada footer card item
	itemCardBodyFooter.classList.add("item-card-body-footer");

	const itemCardPrice = document.createElement("span");
	itemCardPrice.classList.add("item-card-price");
	itemCardPrice.innerText = `Rp ${menu.price.toLocaleString()}`; // perhatikan ini

	// Menambahkan class untuk penampung button 'Add To Cart'
	itemCardQuantityEditor.classList.add("item-card-quantity-editor");

	// Mengurangi item dari cart
	const itemCardQuantityEditorButtonMinus = document.createElement("button");
	itemCardQuantityEditorButtonMinus.classList.add(
		"item-card-quantity-editor-button"
	);
	itemCardQuantityEditorButtonMinus.innerText = "-";
	//function kurang
	itemCardQuantityEditorButtonMinus.addEventListener("click", function () {
		itemCardQuantityEditorQuantity.innerText = String(
			Number(itemCardQuantityEditorQuantity.innerText) - 1
		);
		removeItemFromCart(menu.id, cart);
		console.log(cart);
		if (itemCardQuantityEditorQuantity.innerText === "0") {
			itemCardBodyFooter.replaceChild(
				itemCardAddToCart,
				itemCardQuantityEditor
			);
		}
	});

	const itemCardQuantityEditorQuantity = document.createElement("span");
	itemCardQuantityEditorQuantity.classList.add(
		"item-card-quantity-editor-quantity"
	);
	itemCardQuantityEditorQuantity.innerText = "1";

	const itemCardQuantityEditorButtonPlus = document.createElement("button");
	itemCardQuantityEditorButtonPlus.classList.add(
		"item-card-quantity-editor-button"
	);
	itemCardQuantityEditorButtonPlus.innerText = "+";
	itemCardQuantityEditorButtonPlus.addEventListener("click", function () {
		itemCardQuantityEditorQuantity.innerText = String(
			Number(itemCardQuantityEditorQuantity.innerText) + 1
		);
		addItemToCart(menu.id, cart); //nyimpen ke cart biar di simpen
		// console.log(cart)
	});

	// Menambahkan item ke dalam Cart
	itemCardAddToCart.classList.add("item-card-add-to-cart");
	itemCardAddToCart.innerText = "Add to Cart";
	itemCardAddToCart.addEventListener("click", function () {
		//replaceChild
		itemCardQuantityEditorQuantity.innerText = "1";
		itemCardBodyFooter.replaceChild(
			itemCardQuantityEditor,
			itemCardAddToCart
		);
		addItemToCart(menu.id, cart);
		// console.log(cart)
	});

	//append child atas ke bawah / dalam keluar
	itemCardBodyFooter.appendChild(itemCardPrice);
	if (cart[menu.id]) {
		itemCardQuantityEditorQuantity.innerText = cart[menu.id].toString();
		itemCardBodyFooter.appendChild(itemCardQuantityEditor);
	} else {
		itemCardBodyFooter.appendChild(itemCardAddToCart);
	}

	itemCardBody.appendChild(itemCardTitle);
	itemCardBody.appendChild(itemCardBodyFooter);

	itemCard.appendChild(itemCardBody);
	itemCard.appendChild(itemCardImage);

	//Qty Editor
	itemCardQuantityEditor.appendChild(itemCardQuantityEditorButtonMinus);
	itemCardQuantityEditor.appendChild(itemCardQuantityEditorQuantity);
	itemCardQuantityEditor.appendChild(itemCardQuantityEditorButtonPlus);

	//ambil Element
	const sectionBody = document.querySelector(".section-body");
	sectionBody.appendChild(itemCard);
}
