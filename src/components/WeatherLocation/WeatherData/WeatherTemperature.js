import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import WeatherIcon from 'react-icons-weather';

import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from '../../../constants/weathers';

const icons = {
    [CLOUD]: "801",
    [CLOUDY]: "804",
    [SUN]: "800",
    [RAIN]: "200",
    [SNOW]: "600",
    [WINDY]: "751",
}

const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];

  if(icon)
      return <WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" className='wicon'   />;
  else
      return <WeatherIcon name="owm" iconId="800" flip="horizontal" rotate="90"  className='wicon'  />
  
}

const WeatherTemperature = ({ temperature, weatherState }) => {
  return(
      <div className='weatherTemperatureCont'>   
          {
              getWeatherIcon(weatherState)
          }  
                     
           <span className='temperature'> {`${temperature}` } </span>
           <span className='temperatureType'> {`ºC`} </span> 
             
      </div>
  )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}


export default WeatherTemperature;