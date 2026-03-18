import { Baby, Users } from "lucide-react";
import { castles } from "../../api/Products";
import ProductModal from "./ProductModal";
import { useNavigate } from "react-router";

const Services = () => {

    return (
        <section className="px-8 pt-20">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px secondary-bg inline-block" />
                        What We Offer
                        <span className="w-6 h-px secondary-bg inline-block" />
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        Our <span className="secondary-text">Castles</span>
                    </h2>
                    <p className="text-gray-400 text-base max-w-md">
                        Every castle is cleaned, safety-checked, and delivered with a smile — by us, personally.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {castles.map((castle, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-[#ebeddf] hover:shadow-lg hover:shadow-pink-50 transition-all duration-300 group"
                        >
                            {/* Emoji icon */}
                            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                                {castle.emoji}
                            </div>

                            {/* Name + tag */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-extrabold text-gray-900 text-lg">{castle.name}</h3>
                                {castle.tag && (
                                    <span className={`${castle.tagColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                                        {castle.tag}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed flex-1">{castle.description}</p>

                            {/* Meta */}
                            <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 pt-2 border-t border-gray-100">
                                <span className="flex items-center gap-2"><Baby className="w-5" /> {castle.age}</span>
                                <span className="w-px h-3 bg-gray-200" />
                                <span className="flex items-center gap-2"><Users className="w-5"/> {castle.capacity}</span>
                            </div>

                            {/* CTA */}
                            <button onClick={() => window.open(`/bouncy-castle/${castle.slug}`)} className="cursor-pointer w-full mt-1 py-2.5 rounded-xl bg-gray-50 text-gray-700 font-bold text-sm hover:bg-[#ebeddf] hover:text-[#3b3e33] transition-all duration-200">
                            View
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={() => window.location.href = '/bouncy-castles'} className="mt-6 cursor-pointer w-full py-2.5 rounded-xl primary-bg primary-text font-bold text-sm hover:opacity-80">
                    View All Castles
                </button>
            </div>
        </section>
    );
};

export default Services;