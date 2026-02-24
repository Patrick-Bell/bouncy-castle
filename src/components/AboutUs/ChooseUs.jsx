import { Heart, ShieldCheck, Smile, Star } from "lucide-react";

const ChooseUs = () => {

    const values = [
        {
            icon: <Heart className="w-5 h-5 text-pink-500" />,
            title: "Family at Heart",
            description: "We're a mother and daughter team who genuinely care about making your event special. Every hire gets the same attention we'd give our own family.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
            title: "Safety First",
            description: "Every castle is professionally inspected, cleaned, and tested before each hire. Your children's safety is never an afterthought.",
        },
        {
            icon: <Smile className="w-5 h-5 text-pink-500" />,
            title: "Stress-Free for You",
            description: "We handle everything — delivery, setup, safety briefing, and collection. All you need to do is enjoy the party.",
        },
        {
            icon: <Star className="w-5 h-5 text-pink-500" />,
            title: "Trusted Locally",
            description: "We've built our reputation one party at a time across Chessington and the surrounding area. Our returning customers say it all.",
        },
    ]

    return (

        <>
        
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        Why Choose Us
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        What Makes Us <span className="text-pink-500">Different</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        Our values and committments to you.
                    </p>
                </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-4 lg:m-0">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center flex-shrink-0">
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