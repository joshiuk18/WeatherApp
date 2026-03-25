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

            let result = {
                city: res.data.name,
                country: res.data.sys.country,
                temperature: res.data.main.temp,
                tempMaximum: res.data.main.temp_max,
                tempMinimum: res.data.main.temp_min,
                feelsLike: res.data.main.feels_like,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                sunrise: res.data.sys.sunrise,
                sunset: res.data.sys.sunset,
                latitude: res.data.coord.lat,
                longitude: res.data.coord.lon,
                windSpeed: res.data.wind.speed,

                // extra (for your UI)
                cloudCover: res.data.clouds.all,
                visibility: res.data.visibility / 1000,
                precipitation: res.data.rain?.["1h"] || 0,
                uvIndex: 0, // API me nahi hota (alag endpoint lagega)
                windDirection: res.data.wind.deg,
                gustSpeed: res.data.wind.gust || 0,
            };

            return result;
        } catch (error) {
            alert("City not found ❌");
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

    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="text-white text-3xl font-bold mt-6 mb-4">
                Weather App
            </h1>

            <form onSubmit={handleSubmit} className="relative w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-full bg-slate-700 text-white outline-none"
                />

                <button className="absolute right-1 top-1/2 -translate-y-1/2 px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBox;