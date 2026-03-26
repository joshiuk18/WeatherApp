import React from "react";

function Temperature({ info }) {

    return (
        <div className="h-full text-gray-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between">

            <div>
                <div className="flex justify-between items-center text-white border-gray-600">
                    <div>
                        <p className="text-blue-400 text-2xl">{info.name}, {info.country}</p>
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-gray-400">Today</p>
                        <p className="font-bold text-lg">{new Date().toLocaleDateString()}</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3 m-3">
                        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                            {info.temp}
                        </p>
                        <span className="text-3xl font-bold text-gray-400">&deg;C</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1">

                    <div className="bg-slate-700 p-4 rounded-xl flex flex-col items-center justify-center aspect-square">
                        <p className="text-base text-gray-300">Max Temp</p>
                        <p className="text-lg font-bold text-white">
                            {(info.temp_max)} &deg; C
                        </p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-xl flex flex-col items-center justify-center aspect-square">
                        <p className="text-base text-gray-300">Min Temp</p>
                        <p className="text-lg font-bold text-white">
                            {(info.temp_min)} &deg; C
                        </p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-xl flex flex-col items-center justify-center aspect-square">
                        <p className="text-base text-gray-300">Feels Like</p>
                        <p className="text-lg font-bold text-white">
                            {(info.feels_like)} &deg; C
                        </p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-xl flex flex-col items-center justify-center aspect-square">
                        <p className="text-base text-gray-300">Humidity</p>
                        <p className="text-lg font-bold text-white">
                            {(info.humidity)} %
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-slate-700 text-white rounded-xl p-4 mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                    <span>Wind Speed</span>
                    <span className="font-semibold">{info.humidity} %</span>
                </div>
                <div className="flex justify-between">
                    <span>Pressure</span>
                    <span className="font-semibold">{info.precipitation} mm</span>
                </div>
                <div className="flex justify-between">
                    <span>Ground Level</span>
                    <span className="font-semibold">{info.wind_speed} km/h</span>
                </div>
                <div className="flex justify-between">
                    <span>Sea Level</span>
                    <span className="font-semibold">{info.wind_direction} &deg; C</span>
                </div>
                <div className="flex justify-between">
                    <span>Timezone</span>
                    <span className="font-semibold">{info.timezone}</span>
                </div>
                <div className="flex justify-between">
                    <span>Visibility</span>
                    <span className="font-semibold">{info.visibility}</span>
                </div>
            </div>
        </div>
    );
}

export default Temperature;