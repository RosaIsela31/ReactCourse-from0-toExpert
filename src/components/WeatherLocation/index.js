import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/index';
import './style.css';

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from '../../constants/weathers';

const location = "Buenos Aires,ar"
const api_key = "5f1e3382b6160f67f9122a174ae9ea7a"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: '15 m/s'
}

const data2 = {
  temperature: 15,
  weatherState: RAIN,
  humidity: 200,
  wind: '15 m/s'
}

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
          city: 'Buenos Aires',
          data: data
        }
    }

    
    handleUpdateClick = () => {
        fetch(api_weather);

        console.log('actualizado');
        this.setState({
          city: 'Otro Buenos Aires',
          data: data2
        });
    }

    render(){
      const { city, data } = this.state;
      return(
          <div className='weatherLocationCont'>
              <Location city={city} />
              <WeatherData data={data} />
              <button onClick={this.handleUpdateClick} >Actualizar</button>
          </div>
      )
    }
}

export default WeatherLocation;