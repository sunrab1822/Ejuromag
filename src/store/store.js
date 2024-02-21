import { defineStore } from 'pinia'

export const useTermekStore = defineStore({
    id: 'termek',
    state: () => ({
        SelectedtermekNev: "",
        SelectedtermekKep: ""
    }),
    actions: {
        setTermekNev(adat, adat2) {
            this.SelectedtermekNev = adat,
            this.SelectedtermekKep = adat2
        }
    }
})
