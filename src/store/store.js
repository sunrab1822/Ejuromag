import { defineStore } from 'pinia'

export const useTermekStore = defineStore({
    id: 'termek',
    state: () => ({
        SelectedtermekNev: "",
        SelectedtermekKep: "",
        SelectedtermekAr: 0,
        kosar: [],
        termekek: []
    }),
    actions: {
        setTermekNev(adat, adat2) {
            this.SelectedtermekNev = adat,
            this.SelectedtermekAr = adat2
        },
        setKosar(adat, adat2)
        {
            this.termekek = [adat, adat2]
            this.kosar = this.termekek
            console.log(this.kosar);
            console.log(this.termekek[0]);
        }
    }
})
