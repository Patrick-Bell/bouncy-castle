import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Bolt, Folder, Mail, MessageCircleIcon, Phone } from "lucide-react";
import { faqs } from "../../api/Categories";
import Action from "../AboutUs/Action";

const FAQPage = () => {
    const [openMap, setOpenMap] = useState({});
    const [activeCategory, setActiveCategory] = useState("booking");
    const categories = faqs;

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
                ([entry]) => {
                    if (entry.isIntersecting) setActiveCategory(id);
                },
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

    const totalQuestions = categories.reduce(
        (sum, c) => sum + c.questions.length,
        0
    );

    return (
        <div className="min-h-screen primary-bg primary-text">
            <Navbar />

            {/* HERO */}
            <div className="relative secondary-bg secondary-text overflow-hidden">
                {/* Decorative circles adjusted to logo light color at low opacity */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#f0f1e8]/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-[#f0f1e8]/5 rounded-full translate-y-1/2"></div>
                <div className="absolute top-10 right-1/3 w-24 h-24 bg-[#f0f1e8]/10 rounded-full"></div>

                <div className="max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 text-[#f0f1e8] font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-[#f0f1e8]" />
                        Questions?
                    </span>
                    <h1 className="text-6xl font-extrabold text-[#f0f1e8] tracking-tight leading-none">
                        We've got <br />
                        <span className="opacity-60 font-extrabold text-[#f0f1e8]">all the answers.</span>
                    </h1>
                    <p className="text-sm opacity-80 max-w-xl">
                        From booking questions to weather worries, we've
                        answered everything we get asked. And if we haven't,
                        just give us a call!
                    </p>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3">
                            <MessageCircleIcon className="w-5 h-5" />
                            <div>
                                <p className="font-bold">{totalQuestions}</p>
                                <p className="text-xs opacity-70">questions answered</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3">
                            <Folder className="w-5 h-5" />
                            <div>
                                <p className="font-bold">{categories.length}</p>
                                <p className="text-xs opacity-70">categories</p>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3">
                            <Bolt className="w-5 h-5" />
                            <div>
                                <p className="font-bold">Fast</p>
                                <p className="text-xs opacity-70">replies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CATEGORY BAR */}
            <div className="primary-bg border-b border-[#d8dbca] sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition flex-shrink-0
                                    ${isActive
                                            ? "secondary-bg secondary-text"
                                            : "bg-[#d8dbca]/40 primary-text hover:bg-[#d8dbca]"
                                    }`}
                                >
                                    {cat.icon}
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* MAIN */}
            <div className="max-w-5xl mx-auto px-8 py-14">
                <div className="flex gap-12">
                    <div className="flex-1 flex flex-col gap-14">
                        {categories.map((cat) => (
                            <div key={cat.id} id={`faq-${cat.id}`} className="scroll-mt-20">
                                {/* CATEGORY HEADER */}
                                <div className="secondary-bg secondary-text rounded-2xl px-6 py-5 flex items-center gap-4 mb-4">
                                    <div className="bg-white/10 p-3 rounded-xl">{cat.icon}</div>
                                    <div>
                                        <h2 className="font-bold text-lg">{cat.label}</h2>
                                        <p className="text-xs opacity-70">{cat.questions.length} questions</p>
                                    </div>
                                </div>

                                {/* QUESTIONS */}
                                {cat.questions.map((item, qi) => {
                                    const key = `${cat.id}-${qi}`;
                                    const isOpen = openMap[key];
                                    return (
                                        <div key={qi}
                                            className={`rounded-2xl border mb-3 transition overflow-hidden
                                            ${isOpen ? "border-[#3b3e33] shadow-sm" : "border-[#d8dbca]"} 
                                            bg-[#f8f9f2]`} 
                                        >
                                            <button onClick={() => toggle(cat.id, qi)}
                                                className="w-full flex justify-between items-center px-6 py-4 text-left">
                                                <span className="font-bold text-sm">{item.q}</span>
                                                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition
                                                    ${isOpen ? "secondary-bg secondary-text rotate-45" : "bg-[#d8dbca]/50"}`}>
                                                    +
                                                </span>
                                            </button>
                                            <div className={`transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                                <p className="px-6 pb-5 text-sm opacity-80">{item.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                        {/* CTA */}
                        <div className="secondary-bg secondary-text rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-bold text-xl mb-2">Still have a question?</h3>
                                <p className="text-sm opacity-80">We're a family business. You'll always get a real person when you contact us.</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href="tel:07700900123" className="secondary-text bg-white/10 px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition flex items-center gap-2 justify-center">
                                    <Phone size={16} /> 07700 900 123
                                </a>
                                <a href="mailto:hello@bouncycastle.co.uk" className="primary-text bg-[#f0f1e8] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#d8dbca] transition flex items-center gap-2 justify-center">
                                    <Mail size={16} /> Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;