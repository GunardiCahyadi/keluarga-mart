/********************************************************************************
 * Constants.
 */

/** @type { Item[] } */
export const MENU = [
	{
		id: "item-1",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/",
	},
	{
		id: "item-2",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/",
	},
	{
		id: "item-3",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/",
	},
	{
		id: "item-4",
		name: "Chicken Karage Cheesy Buldak + Nasi",
		price: 17_000,
		imageUrl: "/assets/",
	},
];

/********************************************************************************
 * Below are functions to interact with local storage.
 */

const CART_STORAGE_KEY = "keluargaMartCart";

/**
 *
 */
export function getCartFromLocalStorage() {}

/**
 *
 */
export function setCartToLocalStorage() {}

const ORDERS_STORAGE_KEY = "keluargaMartOrders";

/**
 *
 */
export function getOrdersFromLocalStorage() {}

/**
 *
 */
export function setOrdersToLocalStorage() {}

/********************************************************************************
 * Below are unctions to interact with cart data.
 */

/**
 *
 */
export function addItemToCart() {}

/**
 *
 */
export function removeItemFromCart() {}

/********************************************************************************
 * Below are unctions to interact with orders data.
 */

/**
 *
 */
export function createNewOrder() {}

/**
 *
 */
export function updateOrderStatus() {}

/********************************************************************************
 * Type definitions.
 */

/**
 * @typedef { { id: string; name: string; price: number, imageUrl: string } } Item
 */

/**
 * @typedef { Item & { quantity: number } } CartItem
 */

/**
 * @typedef { Record<string, CartItem> } Cart
 */

/**
 * @typedef { { id: string; items: CartItem[], createdAt: string, isCompleted: boolean } } Order
 */

/**
 * @typedef { { completed: Order[]; ongoing: Order[] } } Orders
 */
