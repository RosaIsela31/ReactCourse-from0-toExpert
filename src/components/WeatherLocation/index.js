import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData/index';

import './style.css';

const WeatherLocation = () => (
  <div className='weatherLocationCont'>
      <Location city={'Ciudad de México'} />
      <WeatherData />
  </div>
)




export default WeatherLocation;