import React from "react";
import Lottie from "lottie-react";
import sunny from "../Animation/sunny.json";
import storm from "../Animation/storm.json";

function WeeklyWeather({ info }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide sm:scrollbar-hide md:scrollbar-hide">
      <div className="flex gap-5 min-w-max px-1 py-2">

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Sunday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={sunny} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Monday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={storm} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Tuesday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={storm} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Wednesday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={sunny} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Thrusday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={storm} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Friday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={sunny} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

        <div className="w-40 rounded-2xl p-3 text-white bg-slate-800">
          <p className="text-center">Saturday</p>
          <div className="flex justify-center my-2">
            <Lottie.default animationData={storm} className="h-10 w-10" />
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span><i className="fa-solid fa-temperature-high"></i> {info.temp} &deg; C</span>
            <span><i className="fa-solid fa-droplet"></i> {info.humidity}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeeklyWeather;