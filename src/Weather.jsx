import React, { useState } from 'react'
import Searchbox from './Searchbox.jsx';
import Infobox from './Infobox.jsx';

function Weather() {

    const [info, setInfo] = useState({
        name: "Haldwani",
        country: "India",
        temp: 17.73,
        temp_max: 17.73,
        temp_min: 17.73,
        feels_like: 16.29,
        humidity: 28,
        wind_speed: 2.61,
        pressure: 1017,
        grnd_level: 954,
        sea_level: 1011,
        timezone: 19800,
        visibility: 10000,
        lat: 29.2167,
        lon: 79.5167,
        sunrise: 1770254930,
        sunset: 1770294178,
        wind_gust: 3,
        wind_deg: 290,
        description: "few clouds",
    });

    return (
        <div className="min-h-screen flex flex-col items-center px-3 sm:px-4 md:px-6 py-4 bg-slate-900">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
                <Searchbox setInfo={setInfo} />
            </div>
            <div className="w-full max-w-7xl mt-4 sm:mt-5 md:mt-6">
                <Infobox info={info} />
            </div>
        </div>
    );
}

export default Weather;