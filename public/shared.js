/********************************************************************************
 * Constants.
 */

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
	return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY))
	
}

/**
 * Simpan cart object ke local storage. Digunakan setiap kali mengupdate object cart.
 *
 * @param { Orders } orders
 */
export function setOrdersToLocalStorage(orders) {
	localStorage.setItem(ORDERS_STORAGE_KEY,JSON.stringify(orders))
}

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
export function sortMenuByPrice(menuList, mode) {
	return mode === 'ascending' ? menuList.sort((h1 , h2) => h1.price - h2.price) : menuList.sort((h1 , h2) => h2.price - h1.price) ;
}

/**
 * Filter item-item di menu dengan melihat apakah string
 * yang didapat terdapat di dalam nama item.
 *
 * @param { Item[] } menuList
 * @param { string } query
 *
 * @returns { Item[] }
 */
export function filterMenuByQuery(menuList, query) {
	return menuList.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));;
}

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


let orderIdCounter = localStorage.getItem(ORDER_ID_COUNTER_STORAGE_KEY) ? +localStorage.getItem(ORDER_ID_COUNTER_STORAGE_KEY): 0;


/**
 * Buat object order baru dan update local storage.
 *
 * @param { Order["cart"] } cart
 * @param { Orders } orders
 */
export function createNewOrder(cart, orders) {
	let order = {
		id:`order-${++orderIdCounter}`,
		createdAt: (new Date()).toString(),
		cart: cart,
		ticket: `M${orderIdCounter}`,
		isCompleted: false
	}
	orders.ongoing.push(order);
	setOrdersToLocalStorage(orders);
}
 
/**
 * Rubah status order dari ongoing -> completed, pindahkan order dari
 * array property ongoing ke array property completed. lalu update local storage.
 *
 * @param { string } orderId
 * @param { Orders } orders
 */
export function updateOrderStatus(orderId, orders) {
	for (let i = 0; i < orders.ongoing.length; i++) {
		if(orderId === orders.ongoing[i].id){
			if(orders.ongoing[i].isCompleted){
				orders.completed.push(orders.ongoing[i])
			}
			orders.ongoing.splice(i,1);
		}
	}
	setOrdersToLocalStorage(orders);
}

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

/********************************************************************************
 * Data.
 */

/** @type { Record<string, Item> } */
export const MENU = {
	"item-1": {
		id: "item-1",
		name: "Jamu Kunyit Asem 250 ML",
		price: 14500,
		imageUrl: "/assets/item-1.jpeg",
	},
	"item-2": {
		id: "item-2",
		name: "Jamu Beras Kencur 250 ML",
		price: 14500,
		imageUrl: "/assets/item-2.jpeg",
	},
	"item-3": {
		id: "item-3",
		name: "Ice Black Coffee",
		price: 17500,
		imageUrl: "/assets/item-3.jpeg",
	},
	"item-4": {
		id: "item-4",
		name: "Ice Kopi Susu Keluarga",
		price: 17500,
		imageUrl: "/assets/item-4.jpeg",
	},
	"item-5": {
		id: "item-5",
		name: "Ice Cafe Latte",
		price: 17500,
		imageUrl: "/assets/item-5.jpeg",
	},
	"item-6": {
		id: "item-6",
		name: "Ice Frost Coffee Float",
		price: 17500,
		imageUrl: "/assets/item-6.jpeg",
	},
	"item-7": {
		id: "item-7",
		name: "Ice Cappucino",
		price: 17500,
		imageUrl: "/assets/item-7.jpeg",
	},
	"item-8": {
		id: "item-8",
		name: "Ice Vanilla Latte",
		price: 17500,
		imageUrl: "/assets/item-8.jpeg",
	},
	"item-9": {
		id: "item-9",
		name: "Ice Caramel Latte",
		price: 17500,
		imageUrl: "/assets/item-9.jpeg",
	},
	"item-10": {
		id: "item-10",
		name: "Ice Peppermint Chocolate",
		price: 17500,
		imageUrl: "/assets/item-10.jpeg",
	},
	"item-11": {
		id: "item-11",
		name: "Ice Premium Chocolate",
		price: 17500,
		imageUrl: "/assets/item-11.jpeg",
	},
	"item-12": {
		id: "item-12",
		name: "Ice Green Tea Latte",
		price: 17500,
		imageUrl: "/assets/item-12.jpeg",
	},
	"item-13": {
		id: "item-13",
		name: "Ice Creamy Hazelnut Latte",
		price: 17500,
		imageUrl: "/assets/item-13.jpeg",
	},
	"item-14": {
		id: "item-14",
		name: "Ice Hazelnut Chcolate Milk Tea",
		price: 17500,
		imageUrl: "/assets/item-14.jpeg",
	},
	"item-15": {
		id: "item-15",
		name: "Ice Tea",
		price: 17500,
		imageUrl: "/assets/item-15.jpeg",
	},
	"item-16": {
		id: "item-16",
		name: "Ice Bubble Classic Milk Tea",
		price: 17500,
		imageUrl: "/assets/item-16.jpeg",
	},
	"item-17": {
		id: "item-17",
		name: "Ice Coco Tea",
		price: 17500,
		imageUrl: "/assets/item-17.jpeg",
	},
	"item-18": {
		id: "item-18",
		name: "Ice Coco Shake",
		price: 17500,
		imageUrl: "/assets/item-18.jpeg",
	},
	"item-19": {
		id: "item-19",
		name: "Ice Honey Yuzu",
		price: 17500,
		imageUrl: "/assets/item-19.jpeg",
	},
	"item-20": {
		id: "item-20",
		name: "Ice Merah Putih",
		price: 17500,
		imageUrl: "/assets/item-20.jpeg",
	},
	"item-21": {
		id: "item-21",
		name: "Ice Brown Sugar Milk Tea Bubble",
		price: 17500,
		imageUrl: "/assets/item-21.jpeg",
	},
	"item-22": {
		id: "item-22",
		name: "Ice Brown Sugar Fresh Milk Bubble",
		price: 17500,
		imageUrl: "/assets/item-22.jpeg",
	},
	"item-23": {
		id: "item-23",
		name: "Ice Brown Sugar Grass Jelly Milk Tea",
		price: 17500,
		imageUrl: "/assets/item-23.jpeg",
	},
	"item-24": {
		id: "item-24",
		name: "Ice Brown Sugar Grass Jelly Fresh Milk",
		price: 17500,
		imageUrl: "/assets/item-24.jpeg",
	},
	"item-25": {
		id: "item-25",
		name: "Ice Grass Jelly Fresh Milk",
		price: 17500,
		imageUrl: "/assets/item-25.jpeg",
	},
	"item-26": {
		id: "item-26",
		name: "Ice Grass Jelly Classic Milk Tea",
		price: 17500,
		imageUrl: "/assets/item-26.jpeg",
	},
	"item-27": {
		id: "item-27",
		name: "Ice Orange Vanilla Sky",
		price: 17500,
		imageUrl: "/assets/item-27.jpeg",
	},
	"item-28": {
		id: "item-28",
		name: "Ice Orange Berry Tea",
		price: 17500,
		imageUrl: "/assets/item-28.jpeg",
	},
	"item-29": {
		id: "item-29",
		name: "Ice Pineapple Mango Tea Booster",
		price: 17500,
		imageUrl: "/assets/item-29.jpeg",
	},
	"item-30": {
		id: "item-30",
		name: "Hot Americano",
		price: 14500,
		imageUrl: "/assets/item-30.jpeg",
	},
	"item-31": {
		id: "item-31",
		name: "Hot Kopi Susu Keluarga",
		price: 14500,
		imageUrl: "/assets/item-31.jpeg",
	},
	"item-32": {
		id: "item-32",
		name: "Hot Dolce Latte",
		price: 14500,
		imageUrl: "/assets/item-32.jpeg",
	},
	"item-33": {
		id: "item-33",
		name: "Hot Latte",
		price: 14500,
		imageUrl: "/assets/item-33.jpeg",
	},
	"item-34": {
		id: "item-34",
		name: "Hot Vanilla Latte",
		price: 14500,
		imageUrl: "/assets/item-34.jpeg",
	},
	"item-35": {
		id: "item-35",
		name: "Hot Caramel Latte",
		price: 14500,
		imageUrl: "/assets/item-35.jpeg",
	},
	"item-36": {
		id: "item-36",
		name: "Hot Cappucino",
		price: 14500,
		imageUrl: "/assets/item-36.jpeg",
	},
	"item-37": {
		id: "item-37",
		name: "Hot Premium Chocolate",
		price: 14500,
		imageUrl: "/assets/item-37.jpeg",
	},
	"item-38": {
		id: "item-38",
		name: "Hot Green Tea Latte",
		price: 14500,
		imageUrl: "/assets/item-38.jpeg",
	},
	"item-39": {
		id: "item-39",
		name: "Hot Peppermint Chocolate",
		price: 14500,
		imageUrl: "/assets/item-39.jpeg",
	},
	"item-40": {
		id: "item-40",
		name: "Americano 1L",
		price: 64500,
		imageUrl: "/assets/item-40.jpeg",
	},
	"item-41": {
		id: "item-41",
		name: "Kopi Susu Keluarga 1L",
		price: 64500,
		imageUrl: "/assets/item-41.jpeg",
	},
	"item-42": {
		id: "item-42",
		name: "Kopi Dolce Latte 1L",
		price: 64500,
		imageUrl: "/assets/item-42.jpeg",
	},
	"item-43": {
		id: "item-43",
		name: "Green Tea Latte 1L",
		price: 64500,
		imageUrl: "/assets/item-43.jpeg",
	},
	"item-44": {
		id: "item-44",
		name: "Premium Chocolate 1L",
		price: 64500,
		imageUrl: "/assets/item-44.jpeg",
	},
	"item-45": {
		id: "item-45",
		name: "Orange Berry Tea 1L",
		price: 64500,
		imageUrl: "/assets/item-45.jpeg",
	},
	"item-46": {
		id: "item-46",
		name: "Orange Tea Booster 1L",
		price: 64500,
		imageUrl: "/assets/item-46.jpeg",
	},
	"item-47": {
		id: "item-47",
		name: "Ice Doger Kelapa",
		price: 17500,
		imageUrl: "/assets/item-47.jpeg",
	},
	"item-48": {
		id: "item-48",
		name: "Ice maericano 350ML",
		price: 14500,
		imageUrl: "/assets/item-48.jpeg",
	},
	"item-49": {
		id: "item-49",
		name: "Ice Cafe Latter 350ML",
		price: 14500,
		imageUrl: "/assets/item-49.jpeg",
	},
	"item-50": {
		id: "item-50",
		name: "Ice Cappucino 350ML",
		price: 14500,
		imageUrl: "/assets/item-50.jpeg",
	},
	"item-51": {
		id: "item-51",
		name: "Ice Caramel Latte 350ML",
		price: 14500,
		imageUrl: "/assets/item-51.jpeg",
	},
	"item-52": {
		id: "item-52",
		name: "Ice Creamy Hazelnut Latte 350ML",
		price: 14500,
		imageUrl: "/assets/item-52.jpeg",
	},
	"item-53": {
		id: "item-53",
		name: "Ice Kopi Susu Keluarga 350ML",
		price: 14500,
		imageUrl: "/assets/item-53.jpeg",
	},
	"item-54": {
		id: "item-54",
		name: "Ice Premium Chocolate 350ML",
		price: 14500,
		imageUrl: "/assets/item-54.jpeg",
	},
	"item-55": {
		id: "item-55",
		name: "Ice Vanilla Latte 350ML",
		price: 14500,
		imageUrl: "/assets/item-55.jpeg",
	},
};
