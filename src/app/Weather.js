export class Weather {
    
    constructor( city, countryCode ) {
        this.apiKey         = '4081c759db6d0e4035285cb0bab09a5c'
        this.city           = city
        this.countryCode    = countryCode
    }

    async getWeather() {

        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`

        const response  = await fetch(URI)
        const data      = await response.json()

        return data

    }

    changeLocation( city, countryCode ) {

        this.city=city
        this.countryCode=countryCode

    }

}