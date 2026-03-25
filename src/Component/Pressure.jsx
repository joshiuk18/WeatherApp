import React from 'react'

function Pressure({ info }) {

    if (!info) return null;

    return (
        <div className="h-full flex flex-col justify-between">

            {/* Title */}
            <p className="font-bold border-b border-gray-600 pb-2 mb-3">
                Pressure
            </p>

            {/* Content */}
            <div className="flex items-center justify-between gap-4">

                <img
                    src="/pressure.jpg"
                    alt="Pressure gauge"
                    className="h-24"
                />

                <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-3xl font-semibold">
                        {info.pressure} mb
                    </p>

                    <p className="bg-purple-600/80 px-4 py-1 rounded-xl text-sm font-semibold">
                        High
                    </p>
                </div>

            </div>

            {/* Range */}
            <input
                type="range"
                min="980"
                max="1020"
                value={info.pressure}
                readOnly
                className="w-full mt-4 accent-purple-500"
            />

            {/* Footer */}
            <p className="text-xs text-center text-gray-300 border-t border-gray-600 mt-4 pt-2">
                Current pressure is {info.pressure} mb
            </p>

        </div>
    )
}

export default Pressure