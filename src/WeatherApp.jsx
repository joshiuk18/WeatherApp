import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import SideInfo from './SideInfo.jsx';
import { useState } from 'react';

function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 34.08,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Sunny",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="border border-black p-12 max-w-7xl mx-auto bg-slate-100 rounded-3xl">
            <div className='flex max-w-6xl mx-auto shadow-2xl rounded-3xl overflow-hidden'>
                <div className='w-3/4 bg-white'>
                    <SearchBox updateInfo={updateInfo} />
                    <InfoBox info={weatherInfo} />
                </div>
                <div className='w-1/4 bg-slate-200'>
                    <SideInfo info={weatherInfo} />
                </div>
            </div>
        </div>
    )
}
export default WeatherApp;