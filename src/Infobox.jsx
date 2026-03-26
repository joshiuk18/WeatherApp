import Temperature from './Component/Temperature.jsx'
import Pressure from './Component/Pressure.jsx'
import Windspeed from './Component/Windspeed.jsx'
import AQI from './Component/AQI.jsx'
import Sunkissed from './Component/Sunkissed.jsx'
import Gustspeed from './Component/Gustspeed.jsx'
import WeeklyWeather from './Component/WeeklyWeather.jsx'

function Infobox({ info }) {



    return (
        <div className="p-3 sm:p-4 space-y-4">

            <div><WeeklyWeather info={info} /></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-auto sm:auto-rows-auto">

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full sm:row-span-2">
                    <Temperature info={info} />
                </div>

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full">
                    <AQI info={info} />
                </div>

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full">
                    <Sunkissed info={info} />
                </div>

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full sm:row-span-2">
                    <Windspeed info={info} />
                </div>

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full">
                    <Pressure info={info} />
                </div>

                <div className="bg-slate-800 text-white rounded-xl p-3 h-full">
                    <Gustspeed info={info} />
                </div>
            </div>
        </div>
    );
}

export default Infobox;