import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Wind, CloudRain, CloudLightning, Home, UserCheck, Clock, Shield, Phone, Mail, AlertTriangle, CheckCircle, XCircle, Info, Sun, SunMedium, Eye, Thermometer, Pause, House, TowelRack } from "lucide-react";
import { FaSocks } from "react-icons/fa";
import { BsWater } from "react-icons/bs";
import { motion } from "framer-motion";

const sections = [
    {
        id: "unsafe",
        icon: <AlertTriangle />,
        title: "What Counts as Unsafe Weather?",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Unsafe weather includes any conditions where inflatables cannot be used safely. All decisions follow <span className="font-bold text-gray-800">PIPA testing guidance</span> and <span className="font-bold text-gray-800">BS EN 14960 safety standards</span>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { icon: <Wind className="w-4 h-4" />, label: "Excessive wind gusts" },
                        { icon: <CloudRain className="w-4 h-4" />, label: "Severe or persistent rain" },
                        { icon: <CloudLightning className="w-4 h-4" />, label: "Thunderstorms or lightning" },
                        { icon: <AlertTriangle className="w-4 h-4" />, label: "Waterlogged or unstable ground" },
                        { icon: <Shield className="w-4 h-4" />, label: "Extreme weather warnings" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-[#f0f1e8] border border-[#d8dbca] rounded-xl px-4 py-3">
                            <span className="text-[#3b3e33]">{item.icon}</span>
                            <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "hot",
        icon: <Sun />,
        title: "Bouncy Castles in Hot Weather",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Bouncy castles are safe to use during warm weather. Continuous airflow from the blower keeps the inflatable ventilated. However, on particularly hot days, surfaces exposed to direct sunlight can become very warm to the touch — especially the jump mat and walls.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { emoji: <FaSocks />, title: "Always wear socks", desc: "Protects feet from heated surfaces and reduces friction burns on hot days." },
                        { emoji: <SunMedium />, title: "Use sun protection", desc: "Many castles include sunshades but sunscreen is still strongly advised." },
                        { emoji: <BsWater />, title: "Stay hydrated", desc: "Regular breaks and water are essential — kids lose fluids quickly when bouncing." },
                        { emoji: <Eye />, title: "Supervise closely", desc: "Heat exhaustion can set in quickly in young children. Watch for signs of fatigue." },
                        { emoji: <Clock />, title: "Take regular breaks", desc: "Step off the castle every 15–20 minutes in very hot weather to cool down." },
                        { emoji: <Thermometer />, title: "Check the surface first", desc: "Feel the jump mat before allowing use — if it's uncomfortably hot, wait for it to cool." },
                    ].map((item, i) => (
                        <div key={i} className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
                            <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[#f0f1e8] border border-[#d8dbca] rounded-2xl p-4 flex gap-3">
                    <Info className="w-4 h-4 text-[#3b3e33] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed">
                        <span className="font-bold text-gray-800">In very hot conditions</span>, consider our indoor soft play hire as a cooler alternative. We're always happy to advise on the best option for your event day.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "rain",
        icon: <CloudRain />,
        title: "Bouncy Castles in Rain",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Most of our inflatables include <span className="font-bold text-gray-800">built-in rain covers</span>, making them suitable for use in light showers. In heavier rainfall, surfaces become slippery and unsafe — we'll always let you know on the day.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { emoji: <Pause />, title: "Pause during heavy rain", desc: "Stop bouncing immediately if rain worsens. Resume only once conditions improve." },
                        { emoji: <House />, title: "Rain covers help", desc: "Our castles come with covers for light showers — not suitable for storms." },
                        { emoji: <TowelRack />, title: "Dry before resuming", desc: "Use towels to remove excess water from the jump mat before letting children back on." },
                        { emoji: <FaSocks />, title: "Socks prevent slipping", desc: "Always wear socks when using a castle, especially if any moisture is present." },
                    ].map((item, i) => (
                        <div key={i} className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex gap-3">
                            <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-700 leading-relaxed font-medium">
                        <span className="font-bold">Soft play must not be used outdoors in any rain.</span> It is designed for indoor use only and water damage will void your hire agreement.
                    </p>
                </div>
                <div className="bg-[#f0f1e8] border border-[#d8dbca] rounded-2xl p-4 flex gap-3">
                    <Info className="w-4 h-4 text-[#3b3e33] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-600 leading-relaxed">
                        <span className="font-bold text-gray-800">If outdoor weather becomes unsuitable</span>, our indoor soft play packages are a great alternative. Ask us about availability when you book.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "wind",
        icon: <Wind />,
        title: "High Wind Rules",
        content: (
            <div className="flex flex-col gap-5">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Wind is the most important safety factor. Decisions are based on <span className="font-bold text-gray-800">wind gusts</span>, not just average wind speed.
                </p>

                <div className="flex flex-col gap-3">
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                            <XCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                            <p className="font-bold text-red-700 text-sm">Over 30mph gusts → Cancelled</p>
                            <p className="text-xs text-red-600/80 mt-1 leading-relaxed">We may cancel the hire the night before for safety. No setup will take place.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                            <p className="font-bold text-amber-700 text-sm">24–30mph gusts → We'll assess on site</p>
                            <p className="text-xs text-amber-600/80 mt-1 leading-relaxed">We'll attend and take a real-time, local wind reading before making a decision.</p>
                        </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <p className="font-bold text-emerald-700 text-sm">Under 24mph → Good to go</p>
                            <p className="text-xs text-emerald-600/80 mt-1 leading-relaxed">Conditions are within safe operating limits and hire will proceed as planned.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#f0f1e8] border border-[#d8dbca] rounded-2xl p-5">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">The final decision is based on</p>
                    <ul className="flex flex-col gap-2">
                        {[
                            "Wind gust speed at the time of setup",
                            "Real-time, on-site readings",
                            "Local shelter and surroundings",
                            "Professional judgement from our team",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3b3e33] flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-gray-500 mt-3 italic">Note: 24mph in an open field can be more dangerous than 29mph in a sheltered garden. Context matters.</p>
                </div>
            </div>
        ),
    },
    {
        id: "wet",
        icon: <CloudRain />,
        title: "Wet Weather & Rain",
        content: (
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col gap-2">
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Usually Fine</p>
                        <ul className="flex flex-col gap-1.5">
                            {["Light rain or brief showers", "Drizzle during the hire"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex flex-col gap-2">
                        <p className="text-xs font-bold text-red-500 uppercase tracking-wider">May Prevent Use</p>
                        <ul className="flex flex-col gap-1.5">
                            {["Heavy or persistent rain", "Pooling or waterlogged ground"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#f0f1e8] border border-[#d8dbca] rounded-2xl p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-xl secondary-bg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 secondary-text" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 text-sm mb-1">All electrical equipment is IP24 rated or above</p>
                        <p className="text-xs text-gray-500 leading-relaxed">Suitable for outdoor use in light rain when used correctly. In heavy rain, safety comes first and equipment will not be set up or may need to be taken down early.</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "lightning",
        icon: <CloudLightning />,
        title: "Thunder, Lightning & Extreme Weather",
        content: (
            <div className="flex flex-col gap-4">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                        <CloudLightning className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                        <p className="font-bold text-red-700 text-sm mb-1.5">Inflatables must not be used during</p>
                        <ul className="flex flex-col gap-1.5">
                            {["Thunderstorms", "Lightning of any kind", "Severe or extreme weather warnings"].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-red-600/80">
                                    <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                    If any of these conditions develop during your hire, the equipment must be <span className="font-bold text-gray-800">deflated immediately</span> and all users must exit. Contact us straight away on <span className="font-bold text-gray-800">07700 000 000</span>.
                </p>
            </div>
        ),
    },
    {
        id: "indoor",
        icon: <Home />,
        title: "Indoor Bookings & Weather",
        content: (
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { text: "Indoor bookings are not affected by weather", good: true },
                        { text: "They go ahead as planned unless the venue itself is unsafe", good: true },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-[#f0f1e8] border border-[#d8dbca] rounded-2xl p-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-bold text-gray-800">Indoor venues are the best backup option</span> during unsettled weather. If you're booking during autumn or winter, we strongly recommend securing an indoor venue as a contingency.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "decision",
        icon: <UserCheck />,
        title: "Who Makes the Final Decision?",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    The final decision is always made by <span className="font-bold text-gray-800">Haze Events</span>. This is non-negotiable, because:
                </p>
                <ul className="flex flex-col gap-3">
                    {[
                        "We are responsible for safe installation under our insurance and PIPA certification",
                        "We must follow manufacturer guidelines and our insurer's requirements",
                        "We have a legal duty of care to everyone on site",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full secondary-bg secondary-text flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">{i + 1}</span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="bg-[#3b3e33] rounded-2xl p-5">
                    <p className="text-[#f0f1e8] text-sm font-bold mb-1">We never cancel lightly.</p>
                    <p className="text-[#f0f1e8]/70 text-xs leading-relaxed">If we cancel, it's because conditions are genuinely unsafe — not because it's inconvenient. Parents trust us with their children's safety, and we take that seriously.</p>
                </div>
            </div>
        ),
    },
    {
        id: "cancellation",
        icon: <Shield />,
        title: "If We Cancel for Weather",
        content: (
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-gray-800 text-sm">We'll offer a new date first</p>
                            <p className="text-xs text-gray-500 mt-0.5">We'll always try to reschedule before offering a refund.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Full refund if rebooking isn't suitable</p>
                            <p className="text-xs text-gray-500 mt-0.5">Including the admin/booking fee — no deductions.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-gray-800 text-sm">No refund if weather turns after setup</p>
                            <p className="text-xs text-gray-500 mt-0.5">Time, labour, and setup costs have already been used. We'll always try to work with you.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Hirer cancels despite safe conditions</p>
                            <p className="text-xs text-gray-500 mt-0.5">Normal cancellation terms apply if conditions are deemed safe by us but you choose to cancel.</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "timing",
        icon: <Clock />,
        title: "Timing of Weather Decisions",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Forecasts change. We monitor conditions constantly and aim to give you as much notice as possible.
                </p>
                <div className="flex flex-col gap-3">
                    {[
                        { time: "48 hrs before", desc: "We begin actively monitoring the forecast for your hire date." },
                        { time: "Night before", desc: "If conditions look clearly unsafe, we may cancel at this point to give you maximum notice." },
                        { time: "Morning of", desc: "Final checks. Borderline decisions may be made here based on the latest data." },
                        { time: "On arrival", desc: "Real-time site assessment. We take a local wind reading before any setup begins." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="flex flex-col items-center flex-shrink-0">
                                <div className="w-8 h-8 rounded-full secondary-bg secondary-text flex items-center justify-center text-xs font-extrabold">{i + 1}</div>
                                {i < 3 && <div className="w-px h-6 bg-[#d8dbca] mt-1" />}
                            </div>
                            <div className="pb-3">
                                <p className="font-bold text-gray-800 text-sm">{item.time}</p>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: "hirer",
        icon: <UserCheck />,
        title: "Responsibility of the Hirer",
        content: (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">The hirer is responsible for the following during the hire period:</p>
                <ul className="flex flex-col gap-3">
                    {[
                        "Providing a suitable, level, and accessible setup area",
                        "Following all safety instructions given by our team at setup",
                        "Not using equipment against the advice of our staff",
                        "Deflating the castle immediately if unsafe weather develops",
                        "Contacting us promptly if conditions change during the hire",
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full secondary-bg secondary-text flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">{i + 1}</span>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                    <p className="text-xs text-red-600 font-semibold leading-relaxed">Any use against our instructions is entirely at the hirer's own risk and may void our public liability insurance coverage.</p>
                </div>
            </div>
        ),
    },
];

const WeatherPolicy = () => {
    const [activeId, setActiveId] = useState("unsafe");

    useEffect(() => {
        const observers = [];
        sections.forEach(({ id }) => {
            const el = document.getElementById(`wp-${id}`);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`wp-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-[#f8f9f2]">
            <Navbar />

            {/* Hero */}
            <div className="relative secondary-bg secondary-text overflow-hidden top-10 lg:top-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#f0f1e8]/10 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#f0f1e8]/5 rounded-full translate-y-1/2" />
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-[#f0f1e8]/10 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <span className="inline-flex items-center gap-2 text-[#f0f1e8] font-bold text-sm tracking-widest uppercase">
                    <motion.span
                        className="block h-px bg-[#f0f1e8]"
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }} // Tailwind w-6 = 24px
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        />                        
                        Policy
                    </span>
                    <h1 className="text-6xl font-extrabold text-[#f0f1e8] tracking-tight leading-none">
                        Weather &<br />
                        <span className="opacity-60">Outdoor Policy.</span>
                    </h1>
                    <p className="text-[#f0f1e8]/70 text-lg max-w-xl leading-relaxed">
                        Safety always comes first. This page explains how we assess weather conditions, who makes the final call, and what happens to your booking if conditions are unsafe.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1">
                        {["PIPA Guidelines", "BS EN 14960", "24mph Wind Limit", "Safety First"].map((b, i) => (
                            <span key={i} className="bg-white/10 border border-white/20 text-[#f0f1e8] text-xs font-bold px-3 py-1.5 rounded-full">{b}</span>
                        ))}
                    </div>
                    <p className="text-xs opacity-40">Last updated: January 2026 · Haze Events, Chessington</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-16">
                <div className="flex gap-12 items-start">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-6 min-w-0">

                        {/* Intro notice */}
                        <div className="bg-[#3b3e33] rounded-2xl p-6 flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Info className="w-5 h-5 text-[#f0f1e8]" />
                            </div>
                            <div>
                                <p className="font-bold text-[#f0f1e8] text-sm mb-1">Our Promise</p>
                                <p className="text-[#f0f1e8]/70 text-xs leading-relaxed">We never cancel lightly. If we cancel, it's because conditions are genuinely unsafe — not because it's inconvenient for us. Parents trust us with their children's safety and we take that seriously.</p>
                            </div>
                        </div>

                        {/* Sections */}
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={`wp-${section.id}`}
                                className="bg-white rounded-3xl border border-[#d8dbca]/50 p-7 flex flex-col gap-5 scroll-mt-15 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-2xl bg-[#f0f1e8] border border-[#d8dbca] flex items-center justify-center flex-shrink-0">
                                        {/* Clone icon with olive colour */}
                                        {section.icon.type
                                            ? <section.icon.type {...section.icon.props} className="w-5 h-5 text-[#3b3e33]" />
                                            : section.icon}
                                    </div>
                                    <h2 className="font-extrabold primary-text text-lg">{section.title}</h2>
                                </div>
                                {section.content}
                            </div>
                        ))}

                        {/* Contact CTA */}
                        <div className="secondary-bg secondary-text rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-extrabold text-xl mb-2">Need reassurance or advice?</h3>
                                <p className="text-sm opacity-70 leading-relaxed">If you're unsure about the forecast or want to talk through your options, we're always happy to help. Just get in touch.</p>
                            </div>
                            <div className="flex flex-col gap-2 flex-shrink-0">
                                <a href="tel:07700000000" className="secondary-text bg-white/10 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition flex items-center gap-2 justify-center">
                                    <Phone className="w-4 h-4" /> 07700 000 000
                                </a>
                                <a href="mailto:hello@bestpartyhire.co.uk" className="primary-text bg-[#f0f1e8] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#d8dbca] transition flex items-center gap-2 justify-center">
                                    <Mail className="w-4 h-4" /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sticky sidebar */}
                    <aside className="hidden lg:flex flex-col gap-1 sticky top-20 w-52 flex-shrink-0">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">On this page</p>
                        {sections.map(({ id, title }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`cursor-pointer text-left text-xs px-3 py-2 rounded-lg font-bold transition-all duration-200 flex items-center gap-2.5 group w-full ${
                                        isActive
                                            ? "bg-[#3b3e33] text-[#f0f1e8]"
                                            : "text-gray-400 hover:text-[#3b3e33] hover:bg-[#f0f1e8]"
                                    }`}
                                >
                                    <span className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${isActive ? "bg-[#f0f1e8]" : "bg-gray-200 group-hover:bg-gray-300"}`} />
                                    {title}
                                </button>
                            );
                        })}
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default WeatherPolicy;