import React from 'react'
import Lottie from "lottie-react";
import Sunrise_Sunset from "../Animation/Sunrise_Sunset.json";

function Sunkissed({ info }) {

    return (
        <div className="h-full flex flex-col justify-between">
            <p className="font-bold border-b border-gray-600 pb-2 mb-3 text-sm sm:text-base">
                Sunkissed
            </p>
            <div className="w-full flex justify-center items-center">
                <div className="w-32 sm:w-40 md:w-48">
                    <Lottie.default animationData={Sunrise_Sunset} speed={3} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 py-3 sm:py-4">
                <p className="text-xs font-semibold sm:text-sm text-center p-2 rounded-xl bg-orange-500">
                    Sunrise: {info.sunrise}
                </p>
                <p className="text-xs font-semibold sm:text-sm text-center p-2 rounded-xl bg-indigo-500">
                    Sunset: {info.sunset}
                </p>
            </div>
            <div className="bg-slate-700 text-gray-300 text-lg sm:text-xs mt-4 sm:mt-6 p-2 sm:p-3 rounded-lg leading-relaxed">
                Latitude is {info.lat} & Longitude at {info.lon}.
            </div>
        </div>
    )
}

export default Sunkissed;