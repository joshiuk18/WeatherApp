import React from 'react'
import Lottie from "lottie-react";
import WindMill from "../Animation/WindMill.json";
import storm from "../Animation/storm.json";

function Windspeed({ info }) {

    return (
        <div className="h-full flex flex-col justify-between ">

            <p className="font-bold border-b border-gray-600 pb-2">Wind Speed</p>

            <div className="flex justify-center items-center">
                <Lottie.default animationData={WindMill} className="h-28 w-28" />
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="text-center flex-1">
                    <p className="text-gray-300 text-sm mb-1">Wind Speed</p>
                    <p className="text-4xl font-semibold">
                        {info.wind_speed}<span className="text-lg ml-1">km/h</span>
                    </p>
                </div>
                <div className="bg-slate-700 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap">
                    {info.description}
                </div>
            </div>

            <div className="bg-slate-700 text-gray-300 text-lg sm:text-xs mt-4 sm:mt-6 p-2 sm:p-3 rounded-lg leading-relaxed">
                Current wind speed is {info.wind_speed} km/h, with gusts at {info.wind_gust} m/s
            </div>

            <div className='mt-4'>
                <p className="font-semibold border-b border-gray-600 pb-2 mb-20">Precipitation & UV Index</p>

                <div className="grid grid-cols-2 gap-4 items-center mt-2 text-center">

                    <div className="flex flex-col items-center gap-2 ">
                        <p className="text-gray-300 text-xl font-bold">UV Index</p>
                        <p className="text-2xl font-semibold">
                            4.8
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2 border-l border-gray-600 pl-4">
                        <div className="h-16 w-20 flex justify-center items-center">
                            <Lottie.default animationData={storm} />
                        </div>
                        <p className="text-2xl font-semibold">0 mm</p>
                    </div>
                </div>

                <div className="bg-slate-700 text-gray-300 text-xs mt-12 p-3 rounded-lg leading-relaxed">
                    Current Precipitation chances sit at 0 mm and UV Index is 4.8.
                </div>
            </div>
        </div>
    )
}

export default Windspeed;