import { useState } from "react";

const faqs = [
    {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 2 weeks in advance, especially during peak summer months and school holiday periods. That said, we always try our best to accommodate last-minute bookings — just give us a call!",
    },
    {
        q: "What's included in the hire?",
        a: "Everything! Delivery, setup, collection, and a safety briefing are all included in the price. We bring the blower, pegs, and safety mats. All you need to do is make sure there's a power socket nearby.",
    },
    {
        q: "Do you set up indoors?",
        a: "Yes! Many of our castles can be set up indoors in halls, sports centres, or large living rooms. Just let us know the ceiling height and floor dimensions when you enquire and we'll confirm which castles will work.",
    },
    {
        q: "What happens if it rains?",
        a: "Most of our castles come with a rain cover, so a light shower is no problem. In the case of strong winds (above 24mph) or heavy storms, we may need to deflate the castle for safety. We'll always keep you updated on the day.",
    },
    {
        q: "How much space do I need in my garden?",
        a: "It depends on the castle — each listing includes exact dimensions. As a general guide, most standard castles need around 12ft x 14ft of flat, clear space, plus a couple of feet on each side for the safety mats.",
    },
    {
        q: "Is there a deposit required?",
        a: "Yes, we ask for a small deposit to secure your booking. The remaining balance is due on the day of delivery. We accept bank transfer, cash, or card payment.",
    },
    {
        q: "Are your castles safe and insured?",
        a: "Absolutely. All of our castles are PIPA-tested, regularly inspected, and cleaned thoroughly between each hire. We are fully public liability insured for your peace of mind.",
    },
];

const ShortFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="px-8 py-20">
            <div className="max-w-3xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        Got Questions?
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        We've got <span className="text-pink-500">answers</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        Everything you need to know before booking. Still unsure? Just drop us a message.
                    </p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen ? "border-pink-300 shadow-md shadow-pink-50" : "border-gray-100 hover:border-pink-200"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                                >
                                    <span className={`font-bold text-sm md:text-base transition-colors duration-200 ${isOpen ? "text-pink-500" : "text-gray-900"}`}>
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                                        isOpen ? "bg-pink-500 text-white rotate-45" : "bg-gray-100 text-gray-400"
                                    }`}>
                                        +
                                    </span>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ShortFAQ;