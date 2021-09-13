
const axios = require('axios')

class APIHandler {
    constructor(lat, lon) {
        this.lat = lat,
        this.lon = lon,
      
        this.api = axios.create({baseURL :'http://api.openweathermap.org/data/2.5'})
    }
  
    getAirQuality() {
  
      this.api.get(`/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=f273e7258676d83b6f63831ce1e7d0e9`)
      .then(response => {
        console.log(response.data.list[0].components)
        let pm10 = (response.data.list[0].components.pm10)*100/20
        let pm25 = (response.data.list[0].components.pm2_5)*100/10
        let o3 = (response.data.list[0].components.o3)*100/80
        let no2 = (response.data.list[0].components.no2)*100/40
        console.log(this.lat)
        console.log(((pm10+pm25+o3+no2)/4)*0.5)
      })
  
    }
}

module.exports = APIHandler