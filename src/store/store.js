import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
        CartProductPrice: 0,
    }),
    persist: true,
    getters: {
        getUser() {
            return this.user;
        },
        getLoggedIn() {
            return this.isLoggedIn;
        },
        getProductsPrice() {
            return this.CartProductPrice;
        }
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        setProductPrice(price) {
            this.CartProductPrice = price;
        },
        
        setLoggedIn(state) {
            this.isLoggedIn = state;
        }
    }
})