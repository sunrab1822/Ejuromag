import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    persist: true,
    getters: {
        getUser() {
            return this.user;
        },
        getLoggedIn() {
            return this.isLoggedIn;
        },
    },
    actions: {
        setUser(user) {
            this.user = user;
        },  
        setLoggedIn(state) {
            this.isLoggedIn = state;
        }
    }
})

export const useCartStore = defineStore('cart', {
    state: () => ({
        productsInCart: [],
        onePrices: [],
        fullCartPrice: 0,
    }),
    persist: true,
    getters: {
        getproductsInCart() {
            return this.productsInCart;
        },
        getOnePrices() {
            return this.onePrices;
        },
        getFullCartPrice() {
            return this.fullCartPrice;
        }
    },
    actions: {
        setProductsinCart(productsInCart) {
            this.productsInCart = productsInCart;
        },
        setOnePrices(onePrices) {
            this.onePrices = onePrices;
        },
        
        setFullCartPrice(fullCartPrice) {
            this.fullCartPrice = fullCartPrice;
        }
    }
})