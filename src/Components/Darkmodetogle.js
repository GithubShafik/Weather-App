import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import weatherapp from '../asset/weatherapp.png'

const DarkModeToggle = ({ toggleTheme, setTheme }) => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="flex p-4 my-1 mt-2 cursor-pointer md:w-fit">
        <img src={weatherapp} alt="weather-app" className="w-20 h-20" />
        <h2 className='m-5 text-5xl font-bold dark:text-white '>Weather App</h2>
      </div>

      <div className="p-4 my-1 mt-2 cursor-pointer md:w-fit">
        <div className="container flex">
          <div className="switch md:justify-end">
            <label htmlFor="toggle">
              <input
                id="toggle"
                className="toggle-switch"
                type="checkbox"
                onClick={(e) => {
                  setTheme(e.target.checked ? "light" : "dark");
                }}
              />
              <div className="sun-moon">
                <div className="dots"></div>
              </div>
              <div className="background">
                <div className="stars1"></div>
                <div className="stars2"></div>
              </div>
              <div className="fill"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
