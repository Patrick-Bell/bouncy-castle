import image1 from '../../assets/bumper-cars.png'
import image2 from '../../assets/white-bouncy-castle.png'
import logo from '../../assets/logo.jpg'
import image3 from '../../assets/soft-play.png'
import { Balloon, Castle, Computer } from 'lucide-react';
import { BsInstagram } from 'react-icons/bs';
import { MdSafetyCheck } from 'react-icons/md';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const awards = [
    {
        year: 'April, 2026',
        icon: <Computer />,
        title: 'Website Launched',
        body: 'We launched our user-friendly website, making it easy for families to browse our bouncy castle options, check availability, and book their next unforgettable party with just a few clicks.',
    },
    {
        year: "March, 2026",
        icon: <Balloon />,
        title: "First Booking",
        body: "Our first booking was a birthday party for a local family, and it was a huge success! Seeing the kids' faces light up as they bounced around was the moment we knew we were onto something special.",
    },
    {
        year: "February, 2026",
        icon: <MdSafetyCheck />,
        title: "Safety Approved",
        body: "All our equipment passed the PIPA safety inspection, giving families peace of mind that our bouncy castles are fully safe and ready for fun.",
    },
    {
        year: "February, 2026",
        icon: <BsInstagram />,
        title: "Social Media Launched",
        body: "We launched our Instagram and Facebook pages, sharing behind-the-scenes moments, customer stories, and fun party ideas with our growing online community.",
    },
    {
        year: "January, 2026",
        icon: <Castle />,
        title: "Founded",
        body: "Our journey began with a simple mission: to bring joy and unforgettable memories to families across South London through our fun and safe bouncy castle rentals.",
    },
];

const photos = [
    { src: logo, alt: "Kids on bouncy castle" },
    { src: image2, alt: "Bouncy castle at a party" },
    { src: image1, alt: "Happy children playing" },
    { src: image3, alt: "Birthday party fun" },
];

const Awards = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="bg-white px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="flex flex-col items-center text-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                        
                        {/* Left line */}
                        <motion.span
                            className="block w-6 h-px bg-primary origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                        />

                        Recognition

                        {/* Right line */}
                        <motion.span
                            className="block w-6 h-px bg-primary origin-right"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        />
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Award-winning <span className="secondary-text">fun</span>
                    </h2>

                    <p className="text-gray-400 text-base max-w-md">
                        We're proud of what we've built — and even prouder when others notice too.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-14 items-start">

                    {/* LEFT: Timeline */}
                    <div ref={ref} className="flex-1 flex flex-col relative">

                        {/* Background line */}
                        <div className="absolute left-[22px] top-12 bottom-0 w-px bg-gray-200" />

                        {/* Animated progress line */}
                        <motion.div
                            style={{ height }}
                            className="absolute left-[22px] top-12 w-px bg-primary"
                        />

                        {awards.map((award, i) => (
                            <div key={i} className="flex gap-5 group relative">

                                {/* Icon */}
                                <div className="w-11 h-11 rounded-2xl primary-bg border border-pink-100 flex items-center justify-center text-xl flex-shrink-0 z-10">
                                    {award.icon}
                                </div>

                                {/* Content */}
                                <div className="pb-8 flex flex-col gap-1 pt-1.5">
                                    <span className="text-xs font-bold primary-text tracking-widest uppercase">
                                        {award.year}
                                    </span>

                                    <h3 className="font-extrabold primary-text text-base">
                                        {award.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {award.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Images */}
                    <div className="flex lg:hidden w-full">
                        <img
                            src={photos[0].src}
                            alt={photos[0].alt}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="hidden flex-1 lg:grid grid-cols-2 grid-rows-3 gap-4 h-[520px]">
                        <div className="row-span-2 rounded-3xl overflow-hidden">
                            <img src={photos[0].src} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div className="rounded-3xl overflow-hidden">
                            <img src={photos[1].src} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div className="rounded-3xl overflow-hidden">
                            <img src={photos[2].src} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <div className="col-span-2 rounded-3xl overflow-hidden">
                            <img src={photos[3].src} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Awards;