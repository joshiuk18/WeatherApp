import { useState } from "react";

function SearchBox({ setInfo }) {
    const [city, setCity] = useState("");

    const url = "https://api.openweathermap.org/data/2.5/weather";
    const key = import.meta.env.VITE_WEATHER_API_KEY;

    const weatherInfo = async () => {
        try {
            let res = await axios.get(
                `${url}?q=${city}&appid=${key}&units=metric`
            );
            console.log(res);
            let result = {
                name: res.data.name,
                country: res.data.sys.country,
                temp: res.data.main.temp,
                temp_max: res.data.main.temp_max,
                temp_min: res.data.main.temp_min,
                feels_like: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                wind_speed: res.data.wind.speed,
                pressure: res.data.main.pressure,
                grnd_level: res.data.main.grnd_level,
                sea_level: res.data.main.sea_level,
                timezone: res.data.timezone,
                visibility: res.data.visibility,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                lat: res.data.coord.lat,
                long: res.data.coord.lon,
                wind_deg: res.data.wind.deg,
                wind_gust: res.data.wind.gust,
                description: res.data.weather[0].description,
            };

            return result;

        } catch (error) {
            alert("City not found");
            return null;
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        let newInfo = await weatherInfo();
        if (newInfo) {
            setInfo(newInfo);
        }
        setCity("");
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full px-2 sm:px-4">

            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4 text-center">
                Weather App
            </h1>

            <form onSubmit={handleSubmit} className="relative w-full max-w-md sm:max-w-lg">
                <input
                    type="text"
                    placeholder="Search city..."
                    value={city}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-24 sm:pr-28 py-2.5 sm:py-3 rounded-full bg-slate-700 text-white outline-none text-sm sm:text-base"
                />

                <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-500 rounded-full 
                text-white text-sm sm:text-base hover:bg-blue-600 transition">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBox;