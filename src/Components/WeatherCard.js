import React from 'react'

const WeatherCard = ({weatherData}) => {
  return (
    <div>
      <h2 className='text-3xl font-bold dark:text-white '>{weatherData.location.name},{weatherData.location.country}</h2>
    <div className='flex md:flex-row-col'>

      <div className='w-1/2 p-4 bg-white rounded-lg dark:bg-gray-800 , dark:text-white '>
      <h3 className='text-xl font-bold'>{weatherData.location.name},{weatherData.location.country}</h3>
      <div className='flex align-middle'>
          <img src={weatherData.current.condition.icon} alt='Wether Icon'/>
          <h2 className='my-auto text-2xl'>{weatherData.current.condition.text}</h2>
      </div>
      <p>{weatherData.current.temp_c}°C</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Wind Speed : {weatherData.current.wind_kph}Kph</p>
      </div>
    {/* </div> */}

    {/*  */}
    {/* text-center bg-white border   */}
    <div className='w-1/2 p-4 bg-white rounded-lg dark:bg-gray-800 , dark:text-white  '>
      <h2 className='text-3xl font-bold'>{weatherData.forecast.forecastday[1].date}</h2>
      <div className='flex align-middle'>
          <img src={weatherData.forecast.forecastday[1].day.condition.icon} alt='Wether Icon'/>
          <h2 className='my-auto text-2xl'>{weatherData.forecast.forecastday[1].day.condition.text}</h2>
      </div>
      <p>{weatherData.forecast.forecastday[1].day.mintemp_c}°C-{weatherData.forecast.forecastday[1].day.maxtemp_c}°C</p>
      <p>Humidity: {weatherData.forecast.forecastday[1].day.avghumidity}%</p>
      <p>Wind Speed : {weatherData.forecast.forecastday[1].day.maxwind_kph}Kph</p>
      </div>
    </div>

    
    </div>
  )
}

export default WeatherCard
