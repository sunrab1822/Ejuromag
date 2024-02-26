import axios from "axios";

export default {
    getAllTermek(){
        return axios.get('http://bgs.jedlik.eu/ejuromag/')
            .then(resp => {
                // console.log(resp.data);
                return resp.data;
            })
            .catch(err => {
                console.log(err);
            })

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