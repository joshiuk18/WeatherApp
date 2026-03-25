import React from 'react'

function Temperature({ info }) {

    if (!info) return null;

    return (
        <div className="h-full flex flex-col justify-between bg-gradient-to-br from-blue-500/30 to-indigo-900/40 rounded-xl p-4 border border-blue-400/20 shadow-lg">

            {/* Top Section */}
            <div className="text-center py-3">
                <img src="/temperature.png" className="h-20 mx-auto drop-shadow-lg" />

                <p className="text-sm text-gray-200 mt-2">
                    Temperature
                </p>

                <p className="text-5xl font-bold mt-1 text-white">
                    {info.temperature}°C
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 my-4"></div>

            {/* Grid Info */}
            <div className="grid grid-cols-2 gap-4 text-center">

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <p className="text-xs text-gray-300">Humidity</p>
                    <p className="text-lg font-semibold text-white">
                        {info.humidity}%
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <p className="text-xs text-gray-300">Min Temp</p>
                    <p className="text-lg font-semibold text-white">
                        {info.tempMinimum}°C
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 col-span-2">
                    <p className="text-xs text-gray-300">Max Temp</p>
                    <p className="text-lg font-semibold text-white">
                        {info.tempMaximum}°C
                    </p>
                </div>

            </div>

            {/* Footer */}
            <div className="mt-4 rounded-xl p-2 text-xs text-center text-gray-200 bg-white/10 backdrop-blur-md border border-white/10">
                Current temperature is {info.temperature}°C with humidity at {info.humidity}%
            </div>

        </div>
    )
}

export default Temperature;