import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdEmail, MdHeight, MdNoAdultContent, MdPeople, MdWarning } from "react-icons/md";
import { AlertCircle, Check, Clock, GroupIcon, House, LeafyGreen, PersonStanding, RulerDimensionLine, Share } from "lucide-react";
import { AlertDialog } from "radix-ui";

const ImagePlaceholder = ({ className = "" }) => (
    <div className={`bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-300 ${className}`}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="text-xs font-medium">Photo coming soon</span>
    </div>
);

const ProductModal = ({ product, open, onClose }) => {
    const [copied, setCopied] = useState(false);

    if (!product) return null;

    const handleEmailEnquiry = () => {
        const subject = encodeURIComponent(`Enquiry about the ${product.name}`);
        const body = encodeURIComponent(
            `Hi Sarah & Mia,\n\nI'm interested in hiring the ${product.name} (${product.price ?? ""}).\n\nCould you please let me know your availability?\n\nThanks!`
        );
        window.location.href = `mailto:hello@bouncycastle.co.uk?subject=${subject}&body=${body}`;
    };

    const handleShare = () => {
        const text = `Check out the ${product.name} from Bouncy Castle Hire!`;
        if (navigator.share) {
            navigator.share({ title: product.name, text, url: window.location.href });
        } else {
            navigator.clipboard.writeText(`${text}\n${window.location.href}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogTrigger asChild>
            <button className="cursor-pointer w-full mt-1 py-2.5 rounded-xl bg-gray-50 text-gray-700 font-bold text-sm hover:bg-pink-500 hover:text-white transition-all duration-200">
                    View
            </button>
            </DialogTrigger>
            <DialogContent className="max-w-21xl p-0 gap-0 rounded-3xl overflow-hidden max-h-[90vh] flex flex-col">

                {/* Pink hero header */}
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 px-7 pt-7 pb-6 relative overflow-hidden flex-shrink-0">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-yellow-300/20 rounded-full translate-y-1/2 pointer-events-none" />

                    <DialogHeader className="relative text-left space-y-0">
                        <div className="flex items-start gap-4">
                            {/* Emoji icon */}
                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                                {product.emoji ?? "🏰"}
                            </div>
                            <div className="flex-1 min-w-0 pt-0.5">
                                <DialogTitle className="text-2xl font-extrabold text-white leading-tight">
                                    {product.name}
                                </DialogTitle>
                                <p className="text-pink-100 text-sm mt-1 leading-relaxed line-clamp-2">
                                    {product.description}
                                </p>
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {product.tag && (
                                        <span className="bg-yellow-400 text-gray-900 text-xs font-extrabold px-2.5 py-1 rounded-full">
                                            {product.tag}
                                        </span>
                                    )}
                                    {product.age && (
                                        <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                            {product.age}
                                        </span>
                                    )}
                                    {product.capacity && (
                                        <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                                            {product.capacity}
                                        </span>
                                    )}
                                    {product.price && (
                                        <span className="bg-white text-pink-600 text-xs font-extrabold px-2.5 py-1 rounded-full">
                                            {product.price}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogHeader>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="details" className="flex flex-col flex-1 overflow-hidden">
                    <div className="px-7 pt-4 ">
                        <TabsList className="bg-gray-100 rounded-xl h-9 p-1">
                            <TabsTrigger value="details" className="cursor-pointer rounded-lg text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm">
                                Details
                            </TabsTrigger>
                            <TabsTrigger value="size" className="cursor-pointer rounded-lg text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm">
                                Size & Setup
                            </TabsTrigger>
                            <TabsTrigger value="suitability" className="cursor-pointer rounded-lg text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm">
                                Suitability
                            </TabsTrigger>
                            <TabsTrigger value="photos" className="cursor-pointer rounded-lg text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-pink-500 data-[state=active]:shadow-sm">
                                Photos
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Scrollable tab content */}
                    <div className="flex-1 overflow-y-auto">

                        {/* ── DETAILS TAB ── */}
                        <TabsContent value="details" className="mt-0 px-7 py-6 flex flex-col gap-5">
                            <div>
                                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">About This Castle</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {product.longDescription ?? product.description}
                                </p>
                            </div>

                            <Separator />

                            {/* Quick stats row */}
                            <div>
                                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">At a Glance</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Age Range", value: product.age ?? "—" },
                                        { label: "Max Capacity", value: product.capacity ?? "—" },
                                        { label: "Indoor Use", value: product.indoorOk ? "Yes, suitable" : "Outdoors only" },
                                        { label: "Adult Use", value: product.adultUse ? "Yes, suitable" : "Children only" },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                                            <span className="text-xl flex-shrink-0">{stat.icon}</span>
                                            <div>
                                                <p className="text-xs text-gray-400 font-semibold">{stat.label}</p>
                                                <p className="text-sm font-extrabold text-gray-800">{stat.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* ── SIZE & SETUP TAB ── */}
                        <TabsContent value="size" className="mt-0 px-7 py-6 flex flex-col gap-5">
                            <div>
                                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">Dimensions</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: <RulerDimensionLine />, label: "Castle Size", value: product.dimensions ?? "—" },
                                        { icon: <MdHeight />, label: "Height", value: product.height ?? "—" },
                                        { icon: <LeafyGreen />, label: "Space Needed", value: product.space ?? "—" },
                                        { icon: <Clock />, label: "Setup Time", value: product.setupTime ?? "—" },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col items-center gap-1.5 text-center">
                                            <span className="text-2xl">{item.icon}</span>
                                            <p className="font-extrabold text-gray-900 text-sm">{item.value}</p>
                                            <p className="text-gray-400 text-xs">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-3">What We Need From You</p>
                                <ul className="flex flex-col gap-2.5">
                                    {[
                                        "A flat or near-flat area (max 10% gradient)",
                                        "Clear of furniture, toys, and animal waste",
                                        "Access to a mains 13-amp power socket within 25 metres",
                                        "Someone home to receive us during the delivery window",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                                            <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                                {i + 1}
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* ── SUITABILITY TAB ── */}
                        <TabsContent value="suitability" className="mt-0 px-7 py-6 flex flex-col gap-5">

                            {/* Adult / Indoor badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                                    product.adultUse ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-gray-50 text-gray-400 border-gray-200"
                                }`}>
                                    <PersonStanding /> Adults: {product.adultUse ? "✓ Suitable" : "✗ Not recommended"}
                                </span>
                                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                                    product.indoorOk ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-gray-50 text-gray-400 border-gray-200"
                                }`}>
                                    <House /> Indoors: {product.indoorOk ? "✓ Suitable" : "✗ Outdoors only"}
                                </span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                                    <p className="flex items-center text-xs font-extrabold text-emerald-700 uppercase tracking-wide mb-2.5"><Check className="mr-1" /> Suitable for</p>
                                    <ul className="flex flex-col gap-2">
                                        {(product.suitableFor ?? []).map((s, i) => (
                                            <li key={i} className="text-xs text-emerald-700 flex items-start gap-2">
                                                <span className="flex-shrink-0 mt-0.5 font-bold">·</span>{s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
                                    <p className="flex items-center text-xs font-extrabold text-red-600 uppercase tracking-wide mb-2.5"><AlertCircle className="mr-1" /> Not suitable for</p>
                                    <ul className="flex flex-col gap-2">
                                        {(product.notSuitableFor ?? []).map((s, i) => (
                                            <li key={i} className="text-xs text-red-600 flex items-start gap-2">
                                                <span className="flex-shrink-0 mt-0.5 font-bold">·</span>{s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Safety note with link */}
                            <div className="bg-pink-50 border border-pink-100 rounded-2xl px-4 py-4 flex gap-3 items-start">
                                <span className="text-lg flex-shrink-0"><MdWarning className="text-pink-700" /></span>
                                <div className="text-xs text-pink-700 leading-relaxed">
                                    <p>An adult supervisor (18+) must be present at all times. All our castles are <strong>PIPA certified</strong> and covered by <strong>£5 million public liability insurance</strong>.</p>
                                    <a
                                        href="/safety"
                                        className="inline-flex items-center gap-1 mt-2 font-extrabold text-pink-600 hover:text-pink-800 underline underline-offset-2 transition-colors"
                                    >
                                        Read our full Risk Assessment & Safety Guide →
                                    </a>
                                </div>
                            </div>
                        </TabsContent>

                        {/* ── PHOTOS TAB ── */}
                        <TabsContent value="photos" className="mt-0 px-7 py-6">
                            <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-4">Photos</p>
                            {/* Main large image */}
                            <ImagePlaceholder className="w-full h-52 mb-3" />
                            {/* Thumbnail row */}
                            <div className="grid grid-cols-3 gap-3">
                                <ImagePlaceholder className="w-full h-24" />
                                <ImagePlaceholder className="w-full h-24" />
                                <ImagePlaceholder className="w-full h-24" />
                            </div>
                            <p className="text-center text-xs text-gray-600 mt-4">
                               <span>
                                <a className="underline font-bold hover:text-pink-500" href="">Contact</a> us if you want to see more images for {product.name}.
                                </span>
                            </p>
                        </TabsContent>

                    </div>
                </Tabs>

                {/* Sticky footer actions */}
                <div className="flex-shrink-0 border-t border-gray-100 px-7 py-4 bg-white flex flex-col sm:flex-row gap-3">
                    <Button
                        onClick={handleEmailEnquiry}
                        className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-extrabold rounded-lg h-11 text-xs gap-2 cursor-pointer"
                    >
                        <MdEmail />
                        Enquire About This Castle
                    </Button>
                    <Button
                        onClick={handleShare}
                        variant="outline"
                        className="flex-1 border-gray-200 font-bold rounded-lg h-11 textxs hover:border-pink-300 hover:text-pink-500 transition-all text-xs cursor-pointer"
                    >
                            {copied ? (
                            "✅ Copied!"
                            ) : (
                            <>
                                <Share className="w-4 h-4 mr-0" />
                                Share
                            </>
                            )}                    
                        </Button>
                    <DialogClose asChild>
                        <Button
                            variant="ghost"
                            className="sm:w-11 h-11 rounded-xl text-gray-400 hover:text-gray-600 font-bold flex-shrink-0 cursor-pointer"
                        >
                            <span className="sm:hidden">Close</span>
                            <span className="hidden sm:block text-lg">✕</span>
                        </Button>
                    </DialogClose>
                </div>

            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;