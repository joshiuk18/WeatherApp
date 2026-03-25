import Temperature from './Component/Temperature.jsx'
import Pressure from './Component/Pressure.jsx'
import Windspeed from './Component/Windspeed.jsx'
import AQI from './Component/AQI.jsx'
import Sunkissed from './Component/Sunkissed.jsx'
import Suggest from './Component/Suggest.jsx'

function Infobox({ info }) {

    const card =
        "bg-slate-800/80 backdrop-blur-md border border-slate-700 shadow-lg text-white rounded-xl p-4 h-full";

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 md:auto-rows-fr gap-5 p-5 items-stretch">

            {/* 🔹 Left BIG */}
            <div className={`md:row-span-2 ${card}`}>
                <Temperature info={info} />
            </div>

            {/* 🔹 Top Middle */}
            <div className={card}>
                <Pressure info={info} />
            </div>

            {/* 🔹 Top Right */}
            <div className={card}>
                <Windspeed info={info} />
            </div>

            {/* 🔹 Right BIG */}
            <div className={`md:row-span-2 ${card}`}>
                <Suggest info={info} />
            </div>

            {/* 🔹 Bottom Middle Left */}
            <div className={card}>
                <AQI info={info} />
            </div>

            {/* 🔹 Bottom Middle Right */}
            <div className={card}>
                <Sunkissed info={info} />
            </div>

        </div>
    );
}

export default Infobox;