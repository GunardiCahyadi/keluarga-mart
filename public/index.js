import { sortMenuByPrice, MENU } from "./shared.js"

console.log(MENU);

let result = Object.values(MENU);

let hasil = result.sort(function(a, b){return a.price - b.price});

console.log(hasil);
