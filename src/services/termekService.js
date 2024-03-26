import axios from "axios";

export default {
    async getProducts(id){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/products/" + id)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

    },
    async UserRegister(datas){ 
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/register', datas)
        return resp.data
    },
    async UserLogin(datas){ 
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/login', datas)
        return resp.data
    },
    async UserLogOut(token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/logout')
        return resp.data
    },
    async ResetPasswordToken(data){ 
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/reset-password-token', data)
        return resp.data
    },

    // getAllAuthor()
    // {
    //     return axios.get('http://localhost:8000/api/get-all-authors')
    //     .then(resp => {
    //         // console.log(resp.data);
    //         return resp.data;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // },
    // getBooksByAuthor(authorName)
    // {
    //     return axios.get('http://localhost:8000/api/book-by-author'+authorName)
    //     .then(resp => {
    //         // console.log(resp.data);
    //         return resp.data;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }

}