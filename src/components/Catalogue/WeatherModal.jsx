import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Wind, Droplets, Thermometer, MapPin, Eye, Gauge, Sunrise, Sunset } from "lucide-react";
import axios from "axios";

const API_KEY = "53369437ee4c473ab04133420262602";
const LOCATION = "Chessington";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const formatDay = (dateStr, i) => {
    if (i === 0) return "Today"
    if (i === 1) return "Tomorrow"
    return DAYS[new Date(dateStr).getDay()]
}

const WeatherModal = ({ trigger }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=7&aqi=no`);
            setWeather(response.data);
        } catch(e) {
            console.error("Weather fetch error:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (open) { fetchWeather(); }
    }, [open]);

    const current = weather?.current;
    const forecast = weather?.forecast?.forecastday;
    const selectedDay = forecast?.[selected];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
            <span className="underline font-bold text-pink-500 cursor-pointer hover:text-pink-600 transition-colors">here</span>            
            </DialogTrigger>

            <DialogContent className="max-w-md p-0 gap-0 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">

                {/* ── Pink hero header ── */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 px-7 pt-7 pb-6 relative overflow-hidden flex-shrink-0">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full translate-y-1/2 pointer-events-none" />

                    <DialogHeader className="relative text-left space-y-0">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0 pt-0.5">
                                <p className="text-pink-200 text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    {weather?.location?.name ?? LOCATION}
                                    {weather?.location?.region ? `, ${weather.location.region.split(",")[0]}` : ""}
                                </p>
                                <DialogTitle className="text-2xl font-extrabold text-white leading-tight">
                                    Is it castle weather?
                                </DialogTitle>
                                <p className="text-pink-200 text-xs mt-1">
                                    {weather?.location?.localtime
                                        ? `Updated ${weather.location.localtime.split(" ")[1]}`
                                        : "3-day forecast"}
                                </p>
                            </div>
                            {current && (
                                <img
                                    src={`https:${current.condition.icon}`}
                                    alt={current.condition.text}
                                    className="w-16 h-16 flex-shrink-0 drop-shadow"
                                />
                            )}
                        </div>

                        {/* Current temp */}
                        {current && (
                            <div className="flex items-end gap-3 mt-4">
                                <span className="text-5xl font-extrabold text-white leading-none">
                                    {Math.round(current.temp_c)}°
                                </span>
                                <div className="mb-1">
                                    <p className="text-white font-bold text-sm">{current.condition.text}</p>
                                    <p className="text-pink-200 text-xs">Feels like {Math.round(current.feelslike_c)}°</p>
                                </div>
                            </div>
                        )}
                    </DialogHeader>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">

                    {weather && !loading && (
                        <>
                        <p className="text-xs font-bold text-gray-400 uppercase">Today</p>
            
                            {/* Current conditions */}
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    { icon: <Wind className="w-3.5 h-3.5 text-blue-400"  />, label: "Wind",       value: `${Math.round(current.wind_mph)} mph`  },
                                    { icon: <Droplets className="w-3.5 h-3.5 text-sky-400"  />, label: "Humidity",   value: `${current.humidity}%`                 },
                                    { icon: <Eye className="w-3.5 h-3.5 text-gray-400" />, label: "Visibility", value: `${current.vis_miles} mi`              },
                                    { icon: <Gauge className="w-3.5 h-3.5 text-pink-400" />, label: "Gusts",      value: `${Math.round(current.gust_mph)} mph`  },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-gray-50 rounded-2xl p-3 flex flex-col items-center gap-1.5 text-center">
                                        {stat.icon}
                                        <p className="text-xs font-extrabold text-gray-800">{stat.value}</p>
                                        <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* 7-day strip */}
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-3">3-Day Forecast</p>
                                <div className="gap-2 pb-1 px-1 grid grid-cols-3">
                                    {forecast.map((day, i) => {
                                        const isSelected = selected === i
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelected(i)}
                                                className={`cursor-pointer flex flex-col items-center gap-1.5 px-3 py-3 rounded-2xl border-2 transition-all duration-200 ${
                                                    isSelected
                                                        ? "border-pink-400 bg-pink-50 shadow-md shadow-pink-100"
                                                        : "border-gray-100 bg-white hover:border-pink-200"
                                                }`}
                                            >
                                                <p className={`text-xs font-bold ${isSelected ? "text-pink-500" : "text-gray-400"}`}>
                                                    {formatDay(day.date, i)}
                                                </p>
                                                <img src={`https:${day.day.condition.icon}`} alt="" className="w-8 h-8" />
                                                <p className={`text-xs font-extrabold ${isSelected ? "text-gray-900" : "text-gray-600"}`}>
                                                    {Math.round(day.day.maxtemp_c)}°
                                                </p>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {selectedDay && (
                                <div className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-extrabold text-gray-900">{formatDay(selectedDay.date, selected)}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{selectedDay.day.condition.text}</p>
                                        </div>
                                        <img src={`https:${selectedDay.day.condition.icon}`} alt="" className="w-12 h-12" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-2.5">
                                        {[
                                            { icon: <Thermometer className="w-3.5 h-3.5 text-pink-400" />, label: "High / Low", value: `${Math.round(selectedDay.day.maxtemp_c)}° / ${Math.round(selectedDay.day.mintemp_c)}°` },
                                            { icon: <Wind className="w-3.5 h-3.5 text-blue-400" />, label: "Max Wind", value: `${Math.round(selectedDay.day.maxwind_mph)} mph`},
                                            { icon: <Droplets className="w-3.5 h-3.5 text-sky-400"  />, label: "Rain Chance", value: `${selectedDay.day.daily_chance_of_rain}%`},
                                            { icon: <Eye className="w-3.5 h-3.5 text-gray-400" />, label: "Avg Visibility", value: `${selectedDay.day.avgvis_miles} mi`},
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-2.5">
                                                {stat.icon}
                                                <div>
                                                    <p className="text-xs text-gray-400 font-semibold">{stat.label}</p>
                                                    <p className="text-sm font-extrabold text-gray-800">{stat.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-around pt-3 border-t border-gray-200">
                                        {[
                                            { emoji: <Sunrise className="w-4 text-orange-500 h-4" />, label: "Sunrise", value: selectedDay.astro.sunrise },
                                            { emoji: <Sunset className="w-4 text-orange-500 h-4" />, label: "Sunset",  value: selectedDay.astro.sunset  },
                                        ].map((item, i, arr) => (
                                            <>
                                                <div key={item.label} className="flex items-center gap-2">
                                                    <span className="text-xl">{item.emoji}</span>
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-semibold">{item.label}</p>
                                                        <p className="font-extrabold text-gray-800 text-xs">{item.value}</p>
                                                    </div>
                                                </div>
                                                {i < arr.length - 1 && <div className="w-px h-8 bg-gray-200" />}
                                            </>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <p className="text-center text-xs text-gray-400 pb-1">
                                Powered by WeatherAPI · Castles are safe up to 24mph winds
                            </p>
                        </>
                    )}
                </div>

                <div className="flex-shrink-0 border-t border-gray-100 px-6 py-4 bg-white">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            className="w-full border-gray-200 font-bold rounded-xl h-11 text-sm hover:border-pink-300 hover:text-pink-500 transition-all cursor-pointer"
                        >
                            Close
                        </Button>
                    </DialogClose>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default WeatherModal;