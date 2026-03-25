import React from 'react'

function Sunkissed({ info }) {

    if (!info) return null;

    return (
        <div className="h-full flex flex-col justify-between">

            {/* Title */}
            <p className="font-bold border-b border-gray-600 pb-2 mb-3">
                Sunrise & Sunset
            </p>

            {/* Image */}
            <img
                src="/sunrise.jpg"
                alt="Sunrise"
                className="w-full h-16 rounded-lg object-cover"
            />

            {/* Time Cards */}
            <div className="grid grid-cols-2 gap-3 py-4">

                <p className="text-sm text-center p-2 rounded-xl bg-orange-500/70">
                    Sunrise:{" "}
                    {new Date(info.sunrise * 1000).toLocaleTimeString()}
                </p>

                <p className="text-sm text-center p-2 rounded-xl bg-indigo-500/70">
                    Sunset:{" "}
                    {new Date(info.sunset * 1000).toLocaleTimeString()}
                </p>

            </div>

            {/* Footer */}
            <p className="border-t border-gray-600 p-2 text-xs text-center text-gray-300">
                Sunrise at{" "}
                {new Date(info.sunrise * 1000).toLocaleTimeString()}
                <br />
                Sunset at{" "}
                {new Date(info.sunset * 1000).toLocaleTimeString()}
            </p>

        </div>
    )
}

export default Sunkissed