import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false
    }),
    persist: true,
    getters: {
        getUser() {
            return this.user;
        },
        getLoggedIn() {
            return this.isLoggedIn;
        }
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        
        setLoggedIn(state) {
            this.isLoggedIn = state;
        },
        updateUserBalance(amount) {
            if(this.user) {
                this.user.balance = amount;
            }
        },
        updateUserVaultBalance(amount) {
            if(this.user) {
                this.user.vault_balance = amount;
            }
        }
    }
})