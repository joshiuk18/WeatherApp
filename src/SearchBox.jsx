import { useState } from "react";

function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e737dc0393a848631b7ca9ef6f3f39be";


    let getWeatherInfo = async () => {
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }


    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className="p-2">
            <form onSubmit={handleSubmit} className="relative w-full max-w-4xl" >
                <input
                    type="text"
                    placeholder="Search city or type a city name"
                    value={city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 pr-20 rounded-3xl outline-none border"
                />
                <button className="absolute right-0.5 top-1/2 transform -translate-y-1/2 
                px-12 py-2 border rounded-3xl hover:bg-cyan-200">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBox;