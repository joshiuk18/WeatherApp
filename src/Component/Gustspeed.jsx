import React from 'react'
import Lottie from "lottie-react";
import Windblow from "../Animation/Windblow.json";

function Gustspeed({ info }) {
    return (
        <div className="h-full flex flex-col justify-between ">

            <p className="font-semibold sm:font-bold border-b border-gray-600 pb-2 mb-3 text-sm sm:text-base">
                Gust Speed
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center">
                <div className="flex flex-col items-start gap-2 pl-4">
                    <div className="h-14 w-16 sm:h-16 sm:w-20 flex justify-center items-center">
                        <Lottie.default animationData={Windblow} />
                    </div>
                    <p className="text-xl sm:text-2xl font-semibold mt-2">
                        {info.wind_gust} m/s
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2 border-l border-gray-600 pl-3 sm:pl-4">
                    <p className="text-gray-300 text-xs sm:text-sm">
                        Direction :-
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold">
                        {info.wind_deg}&deg; WSW
                    </p>
                </div>
            </div>
            <div className="bg-slate-700 text-gray-300 text-xs sm:text-xs mt-4 sm:mt-6 p-2 sm:p-3 rounded-lg leading-relaxed">
                Current gust speed is {info.wind_gust} m/s and direction is {info.wind_deg}&deg; WSW
            </div>
        </div>
    );
}

export default Gustspeed;