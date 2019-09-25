import './index.css';
import { Weather } from './Weather'
import { UI } from './UI'
import { Store } from './Store'

const store     = new Store()
const { city, countryCode }        = store.getLocationData();
const ui        = new UI()
const weather   = new Weather( city, countryCode )

const fetchWeather = async () => {

    const data = await weather.getWeather()
    console.log(data)
    ui.render( data )

}

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city          =document.getElementById('city').value
    const countryCode   =document.getElementById('countryCode').value
    weather.changeLocation( city, countryCode )
 
    store.setLocationData( city, countryCode )
    
    fetchWeather()
    e.preventDefault()
})

document.addEventListener('DOMContentLoaded', fetchWeather)