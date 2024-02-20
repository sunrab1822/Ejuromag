import { defineStore } from 'pinia'

export const useTermekStore = defineStore({
    id: 'termek',
    state: () => ({
        SelectedtermekNev: "",
        SelectedtermekKep: "",
    }),
    actions: {
        setTermekNev([termekKep, termekNev]) {
            this.SelectedtermekNev = termekNev,
            this.SelectedtermekKep = termekKep
        }
    }
})
