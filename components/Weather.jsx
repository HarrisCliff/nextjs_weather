import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  const unixSunrise = data.sys.sunrise;
  const unixSunset = data.sys.sunset;
  const sunriseDate = new Date(unixSunrise * 10000);
  const sunriseHours = sunriseDate.getHours;
  const sunriseMinutes = "0" + sunriseDate.getMinutes;
  const sunrise = `${sunriseHours} : ${sunriseMinutes}`;

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[70vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between mb-2 items-center bg-black/20 relative p-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-2xl">
        <div className="flex flex-col items-center">
          <p className="">{data.sys.country}</p>
        </div>
        <div className="flex flex-col">
          <div>
            <p>Sunrise:</p>
          </div>
          <div>
            <p>Sunset: </p>
          </div>
        </div>
      </div>
      <div className="relative flex mb-2 justify-between bg-black/20 relative p-8 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-2xl">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="">{data.weather[0].main}</p>
        </div>
        <p className="text-6xl">
          {data.main.temp.toFixed(0)}
          <span>&#176;</span>
        </p>
      </div>
      {/* Bottom */}
      <div className="bg-black/20 relative p-8 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 rounded-2xl">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}
              <span>&#176;</span>
            </p>
            <p className="text">Feels like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.main.humidity.toFixed(0)}
              <span>%</span>
            </p>
            <p className="text">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)}
              <span>Mph</span>
            </p>
            <p className="text">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
