function Pressure({ info }) {

    return (
        <div className="h-full flex flex-col justify-between">

            <p className="font-semibold sm:font-bold border-b border-gray-600 pb-2 mb-3 text-sm sm:text-base">
                Pressure
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32">
                    <img src='/Speedometer.gif' />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-2xl sm:text-2xl md:text-3xl font-semibold">
                        {info.pressure} mb
                    </p>
                    <p className="bg-purple-600 px-4 sm:px-4 py-1 rounded-xl text-xs sm:text-sm font-semibold">
                        High
                    </p>
                </div>
            </div>

            <div className="my-4 py-4">
                <input
                    type="range"
                    min="900"
                    max="1100"
                    value={info.pressure}
                    readOnly
                    className="w-full accent-purple-500 h-2 sm:h-2"
                />
                <div className="flex justify-between text-xs sm:text-xs mt-1 px-1">
                    <span>900</span>
                    <span>950</span>
                    <span>1000</span>
                    <span>1050</span>
                    <span>1100</span>
                </div>
            </div>

            <div className="bg-slate-700 text-gray-300 text-lg sm:text-xs mt-1 sm:mt-3 p-1 sm:p-2 rounded-lg leading-relaxed">
                Current pressure is {info.pressure} mb
            </div>
        </div>
    )
}

export default Pressure;