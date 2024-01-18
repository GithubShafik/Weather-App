import React, { useEffect, useState } from 'react'
import Searchbar from '../Components/Searchbar'
import WeatherCard from '../Components/WeatherCard'
import MapComponent from '../Components/MapComponent'
import HourlyFourcast from '../Components/HourlyFourcast'
import Darkmodetogle from '../Components/Darkmodetogle'
import Footer from '../Components/Footer'

const Home = () => {
    const [weatherData , setWeatherData]=useState(null);
    const [theme, setTheme]=useState('dark');

  useEffect(()=>{
    if(theme === 'light'){
      document.documentElement.classList.remove('dark');
    }else{
      document.documentElement.classList.add('dark');
      
    }
  } , [theme])
    
    const fetchWeatherData = async (query)=>{
        const apiKey = 'ef89e392885a42b2a0c114030241601';
        const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=2`;
        try{
            const res = await fetch(baseUrl);
            const data = await res.json();
            console.log(data);
            setWeatherData(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const toggleTheme = () => {
      setTheme(theme==='light' ? 'dark' : 'light')
      console.log(theme);
    }
    
  return (
    <div className='container p-4 mx-auto dark:bg-gray-800 '>
      <Darkmodetogle toggleTheme={toggleTheme} setTheme={setTheme} theme={theme}/>
      <Searchbar onSearch={fetchWeatherData}/>
      {weatherData && 
      <>
       <WeatherCard weatherData={weatherData} /> 
       <HourlyFourcast hourlyData={weatherData.forecast.forecastday[0].hour}/>
       <MapComponent latitude={weatherData.location.lat}  longitude={weatherData.location.lon}/>
      </>
      }
      <Footer/>
      
    </div>
  )
}

export default Home
