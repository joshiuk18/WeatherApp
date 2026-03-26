import React from 'react'

function AQI({ info }) {

    return (
        <div className="h-full flex flex-col justify-between">

            <p className="font-semibold sm:font-bold border-b border-gray-600 pb-2 mb-3 text-sm sm:text-base">
                Air Quality Index
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2">
                <div className="flex flex-col items-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-400 leading-none">
                        168
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">AQI</p>
                </div>

                <div className="bg-slate-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-center w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-gray-200">Air Quality is</p>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-pink-300">Unhealthy</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm sm:mb-6 gap-1 sm:gap-0 p-2">
                <p>PM2.5 : 80 µg/m³</p>
                <p>PM10 : 98 µg/m³</p>
            </div>

            <div className="w-full p-2">
                <div className="flex justify-between text-[10px] sm:text-xs mb-1 px-1">
                    <span>Good</span>
                    <span>Unhealthy</span>
                    <span>Hazardous</span>
                </div>

                <div className="relative h-2 sm:h-2.5 rounded-full overflow-hidden">
                    <div className="absolute w-full h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-800"></div>
                </div>

                <div className="flex justify-between text-[10px] sm:text-xs mt-1 px-1">
                    <span>50</span>
                    <span>150</span>
                    <span>301+</span>
                </div>
            </div>
        </div>
    )
}

export default AQI;