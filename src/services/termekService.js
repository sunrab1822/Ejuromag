import axios from "axios";

export default {
    async getProducts(id){
        return axios.get('http://127.0.0.1:8000/api/products/'+id)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

    },
    async UserRegister(datas){ 
        const resp = await axios.post('http://127.0.0.1:8000/api/register', datas)
        return resp.data
    },
    async UserLogin(datas){ 
        const resp = await axios.post('http://127.0.0.1:8000/api/login', datas)
        return resp.data
    },
    async UserLogOut(token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.post('http://127.0.0.1:8000/api/logout')
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