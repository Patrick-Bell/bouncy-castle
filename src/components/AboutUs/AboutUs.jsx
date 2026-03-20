import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Logo from '../../assets/logo.jpg'
import AboutImg from '../../assets/about.png'
import { motion } from "framer-motion";
import { WordRotate } from "../ui/word-rotate";


const stats = [
    { value: 100, suffix: '%', label: "Safe & Clean Equipment" },
    { value: 10, suffix: '+', label: "Exciting Inflatables" },
    { value: 1, suffix: ' year', label: "In Business" },
    { value: 3, suffix: '', label: "More Castles Coming Soon!" },
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
                    <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                    <motion.span
                        className="block h-px secondary-bg"
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }} // Tailwind w-6 = 24px
                        transition={{ duration: 1, ease: "easeOut" }}
                        />
                        Our Story
                    </span>

                    {/* Heading */}
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight flex items-center">
                        Fun is a 
                        <span className="secondary-text mx-2"> family</span> 
                        experience
                    </h2>

                    {/* Body */}
                    <p className="text-gray-500 text-base leading-relaxed max-w-md">
                    Haze Events is more than just a business — it’s a dream built by a mum and daughter who share a love for beautiful celebrations and meaningful moments. What started as conversations, ideas and late-night planning has turned into something we are so proud to launch together.
                    We specialise in luxury soft play and elegant event styling for weddings, christenings, birthdays, baby showers and all of life’s unforgettable occasions. Our goal is to create timeless, stylish spaces where little ones can play and families can make memories that last forever ✨
                    Every detail you see has been chosen with love, care and intention. This is the beginning of something so special for us, and we’re beyond grateful for all the support already.
                    If you believe in supporting small businesses, family businesses, or women building their dreams together — we’d love if you shared, liked or tagged someone planning a special event 🤍                    </p>

                    {/* Stats row */}
                    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-4 border border-gray-100 rounded-2xl overflow-hidden divide-x divide-gray-100">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="flex-1 min-w-[80px] flex flex-col items-center justify-center py-5 px-4 hover:bg-[#ebeddf] transition-colors duration-200 group"
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
                <div  className="flex-1 w-full">
                    <div onClick={() => window.open('https://www.instagram.com/haze_events26/', '_blank')}  className="relative rounded-3xl overflow-hidden aspect-[5/5] cursor-pointer">
                        <img
                            src={AboutImg}
                            alt="Children playing on bouncy castle"
                            className="w-full h-full object-cover"
                        />
                        {/* Floating badge */}
                        <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-lg">
                                <img src={Logo} className="rounded-lg" alt="" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-900">Haze Events</p>
                                <p className="text-xs text-gray-400">Moments That Matter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;