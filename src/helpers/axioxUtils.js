const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const fetchWeatherInfo = (city, callback) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
  .then(response => callback(response.data))
  .catch(error => callback(error.response.data))
}

module.exports = {fetchWeatherInfo}