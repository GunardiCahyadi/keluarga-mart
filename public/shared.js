/********************************************************************************
 * Constants.
 */

/** @type { Record<string, Item> } */
export const MENU = {
	"item-1": {
		id: "item-1",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/item-1.jpeg",
	},
	"item-2": {
		id: "item-2",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/item-2.jpeg",
	},
	"item-3": {
		id: "item-3",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/item-3.jpeg",
	},
	"item-4": {
		id: "item-4",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/item-4.jpeg",
	},
};

const CART_STORAGE_KEY = "keluargaMartCart";

const ORDER_ID_COUNTER_STORAGE_KEY = "keluargaMartCartIdCounter";
const ORDERS_STORAGE_KEY = "keluargaMartOrders";

/********************************************************************************
 * Below are functions to interact with local storage.
 */

/**
 * Mengambil object cart dari local storage.
 *
 * @returns { Cart }
 */
export function getCartFromLocalStorage() {
	return {};
}

/**
 * Simpan cart object ke local storage. Digunakan setiap kali mengupdate object cart.
 *
 * @param { Cart } cart
 */
export function setCartToLocalStorage(cart) {}

/**
 * Mengambil object orders dari local storage.
 *
 * @returns { Orders }
 */
export function getOrdersFromLocalStorage() {
	return {
		completed: [],
		ongoing: [],
	};
}

/**
 * Simpan cart object ke local storage. Digunakan setiap kali mengupdate object cart.
 *
 * @param { Orders } orders
 */
export function setOrdersToLocalStorage(orders) {}

/********************************************************************************
 * Below are functions to interact with menu list.
 */

/**
 * Urutkan item-item di dalam menu berdasarkan harga.
 * Terdapat dua mode: "ascending"  dan "decending".
 *
 * @param { Item[] } menuList
 * @param { "ascending" | "descending" } mode
 *
 * @returns { Item[] }
 */
export function sortMenuByPrice(menuList, mode) {}

/**
 * Filter item-item di menu dengan melihat apakah string
 * yang didapat terdapat di dalam nama item.
 *
 * @param { Item[] } menuList
 * @param { string } query
 *
 * @returns { Item[] }
 */
export function filterMenuByQuery(menuList, query) {}

/********************************************************************************
 * Below are functions to interact with cart data.
 */

/**
 * Tambah item ke cart dan update local storage.
 *
 * @param { string } itemId
 * @param { Cart } cart
 */
export function addItemToCart(itemId, cart) {
	return {};
}

/**
 * Hapus item dari cart dan update local storage.
 *
 * @param { string } itemId
 * @param { Cart } cart
 */
export function removeItemFromCart(itemId, cart) {}

/********************************************************************************
 * Below are unctions to interact with orders data.
 */

/**
 * Buat object order baru dan update local storage.
 *
 * @param { Order["cart"] } cart
 * @param { Orders } orders
 */
export function createNewOrder(cart, orders) {}

/**
 * Rubah status order dari ongoing -> completed, pindahkan order dari
 * array property ongoing ke array property completed. lalu update local storage.
 *
 * @param { string } orderId
 * @param { Orders } orders
 */
export function updateOrderStatus(orderId, orders) {}

/********************************************************************************
 * Type definitions.
 */

/**
 * @typedef { { id: string; name: string; price: number, imageUrl: string } } Item
 */

/**
 * Use the itemId as property key, and the item quantity as value:
 *
 * { [itemId]: quantity }
 *
 * @typedef { Record<string, number> } Cart
 */

/**
 * @typedef { { id: string; createdAt: string; cart: Cart; ticket: string; isCompleted: boolean } } Order
 */

/**
 * @typedef { { completed: Order[]; ongoing: Order[] } } Orders
 */
