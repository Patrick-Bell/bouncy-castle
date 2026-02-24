const awards = [
    {
        year: "2024",
        icon: "🏆",
        title: "Best Family Business",
        body: "Surrey Small Business Awards — recognised for outstanding customer experience and community impact.",
    },
    {
        year: "2023",
        icon: "⭐",
        title: "Top Rated Hire Company",
        body: "Awarded by Bark.com with a consistent 5-star rating across over 150 verified reviews.",
    },
    {
        year: "2023",
        icon: "🛡️",
        title: "PIPA Safety Excellence",
        body: "All equipment passed PIPA inspection with highest safety marks for the third consecutive year.",
    },
    {
        year: "2022",
        icon: "💛",
        title: "Loved by Locals",
        body: "Voted #1 bouncy castle hire in South London by readers of the Local Family Magazine.",
    },
    {
        year: "2021",
        icon: "🌟",
        title: "Netmums Recommended",
        body: "Featured and recommended by Netmums as a trusted, family-run party supplier.",
    },
];

const photos = [
    {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        alt: "Kids on bouncy castle",
        span: "row-span-2",
    },
    {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        alt: "Bouncy castle at a party",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80",
        alt: "Happy children playing",
        span: "",
    },
    {
        src: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80",
        alt: "Birthday party fun",
        span: "",
    },
];

const Awards = () => {
    return (
        <section className="bg-white px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Section header */}
                <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        Recognition
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Award-winning <span className="text-pink-500">fun</span>
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
                                    <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-pink-500 group-hover:border-pink-500 transition-all duration-200 group-hover:scale-110">
                                        <span className="group-hover:grayscale-0">{award.icon}</span>
                                    </div>
                                    {i < awards.length - 1 && (
                                        <div className="w-px flex-1 bg-gray-100 my-2" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pb-8 flex flex-col gap-1 pt-1.5">
                                    <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">{award.year}</span>
                                    <h3 className="font-extrabold text-gray-900 text-base group-hover:text-pink-500 transition-colors duration-200">
                                        {award.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{award.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Photo grid */}
                    <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-4 h-[520px]">
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