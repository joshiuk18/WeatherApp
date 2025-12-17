function SideInfo({ info }) {
    return (
        <div>
            <div>
                <p className="text-center text-2xl font-semibold mt-4">Good Mornning</p>
                <p className="text-center text-2xl font-semibold mt-4">10:10 AM</p>
                <div className="grid grid-cols-2 m-4 text-slate-500">
                    <div className="text-4xl">
                        <p className="text-center">{info.temp}&deg;C</p>
                    </div>
                    <div>
                        <p className="text-center">{info.tempMin}&deg;C</p>
                        <p className="text-center">{info.tempMax}&deg;C</p>
                    </div>
                </div>
                <p className="text-center">Feelslike {info.feelsLike}&deg;C</p>
                <p className="text-center text-lg font-semibold my-4 text-slate-500">{info.weather}</p>
            </div>
            <div className="p-6 max-w-md mx-auto">
                <p className="text-center text-lg font-semibold mb-4">Hourly Forecast</p>
                <div className="grid grid-cols-3 gap-3">
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                    <div className="border border-gray-500 rounded-xl p-2 text-center" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p className="text-slate-500">{info.weather}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default SideInfo;