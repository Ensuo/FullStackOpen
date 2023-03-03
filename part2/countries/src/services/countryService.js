import axios from 'axios';
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


const url = "https://restcountries.com/v3.1/all";
const api_key = process.env.REACT_APP_API_KEY

const getAll = () => {
    return axios.get(url);
}

const create = newObject => {
    return axios.post(url, newObject);
}

const getCoords = name => {
    return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${api_key}`)
}

const getWeather = (lat, lon) => {
    console.log(lat);
    console.log(lon);
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
} 

export default { 
    getAll: getAll, 
    create: create, 
    getCoords: getCoords,
    getWeather: getWeather,
}