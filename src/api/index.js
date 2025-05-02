import axios from "axios";
const BASE_URL = "https://localhost:7131/api/"

export const ENDPOINTS ={
    CUSTOMER:'Customer',
    FOODITEM:'FoodItem',
    ORDER:'Order'
}


export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url),
        fetchById: id => axios.get(url+id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecored) => axios.put(url + id, updatedRecored),
        delete: id => axios.delete(url + id)
    }
}
// import axios from 'axios';

// const BASE_URL = "https://localhost:7131/api/";

// export const ENDPOINTS = {
//     CUSTOMER: 'Customer',
//     FOODITEM: 'FoodItem',
//     ORDER: 'Order'
// };

// export const createAPIEndpoint = endpoint => {
//     const url = `${BASE_URL}${endpoint}/`;

//     return {
//         fetchAll: () => axios.get(url),
//         fetchById: id => axios.get(url + id),
//         create: newRecord => axios.post(url, newRecord),
//         update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
//         delete: id => axios.delete(url + id)
//     };
// };
