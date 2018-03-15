import axios from 'axios';

const API_KEY = "d9af35eae2cf52411f9000a3acc3984e";
const WEATHER_API_URL = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`
const FORECAST_API_URL = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${API_KEY}`

const getWeather = (callback, location) => axios
    .get(WEATHER_API_URL(location))
    .then((response) => {
        callback(response.data);
    })
    .catch((e) => {
        console.log(e);
    });

const getForecast = (callback, location) => axios
    .get(FORECAST_API_URL(location))
    .then((response) => {
        callback(response.data);
    })
    .catch((e) => {
        console.log(e);
    });

export {
    getWeather,
    getForecast
}
