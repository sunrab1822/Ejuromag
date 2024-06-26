import axios from "axios";

export default {
    async getProducts(id){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/products/" + id)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
            })
    },
    async getAllProducts(){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/products ")
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
            })
    },
    async getProductsByManufacturer(id){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/productwManuf/" + id)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
            })
    },
    async getProductsBySearchByName(data){ 
        const resp = await axios.get('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/productbyName/' + data)
        return resp.data
    },
    async getProductsByMinMaxPrice(min, max){ 
        const resp = await axios.get('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/productByPrice/' + min + '/' + max)
        return resp.data
    },

    async getManufacturers(){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/manufacturers")
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
            })
    },
    async getCategories(){
        return axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/categories")
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
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
    async UserUpdate(data, token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.patch('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/updateUser', data)
        return resp.data
    },
    async ResetPasswordToken(data){ 
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/reset-password-token', data)
        return resp.data
    },
    async ResetPassword(data){ 
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/reset-password', data)
        return resp.data
    },
    async GetOrder(token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.get('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/getOrder')
        return resp.data
    },
    async SendBuy(data, token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/create-order', data)
        return resp.data
    },

    async CreateNewProduct(data,token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.post('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/createProduct', data)
        return resp.data
    },
    async UpdateProduct(data, id, token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const resp = await axios({
          method: 'PUT',
          url: 'https://bgs.jedlik.eu/ejuromag/Ejuromag/api/modifyProduct/' + id,
          data: data
        });
        return resp.data;
      }
}