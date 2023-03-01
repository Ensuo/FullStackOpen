import axios from 'axios';

const url = "https://restcountries.com/v3.1/all";

const getAll = () => {
    return axios.get(url);
}

const create = newObject => {
    return axios.post(url, newObject);
}

export default { 
    getAll: getAll, 
    create: create, 
}