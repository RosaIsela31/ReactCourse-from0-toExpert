import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className='weatherExtraInfCont'>
      <span className='extraInfText'>
          { `Humedad: ${ humidity } % - `}
      </span>
      <span className='extraInfText'>
          { `Vientos: ${ wind }`}
      </span>
  </div>
)

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;