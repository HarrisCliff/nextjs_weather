import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      //console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Head>
          <title>NextJS Weather App</title>
        </Head>
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]"></div>
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          layout="fill"
          className="object-cover"
          alt="background"
        />
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-black/5 border-2 border-gray-600 text-white rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent w-[400px] border-none text-white focus:outline-none"
                type="text"
                placeholder="Enter city name"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {/* Weather Data */}
        {weather.main && <Weather data={weather} />}
      </>
    );
  }
}
