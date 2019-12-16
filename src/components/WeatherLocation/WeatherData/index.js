import React from 'react';
import PropTypes from 'prop-types';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import './style.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
  } from '../../../constants/weathers';


const WeatherData = () => (
  <div className='weatherDataCont'>
      <WeatherTemperature temperature={20} weatherState={RAIN}  />
      <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

export default WeatherData;