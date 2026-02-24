import { MdCastle, MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaMobile, FaPhone } from "react-icons/fa";
import { ArrowUp, Locate, LocateFixedIcon, Mail, MapPin, Phone, Pin } from "lucide-react";

const Footer = () => {
    const year = new Date().getFullYear();

    const links = {
        "Quick Links": [
            { label: "Home", href: "/" },
            { label: "Our Castles", href: "/castles" },
            { label: "About Us", href: "/about" },
            { label: "Awards", href: "/awards" },
            { label: "Contact", href: "/contact" },
        ],
        "Information": [
            { label: "Safety & Risk Assessment", href: "/risk-assessments" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "FAQ", href: "/frequently-asked-questions" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    };

    const socials = [
        { icon: <FaInstagram size={18} />, href: "https://instagram.com", label: "Instagram", hover: "hover:bg-pink-500" },
        { icon: <FaFacebook size={18} />, href: "https://facebook.com", label: "Facebook", hover: "hover:bg-pink-500" },
        { icon: <FaWhatsapp size={18} />, href: "https://wa.com", label: "TikTok", hover: "hover:bg-pink-500" },
        { icon: <MdEmail size={18} />, href: "https://tiktok.com", label: "TikTok", hover: "hover:bg-pink-500" },
        { icon: <FaPhone size={18} />, href: "https://tiktok.com", label: "TikTok", hover: "hover:bg-pink-500" },
    ];

    return (
        <footer className="bg-gray-900 text-white">

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand column */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-900/30">
                                <MdCastle size={22} />
                            </div>
                            <span className="font-extrabold text-lg text-white tracking-tight">
                                Bouncy <span className="text-pink-400">Castle</span>
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A mother and daughter bouncy castle hire business based in Surrey. Bringing safe, clean, and magical fun to parties across Surrey and South London since 2016.
                        </p>

                        {/* Contact quick info */}
                        <div className="flex flex-col gap-2">
                            {[
                                { icon: <Phone className="w-5" />, text: "07700 900 123" },
                                { icon: <Mail className="w-5" />, text: "hello@bouncycastle.co.uk" },
                                { icon: <MapPin className="w-5" />, text: "Surrey & South London" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                    <span className="text-base">{item.icon}</span>
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-2">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 ${s.hover}`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([heading, items]) => (
                        <div key={heading} className="flex flex-col gap-4">
                            <h3 className="font-extrabold text-white text-sm uppercase tracking-widest">{heading}</h3>
                            <ul className="flex flex-col gap-2.5">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            className="text-gray-400 text-sm hover:text-pink-400 transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust badges bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap items-center justify-center gap-6">
                    {["PIPA Tested", "£5M Public Liability", "PAT Tested", "5-Star Rated", "Free Delivery"].map((b, i) => (
                        <span key={i} className="text-gray-500 text-xs font-semibold">{b}</span>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-600 text-xs">
                        © {year} Bouncy Castle Hire. All rights reserved.
                    </p>
                    <div onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} className="flex items-center gap-1 text-gray-600 hover:text-gray-400 transition-colors cursor-pointer">
                        <ArrowUp className="w-5" />
                        <p className="text-xs">Back to top</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="/terms" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Terms & Conditions</a>
                        <span className="text-gray-700">·</span>
                        <a href="/privacy" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <span className="text-gray-700">·</span>
                        <a href="/safety" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">Safety</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;