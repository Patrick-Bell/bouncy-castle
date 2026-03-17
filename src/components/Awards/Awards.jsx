import image1 from '../../assets/bumper-cars.png'
import image2 from '../../assets/white-bouncy-castle.png'
import logo from '../../assets/logo.jpg'
import image3 from '../../assets/soft-play.png'
import { Balloon, Castle, Computer, Instagram } from 'lucide-react';
import { BsInstagram } from 'react-icons/bs';
import { MdSafetyCheck } from 'react-icons/md';

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
    {
        src: logo,
        alt: "Kids on bouncy castle",
        span: "row-span-2",
    },
    {
        src: image2,
        alt: "Bouncy castle at a party",
        span: "",
    },
    {
        src: image1,
        alt: "Happy children playing",
        span: "",
    },
    {
        src: image3,
        alt: "Birthday party fun",
        span: "",
    },
];

const Awards = () => {
    return (
        <section className="bg-white px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="flex flex-col items-center text-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px secondary-bg inline-block" />
                        Recognition
                        <span className="w-6 h-px secondary-bg inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Award-winning <span className="secondary-text">fun</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        We're proud of what we've built — and even prouder when others notice too.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-14 items-start">

                    {/* Left: Awards timeline */}
                    <div className="flex-1 flex flex-col">
                        {awards.map((award, i) => (
                            <div key={i} className="flex gap-5 group">
                                {/* Timeline spine */}
                                <div className="flex flex-col items-center">
                                    <div className="w-11 h-11 rounded-2xl primary-bg border border-pink-100 flex items-center justify-center text-xl flex-shrink-0">
                                        <span className="group-hover:grayscale-0">{award.icon}</span>
                                    </div>
                                    {i < awards.length - 1 && (
                                        <div className="w-px flex-1 bg-gray-100 my-2" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pb-8 flex flex-col gap-1 pt-1.5">
                                    <span className="text-xs font-bold primary-text tracking-widest uppercase">{award.year}</span>
                                    <h3 className="font-extrabold primary-text text-base transition-colors duration-200">
                                        {award.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{award.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Photo grid */}
                    <div className="flex lg:hidden w-full">
                            <img
                                src={photos[0].src}
                                alt={photos[0].alt}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>


                    <div className="hidden flex-1 lg:grid grid-cols-2 grid-rows-3 gap-4 h-[520px]">
                        {/* Large left image spanning 2 rows */}
                        <div className="row-span-2 rounded-3xl overflow-hidden">
                            <img
                                src={photos[0].src}
                                alt={photos[0].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Top right */}
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src={photos[1].src}
                                alt={photos[1].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Middle right */}
                        <div className="rounded-3xl overflow-hidden">
                            <img
                                src={photos[2].src}
                                alt={photos[2].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Bottom spanning full width */}
                        <div className="col-span-2 rounded-3xl overflow-hidden">
                            <img
                                src={photos[3].src}
                                alt={photos[3].alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Awards;