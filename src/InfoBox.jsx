function InfoBox({ info }) {
    return (
        <div>
            <div>
                <span className="text-2xl mt-4 ml-16">{info.city}</span>
                <span className="text-2xl mt-4 ml-96">01.01.2026</span>
                <div className="grid grid-cols-5 m-4 text-slate-500">
                    <div className="text-4xl col-span-4 mt-6 ml-12">
                        <p className="text-center text-9xl">{info.temp}&deg;C</p>
                    </div>
                    <div className="text-center mt-16 mr-16 text-xl font-semibold">
                        <p className="text-center">{info.tempMin}&deg;C</p>
                        <p className="text-center">{info.tempMax}&deg;C</p>
                    </div>
                </div>
                <p className="text-center text-4xl font-semibold my-4 text-slate-500">{info.weather}</p>
            </div>
            <div className="p-12 mt-8">
                <div className="grid grid-cols-6 gap-4 ">
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-3 text-center 
                    border-transparent hover:border-gray-300 transition-all duration-300" >
                        <p>10 AM</p>
                        <p className="mt-2 mb-2">{info.temp}&deg;C</p>
                        <p>{info.weather}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBox;