import axios from "axios";

export default {
    async getProducts(id){
        const resp =  axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/products/" + id)
        return resp.data;
    },
    async getAllProducts(){
        const resp = axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/products ")
        return resp.data;
    },
    async getProductsByManufacturer(id){
        const resp = axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/productwManuf/" + id)
        return resp.data;
    },
    async SearchByName(data){ 
        const resp = await axios.get('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/productbyName/' + data)
        return resp.data
    },

    async getManufacturers(){
        const resp = axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/manufacturers")
        return resp.data;
    },
    async getCategories(){
        const resp = axios.get("https://bgs.jedlik.eu/ejuromag/Ejuromag/api/categories")
        return resp.data;
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
    async UpdateProduct(data, id, token){
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const resp = await axios.put('https://bgs.jedlik.eu/ejuromag/Ejuromag/api/modifyProduct/' + id, data)
        return resp.data
    }
}