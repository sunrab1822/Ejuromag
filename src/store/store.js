import { defineStore } from 'pinia'

export const useTermekStore = defineStore({
    id: 'termek',
    state: () => ({
        SelectedtermekNev: "",
        SelectedtermekKep: "",
        SelectedtermekAr: 0,
        kosar: ""
    }),
    actions: {
        setTermekNev(adat, adat2) {
            this.SelectedtermekNev = adat,
            this.SelectedtermekAr = adat2
        },
        setKosar(termekek)
        {
            this.kosar = termekek
        }
    }
})
