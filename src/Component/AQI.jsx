import React from 'react'

function AQI({ info }) {

    if (!info) return null;

    return (
        <div className="h-full flex flex-col justify-between">

            {/* Title */}
            <p className="font-bold border-b border-gray-600 pb-2 mb-3">
                Air Quality Index
            </p>

            {/* Main Info */}
            <div className="flex justify-between items-center">

                <div>
                    <p className="text-3xl font-semibold">
                        {info.aqi || 261}
                    </p>
                    <p className="text-sm text-gray-300">
                        Severe
                    </p>
                </div>

                <img
                    src="/aqi.png"
                    alt="AQI"
                    className="h-16"
                />

            </div>

            {/* Pollutants */}
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm text-center">

                <p className="border-t border-gray-600 pt-1">
                    PM2.5: {info.pm25 || 193}
                </p>

                <p className="border-t border-gray-600 pt-1">
                    PM10: {info.pm10 || 240}
                </p>

            </div>

            {/* Footer */}
            <p className="border-t border-gray-600 p-2 text-xs text-center text-gray-300 mt-3">
                Air quality is severe
            </p>

        </div>
    )
}

export default AQI