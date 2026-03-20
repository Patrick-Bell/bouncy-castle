import { Heart, ShieldCheck, Smile, Star } from "lucide-react";
import { motion } from "framer-motion";
import { WordRotate } from "../ui/word-rotate";

const ChooseUs = () => {

    const values = [
        {
            icon: <Heart className="w-5 h-5 primary-text" />,
            title: "Family at Heart",
            description: "We're a mother and daughter team who genuinely care about making your event special. Every hire gets the same attention we'd give our own family.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 primary-text" />,
            title: "Safety First",
            description: "Every castle is professionally inspected, cleaned, and tested before each hire. Your children's safety is never an afterthought.",
        },
        {
            icon: <Smile className="w-5 h-5 primary-text" />,
            title: "Stress-Free for You",
            description: "We handle everything — delivery, setup, safety briefing, and collection. All you need to do is enjoy the party.",
        },
        {
            icon: <Star className="w-5 h-5 primary-text" />,
            title: "Trusted Locally",
            description: "We've built our reputation one party at a time across Chessington and the surrounding area. Our returning customers say it all.",
        },
    ]

    return (

        <>
        
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3 mb-6">
        <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                    {/* Left line */}
                    <motion.span
                    className="block w-6 h-px bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    />

                    Why Choose Us

                    {/* Right line */}
                    <motion.span
                    className="block w-6 h-px bg-primary origin-right"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    />
                    </span>
                    <h2 className="w-full mx-auto text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight flex justify-center items-center">
                        What Makes Us
                        <span className="hidden lg:block secondary-text mx-2 w-[190px] text-left">
                            <WordRotate words={['Unique', 'Special', 'Different']} />
                        </span>
                        <span className="block lg:hidden secondary-text mx-2 text-left">Different</span>
                        </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        Our values and committments to you.
                    </p>
                </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-4 lg:m-0">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 flex gap-4">
                                <div className="w-10 h-10 bg-[#ebeddf] rounded-2xl flex items-center justify-center flex-shrink-0">
                                    {value.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-extrabold text-gray-900 text-sm">{value.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                </>
    )
}

export default ChooseUs;