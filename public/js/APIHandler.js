const axios = require('axios')

class APIHandler {
    constructor(lat, lon) {
        this.lat = lat,
        this.lon = lon,
      
        this.api = axios.create({baseURL :'http://api.openweathermap.org/data/2.5'})
    }
  
    getAirQuality() {
  
      return this.api.get(`/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=f273e7258676d83b6f63831ce1e7d0e9`)
      
      
    }
}

module.exports = APIHandler