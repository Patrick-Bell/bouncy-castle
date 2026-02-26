import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Balloon, Bolt, Calendar, Castle, CloudLightning, DollarSign, Folder, Mail, MessageCircleIcon, Phone, Rainbow, Shield, Van, X } from "lucide-react";
import { faqs } from "../../api/Categories";
import Action from "../AboutUs/Action";

const FAQPage = () => {
    const [openMap, setOpenMap] = useState({});
    const [activeCategory, setActiveCategory] = useState("booking");
    const categories = faqs

    const toggle = (catId, qi) => {
        const key = `${catId}-${qi}`;
        setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    useEffect(() => {
        const observers = [];
        categories.forEach(({ id }) => {
            const el = document.getElementById(`faq-${id}`);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveCategory(id); },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`faq-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-400/20 rounded-full translate-y-1/2" />
                {/* Yellow accent blob */}
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-pink-300/30 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-white" />
                        Got A Question?
                    </span>                    
                    </div>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none">
                        We've got<br />
                        <span className="text-pink-300">all the answers.</span>
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl leading-relaxed">
                        From "how do I book?" to "what if it rains?" We've answered everything we get asked. And if we haven't, just give us a ring!
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl"><MessageCircleIcon className="text-white" /></span>
                            <div>
                                <p className="text-white font-extrabold text-lg leading-none">{totalQuestions}</p>
                                <p className="text-pink-200 text-xs">questions answered</p>
                            </div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl"><Folder className="text-white" /></span>
                            <div>
                                <p className="text-white font-extrabold text-lg leading-none">{categories.length}</p>
                                <p className="text-pink-200 text-xs">categories</p>
                            </div>
                        </div>
                        <div className="bg-pink-300/20 border border-pink-300/30 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl"><Bolt className="text-white" /></span>
                            <div>
                                <p className="text-white font-extrabold text-lg leading-none">Fast</p>
                                <p className="text-pink-200 text-xs">reply guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky category pill bar */}
            <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200
                                        ${isActive
                                            ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                                            : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-5xl mx-auto px-8 py-14">
                <div className="flex gap-12 items-start">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-14 min-w-0">
                        {categories.map((cat, catIndex) => (
                            <div key={cat.id} id={`faq-${cat.id}`} className="flex flex-col gap-3 scroll-mt-20">

                                {/* Category header — alternates between pink and yellow accent */}
                                <div className={`rounded-2xl px-6 py-5 flex items-center gap-4 mb-2 bg-pink-500`}>
                                    <span className="bg-pink-300 p-3 rounded-xl text-white">{cat.icon}</span>
                                    <div>
                                        <h2 className={`font-extrabold text-xl text-white`}>{cat.label}</h2>
                                        <p className={`text-xs text-pink-200`}>{cat.questions.length} questions</p>
                                    </div>
                                </div>

                                {/* Questions */}
                                {cat.questions.map((item, qi) => {
                                    const key = `${cat.id}-${qi}`;
                                    const isOpen = !!openMap[key];
                                    return (
                                        <div
                                            key={qi}
                                            className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden
                                                ${isOpen ? "border-pink-300 shadow-md shadow-pink-50" : "border-gray-100 hover:border-pink-200"}`}
                                        >
                                            <button
                                                onClick={() => toggle(cat.id, qi)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                                            >
                                                <span className={`font-bold text-sm transition-colors duration-200 ${isOpen ? "text-pink-500" : "text-gray-800"}`}>
                                                    {item.q}
                                                </span>
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                                                    ${isOpen ? "bg-pink-500 text-white rotate-45" : "bg-gray-100 text-gray-400"}`}>
                                                    +
                                                </span>
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                        {/* CTA */}
                        <div className="relative overflow-hidden bg-gray-900 rounded-3xl p-8">
                            <div className="absolute -top-4 -right-4 text-9xl opacity-10">🏰</div>
                            <div className="relative flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-yellow-300 font-bold text-sm uppercase tracking-widest mb-2">Still scratching your head?</p>
                                    <h3 className="font-extrabold text-white text-2xl mb-2">Just ask Sarah or Mia directly.</h3>
                                    <p className="text-gray-400 text-sm">We're a family team — you'll always get a real person, not a bot. We love a good chat about castles.</p>
                                </div>
                                <div className="flex flex-col gap-2 flex-shrink-0">
                                    <a href="tel:07700900123" className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-pink-400 transition-colors">
                                        📞 07700 900 123
                                    </a>
                                    <a href="mailto:hello@bouncycastle.co.uk" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors">
                                        ✉️ Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky right nav */}
                    <aside className="hidden lg:flex flex-col gap-1.5 sticky top-24 w-48 flex-shrink-0">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Jump to</p>
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`text-left text-xs px-3 py-2 rounded-xl font-bold transition-all duration-200 flex items-center gap-2.5 w-full
                                        ${isActive
                                            ? "bg-pink-500 text-white shadow-sm shadow-pink-200"
                                            : "text-gray-400 hover:bg-pink-50 hover:text-pink-500"
                                        }`}
                                >
                                    <span className="text-base leading-none">{cat.icon}</span>
                                    <span className="flex-1">{cat.label}</span>
                                    <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                                        {cat.questions.length}
                                    </span>
                                </button>
                            );
                        })}

                        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2 px-2">
                            <p className="text-xs font-bold text-gray-400">Need more help?</p>
                            <a href="tel:07700900123" className="text-xs font-extrabold text-pink-500 hover:text-pink-600 transition-colors flex items-center gap-1"><Phone className="w-4 h-4" /> 07700 900 123</a>
                            <a href="mailto:hello@bouncycastle.co.uk" className="text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors break-all flex items-center gap-1"><Mail className="w-4 h-4" /> hello@bouncycastle.co.uk</a>
                        </div>
                    </aside>
                </div>
            </div>
            <Action />
        </div>
    );
};

export default FAQPage;