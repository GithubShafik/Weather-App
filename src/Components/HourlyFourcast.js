import React from 'react'

const HourlyFourcast = ({hourlyData}) => {
  return (
    <div className='flex flex-wrap justify-between'>
        <h2 className='w-full mt-4 text-3xl font-bold text-center dark:text-white '>Hourly Forcast</h2>
      {hourlyData.map((hour,i)=>(
        <div key={i} className='w-1/2 p-4 md:w-1/4'>
            <div className="p-4 text-center bg-white border rounded-lg shadow-lg dark:bg-gray-800 , dark:text-white dark:border dark:rounded-lg dark:shadow-lg dark:shadow-white">
                <h3>{hour.time.split(' ')[1]}</h3>
                <img src={`https:${hour.condition.icon}`} alt="hourly icon" className='mx-auto' />
                <p className='text-xl font-semibold'>{hour.condition.text}</p>
                <p>{hour.temp_c}°C</p>
                <p>Humidity: {hour.humidity}</p>
                <p>Wind Speed:{hour.wind_kph}kph</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default HourlyFourcast
