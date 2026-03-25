import React, { useState } from 'react'
import Searchbox from './Searchbox.jsx';
import Infobox from './Infobox.jsx';

function Weather() {

    const [info, setInfo] = useState({
        city: "Haldwani",
        country: "India",

        sunrise: 1770254930,
        sunset: 1770294178,

        temp: 17.73,
        temp_max: 17.73,
        temp_min: 17.73,
        feels_like: 16.29,

        humidity: 28,
        pressure: 1017,

        lat: 29.2167,
        lon: 79.5167,

        wind_speed: 2.61,
        wind_direction: 246,
        wind_gust: 3,

        cloud: 20,
        visibility: 10,
        precipitation: 0,

        uv_index: 4.8
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center p-4">

            <Searchbox setInfo={setInfo} />

            <div className="w-full max-w-7xl mt-5">
                <Infobox info={info} />
            </div>
        </div>

    );
}

export default Weather;