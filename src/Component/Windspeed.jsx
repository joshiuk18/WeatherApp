import React from 'react'

function Windspeed({ info }) {

    if (!info) return null;

    return (
        <div className="h-full flex flex-col justify-between">

            {/* Title */}
            <p className="font-bold border-b border-gray-600 pb-2 mb-3">
                Wind Speed
            </p>

            {/* Main Content */}
            <div className="flex items-center justify-between gap-4">

                <img
                    src="/wind.jpg"
                    alt="Wind"
                    className="h-24"
                />

                <div className="flex flex-col items-center justify-center">
                    <p className="text-3xl font-semibold">
                        {info.windSpeed} km/h
                    </p>

                    <p className="text-sm text-gray-300">
                        Direction: {info.windDirection}°
                    </p>
                </div>

            </div>

            {/* Gust Section */}
            <div className="mt-4 flex items-center gap-3">

                <img
                    src="/wind2.jpg"
                    alt="Wind gust"
                    className="h-10 w-16"
                />

                <p className="text-sm">
                    Gust: {info.gustSpeed} m/s
                </p>

            </div>

            {/* Footer */}
            <p className="text-xs text-center text-gray-300 border-t border-gray-600 mt-4 pt-2">
                Wind speed {info.windSpeed} km/h, gust {info.gustSpeed} m/s
            </p>

        </div>
    )
}

export default Windspeed