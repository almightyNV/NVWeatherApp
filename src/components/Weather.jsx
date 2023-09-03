import React from "react";
import 'remixicon/fonts/remixicon.css'

const Weather = ({ props }) => {
  const days = ["Night", "Day"];
  const { location, current } = props;
  const { name, region, country } = location;
  const {
    temp_c,
    humidity,
    is_day,
    last_updated,
    pressure_in,
    wind_kph,
    wind_dir,
    condition,
  } = current;
  const { icon, text } = condition;

  return (
    <>
      <div className="lg:px-4 lg:py-2 lg:duration-700 lg:rounded-3xl lg:w-2/6 lg:h-4/6 bg-white lg:ml-6 flex justify-start items-center flex-col flex-wrap gap-3 shadow-lg shadow-black">
        <div className="flex justify-around items-center gap-3 w-4/6 h-1/5">
          <h1 className="md:text-3xl font-bold text-blue-800 text-center">
            NV Weather App
          </h1>
          <img
            src="https://imgs.search.brave.com/7sL6VxylIpm9vo9Xev99INdyKeoVOCsaAlYeExwH4Jg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIyLzczLzE4/LzM2MF9GXzEyMjcz/MTg3N19BYnF3aGtv/M3lkY2tWcFU0eTJF/U3kyaFVtZTdYQnlK/Qy5qcGc"
            alt="NV Weather App Logo"
            className="md:w-1.5/5 md:h-3/5 "
          />
        </div>
        <div className="flex justify-around items-center gap-10 h-30 w-30">
          <div className="w-25 h-25 flex justify-center items-center gap-3 mx-10">
            <h1 className="text-4xl">{temp_c}&#8451;</h1>|<h1 className="font-semibold">{text}</h1>
          </div>
          <div className="w-25 h-25 flex justify-center items-center">
            <img className="w-full h-full" src={`https:${icon}`} alt="weather sign" />
          </div>
        </div>
        <div className="flex gap-5 my-2">
            <div className="w-30 text-center mx-3">
                <h1 className="font-semibold text-lg">{name}</h1>
                <h4>Location</h4>
            </div>
            <div className="w-30 text-center mx-3">
                <h1 className="font-semibold text-lg">{country}</h1>
                <h4>Country</h4>
            </div>
        </div>
        <div className="flex justify-center items-center w-full py-2">
          <hr className="border-1 border-black w-full"/>
          <h1 className="w-4/6 text-center border-2 border-black px-5 py-2 rounded-2xl">Weather Info</h1>
          <hr className="border-1 border-black w-full"/>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center gap-5 flex-wrap">
        <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-history-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{last_updated.substring(11)}</h3>
              <h6 className="text-sm">Last Updated</h6>
            </div>
          </div>
          <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-calendar-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{last_updated.slice(0,10)}</h3>
              <h6 className="text-sm">Date</h6>
            </div>
          </div>
          <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-water-percent-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{humidity}</h3>
              <h6 className="text-sm">Humidity</h6>
            </div>
          </div>
          <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-arrow-down-circle-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{pressure_in}</h3>
              <h6 className="text-sm">Pressure</h6>
            </div>
          </div>
          <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-windy-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{wind_kph}</h3>
              <h6 className="text-sm">Wind KPH</h6>
            </div>
          </div>
          <div className="bg-white w-2/6 h-10 flex justify-start items-center gap-4 px-3">
            <i className="ri-direction-line text-3xl"></i>
            <div>
              <h3 className="text-sm font-bold">{wind_dir}</h3>
              <h6 className="text-sm">Wind Flow</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
