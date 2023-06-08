import {
	MENU,
	getCartFromLocalStorage,
	getOrdersFromLocalStorage,
	updateOrderStatus,
} from "./shared.js";

const cart = getCartFromLocalStorage();
const oreders = getOrdersFromLocalStorage();
