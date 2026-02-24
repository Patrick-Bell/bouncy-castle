import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const stats = [
    { value: 200, suffix: '+', label: "Happy Bookings" },
    { value: 15, suffix: '+', label: "Castles Available" },
    { value: 5, suffix: '*', label: "Average Rating" },
    { value: 8, suffix: '+yrs', label: "In Business" },
];

const AboutUs = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,   
      });

    return (
        <section className="bg-white px-8 py-20 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-16">

                {/* Left: Text content */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Eyebrow */}
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        Our Story
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        Fun is a <span className="text-pink-500">family</span> business.
                    </h2>

                    {/* Body */}
                    <p className="text-gray-500 text-base leading-relaxed max-w-md">
                        We're Sarah & Mia — a mother and daughter duo who turned a passion for making kids smile into something real. Every castle we deliver comes with the same care we'd give our own family's party. No fuss, no stress, just pure bouncy joy.
                    </p>

                    {/* Stats row */}
                    <div ref={ref} className="flex flex-wrap gap-0 mt-4 border border-gray-100 rounded-2xl overflow-hidden divide-x divide-gray-100">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex-1 min-w-[80px] flex flex-col items-center justify-center py-5 px-4 hover:bg-pink-50 transition-colors duration-200 group"
                            >
                                <span className="text-2xl font-extrabold text-gray-900">
                                {inView ? <CountUp duration={5} suffix={stat.suffix} end={stat.value} /> : 0}
                                </span>
                                <span className="text-xs text-gray-400 font-semibold mt-1 text-center">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-3xl overflow-hidden aspect-[5/5] bg-pink-50 shadow-xl shadow-pink-100">
                        <img
                            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
                            alt="Children playing on bouncy castle"
                            className="w-full h-full object-cover"
                        />
                        {/* Floating badge */}
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-lg">
                                🏰
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Family Run</p>
                                <p className="text-xs text-gray-400">Since 2016</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;