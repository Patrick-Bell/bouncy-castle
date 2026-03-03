import { useState } from "react";
import { castles } from "../../api/Products";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BsInstagram } from "react-icons/bs";

// Flatten all images from all castles into one array with castle name attached
const allImages = castles.flatMap((castle) =>
    (castle.images || []).map((src) => ({
        src,
        castle: castle.name,
        emoji: castle.emoji,
        id: castle.id,
    }))
);

// Bento pattern — repeats every 5 tiles
// lg = large (2 cols, 2 rows), t = tall (1 col, 2 rows), w = wide (2 cols, 1 row), s = small (1 col, 1 row)
const bentoPattern = ["lg", "s", "s", "t", "w", "s", "s", "lg", "w", "t"];

const tileClass = (type) => {
    switch (type) {
        case "lg": return "col-span-2 row-span-2";
        case "t":  return "col-span-1 row-span-2";
        case "w":  return "col-span-2 row-span-1";
        default:   return "col-span-1 row-span-1";
    }
};

const GalleryPage = () => {
    const [lightbox, setLightbox] = useState(null); // index into allImages

    const openLightbox = (i) => setLightbox(i);
    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox((i) => (i - 1 + allImages.length) % allImages.length);
    const next = () => setLightbox((i) => (i + 1) % allImages.length);

    // Keyboard nav
    const handleKey = (e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
        if (e.key === "Escape") closeLightbox();
    };

    return (
        <>
        <Navbar />

        <section className="px-8 py-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                        Gallery
                        <span className="w-6 h-px bg-pink-400 inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        See them in <span className="text-pink-500">action</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        Real castles, real parties, real fun. Browse our full collection below.
                    </p>
                </div>

                {/* Bento grid */}
                {allImages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                        <span className="text-6xl">🏰</span>
                        <p className="font-extrabold text-gray-700 text-lg">No images yet</p>
                        <p className="text-gray-400 text-sm max-w-xs">Add images to your castles in the Products data and they'll appear here automatically.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3">
                        {allImages.map((img, i) => {
                            const type = bentoPattern[i % bentoPattern.length];
                            return (
                                <div
                                    key={i}
                                    onClick={() => openLightbox(i)}
                                    className={`${tileClass(type)} relative rounded-3xl overflow-hidden cursor-pointer group bg-pink-50`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.castle}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">{img.emoji}</span>
                                            <p className="text-white font-bold text-sm">{img.castle}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Instagram CTA */}
                <div className="mt-16 bg-pink-50 rounded-3xl p-8 flex flex-col items-center text-center gap-4">
                <span className="text-3xl"><BsInstagram className="text-pink-500 w-15 h-15" /></span>
                <h3 className="text-xl font-extrabold text-gray-900">See even more on Instagram</h3>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        We post photos from every hire on our Instagram. Follow us for party inspiration and to see our castles in real gardens.
                    </p>
                    <a
                        href="https://instagram.com/yourhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-pink-500 text-white font-extrabold text-sm hover:bg-pink-600 transition-all shadow-md shadow-pink-200"
                    >
                        Follow us @yourhandle
                    </a>
                </div>

            </div>
        </section>

        {/* Lightbox */}
        {lightbox !== null && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-500/80 backdrop-blur-xs cursor-pointer"
                onClick={closeLightbox}
                onKeyDown={handleKey}
                tabIndex={-1}
            >
                {/* Close */}
                <button
                    onClick={closeLightbox}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Prev */}
                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center gap-4">
                    <img
                        src={allImages[lightbox].src}
                        alt={allImages[lightbox].castle}
                        className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
                    />
                    {/* Caption */}
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{allImages[lightbox].emoji}</span>
                        <p className="text-white font-bold text-sm">{allImages[lightbox].castle}</p>
                        <span className="text-white/40 text-xs">· {lightbox + 1} / {allImages.length}</span>
                    </div>
                </div>

                {/* Next */}
                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {allImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                            className={`h-1.5 rounded-full transition-all duration-200 ${i === lightbox ? "bg-white w-5" : "bg-white/30 w-1.5"}`}
                        />
                    ))}
                </div>
            </div>
        )}
        </>
    );
};

export default GalleryPage;