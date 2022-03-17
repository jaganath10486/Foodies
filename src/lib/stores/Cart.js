import { writable } from "svelte/store";
import { browser } from "$app/env";

let cart_items;

if(browser)
{
    cart_items = writable(JSON.parse(localStorage.getItem('cart')) || []);
    cart_items.subscribe((value) => {
        localStorage.setItem('cart',JSON.stringify(value));
    });
}

export default cart_items;