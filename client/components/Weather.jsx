import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import WeatherForecast from './WeatherForecast.jsx';

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Weather = () => {
  const [text, setText] = useState('');
  const [weather, setWeather] = useState(null);
  const [selectDay, setSelectDay] = useState(days[0]);

  const getWeather = async (location, days) => {
     await axios.get(`/api/weather/${location}/${days}`)
    .then(({ data }) => {
      setWeather(data);
    })
  }

  const handleSubmit = (e, location, days) => {
    e.preventDefault();
    getWeather(location, days);
  };

  console.log('current weather', weather);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleValue = (event) => {
    setSelectDay(event.target.value);
  }

  return (
    <div className='profile-card'>
      <NavBar />
      <h2>Check the weather</h2>
      <form className="box">
        <div className="field">
          <label className="label">Search by region</label>
          <div className="control">
            <input
              type='text'
              value={text}
              className="card"
              name="region"
              onChange={handleChange}
            />
            <select value={selectDay} onChange={handleValue}>
              {days.map((day, index) => <option key={index}>{day}</option>)}
            </select>
          </div>
        </div>
        <input
          type="submit"
          value="Check region"
          className="button is-info is-rounded"
          onClick={(e) => handleSubmit(e, text, selectDay)}
        />
      </form>
      <div>
        {!weather ? null : (
          <div>
            Forecast: {weather.current.temp_f} °F
          </div>
          )
        }
      </div>
      <div>
        {!weather ? null : (
          weather.forecast.forecastday.map(forecast => <WeatherForecast key={forecast.date} forecast={forecast} />)
        )}
      </div>
    </div>
  );
};

export default Weather;