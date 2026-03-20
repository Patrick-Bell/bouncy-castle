import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Check, Truck, Moon, Clock, CloudRain, RefreshCw, AlertTriangle, CreditCard, Bubbles } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import { BsBank2, BsCash, BsCreditCard } from "react-icons/bs";
import { motion } from "framer-motion";

const paymentMethods = [
    { name: "PayPal", icon: <FaPaypal className="text-[#3b3e33]" />, desc: "Pay securely via PayPal" },
    { name: "Bank Transfer", icon: <BsBank2 className="text-[#3b3e33]" />, desc: "Direct to our account" },
    { name: "Cash", icon: <BsCash className="text-[#3b3e33]" />, desc: "On the day of delivery" },
    { name: "Card", icon: <BsCreditCard className="text-[#3b3e33]"/>, desc: "Visa, Mastercard & Amex" },
];

const pricingItems = [
    {
        icon: <CreditCard className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Booking Deposit",
        amount: "20%",
        amountSub: "of total hire fee",
        description: "A 20% deposit is required to secure your date. Until the deposit is received, your date remains available to other customers.",
        tag: null,
    },
    {
        icon: <Check className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Remaining Balance",
        amount: "80%",
        amountSub: "on the day",
        description: "The remaining balance is due in full once we've arrived and finished setting up. We accept cash, card, bank transfer, or PayPal.",
        tag: null,
    },
    {
        icon: <Moon className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Overnight Hire",
        amount: "+£30",
        amountSub: "per night",
        description: "Want to keep the castle overnight? We'll collect it the following morning. Just let us know when booking.",
        tag: "Add-on",
    },
    {
        icon: <Truck className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Delivery",
        amount: "Free",
        amountSub: "within 10 miles",
        description: "Delivery and collection is completely free within 10 miles. Beyond that, we charge £1.50 per mile — we'll always confirm the charge before you book.",
        tag: null,
    },
    {
        icon: <Clock className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Late Collection Fee",
        amount: "+£25",
        amountSub: "per hour",
        description: "If the castle isn't ready for collection at the agreed time, a late fee of £25 per hour (or part thereof) will apply.",
        tag: "If applicable",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Damage / Cleaning",
        amount: "£25–£150",
        amountSub: "if required",
        description: "We inspect all equipment on collection. Excessive dirt or damage beyond fair wear and tear will be charged at cost.",
        tag: "If applicable",
    },
];

const refundPolicies = [
    {
        icon: <CloudRain className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Bad Weather",
        description: "If we're unable to set up due to unsafe wind speeds (over 24mph) or severe weather, you'll receive a full refund including your deposit.",
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Cancellation (14+ days)",
        description: "Cancel more than 14 days before your hire date and we'll refund your deposit in full, no questions asked.",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Cancellation (7–14 days)",
        description: "Cancellations between 7 and 14 days before your hire date will forfeit the deposit. We'll always try to work with you.",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Cancellation (under 7 days)",
        description: "Cancellations within 7 days may be charged up to 50% of the total hire fee. Within 48 hours, the full hire fee applies.",
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-[#3b3e33]" />,
        bg: "bg-[#f0f1e8]",
        title: "Our Cancellation",
        description: "In the rare event we have to cancel (illness, equipment failure, emergency), you'll receive a full refund including deposit within 5 working days.",
    },
];

const PaymentsPage = () => {
    return (
        <div className="bg-[#f8f9f2] min-h-screen">
            <Navbar />

            {/* Hero - Haze Secondary Background */}
            <div className="relative bg-[#3b3e33] overflow-hidden top-10 lg:top-0">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-white/5 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <span className="inline-flex items-center gap-2 text-[#f0f1e8] font-bold text-sm tracking-widest uppercase">
                    <motion.span
                        className="block h-px bg-[#f0f1e8]"
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }} // Tailwind w-6 = 24px
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        />                        
                        Transparent Pricing
                    </span>
                    <h1 className="text-6xl font-extrabold text-[#f0f1e8] tracking-tight leading-none">
                        Payments & <br />
                        <span className="opacity-60 font-extrabold text-[#f0f1e8]">Pricing.</span>
                    </h1>
                    <p className="text-[#f0f1e8]/80 text-lg max-w-xl leading-relaxed">
                        No hidden fees, no surprises. Here's exactly how payments work, what's included, and what happens if plans change.
                    </p>
                    <p className="text-xs text-[#f0f1e8]/40">All prices include VAT · Payment accepted on the day of delivery</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col gap-16">

                {/* How it works — 2 step */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 primary-text font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px secondary-bg inline-block" />
                            How It Works
                        </span>
                        <h2 className="text-3xl font-extrabold primary-text">Simple two-step payment</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-3xl border border-[#d8dbca]/40 p-7 flex flex-col gap-4 relative overflow-hidden shadow-sm">
                            <div className="absolute top-5 right-6 text-7xl font-extrabold text-[#f0f1e8] leading-none select-none">1</div>
                            <div className="w-12 h-12 rounded-2xl bg-[#f0f1e8] flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-[#3b3e33]" />
                            </div>
                            <div>
                                <p className="font-extrabold text-[#3b3e33] text-lg">Pay your deposit</p>
                                <p className="text-[#3b3e33]/60 font-bold text-sm mt-0.5">20% of total hire fee</p>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Once you've agreed a date with us, a 20% deposit secures your booking. We'll confirm everything in writing.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                                {["PayPal", "Bank Transfer", "Card"].map((m) => (
                                    <span key={m} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{m}</span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl border border-[#d8dbca]/40 p-7 flex flex-col gap-4 relative overflow-hidden shadow-sm">
                            <div className="absolute top-5 right-6 text-7xl font-extrabold text-[#f0f1e8] leading-none select-none">2</div>
                            <div className="w-12 h-12 rounded-2xl bg-[#3b3e33] flex items-center justify-center">
                                <Check className="w-6 h-6 text-[#f0f1e8]" />
                            </div>
                            <div>
                                <p className="font-extrabold text-[#3b3e33] text-lg">Pay the rest on the day</p>
                                <p className="text-[#3b3e33]/60 font-bold text-sm mt-0.5">Remaining 80% on delivery</p>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Once we've arrived and finished setting everything up safely, the remaining balance is due before we leave.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                                {["Cash", "PayPal", "Bank Transfer", "Card"].map((m) => (
                                    <span key={m} className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment methods */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-[#3b3e33] font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-[#3b3e33] inline-block" />
                            Payment Methods
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#3b3e33]">We accept</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {paymentMethods.map((method, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-[#d8dbca]/40 p-6 flex flex-col items-center text-center gap-3 hover:border-[#3b3e33] transition-all shadow-sm">
                                <div className="w-16 h-16 rounded-2xl bg-[#f0f1e8] border border-[#d8dbca]/30 flex items-center justify-center text-3xl">
                                    {method.icon}
                                </div>
                                <div>
                                    <p className="font-extrabold text-[#3b3e33] text-sm">{method.name}</p>
                                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">{method.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full pricing breakdown */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-[#3b3e33] font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-[#3b3e33] inline-block" />
                            Full Breakdown
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#3b3e33]">Every charge explained</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pricingItems.map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-[#d8dbca]/40 p-6 flex flex-col gap-4 shadow-sm">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <p className="font-extrabold text-[#3b3e33] text-sm">{item.title}</p>
                                    </div>
                                    {item.tag && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-3xl font-extrabold text-[#3b3e33]">{item.amount}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{item.amountSub}</span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Refund policy */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-[#3b3e33] font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-[#3b3e33] inline-block" />
                            Refunds & Cancellations
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#3b3e33]">What happens if plans change?</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {refundPolicies.map((policy, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-[#d8dbca]/40 p-5 flex items-start gap-4 shadow-sm">
                                <div className={`w-10 h-10 rounded-2xl ${policy.bg} flex items-center justify-center flex-shrink-0`}>
                                    {policy.icon}
                                </div>
                                <div>
                                    <p className="font-extrabold text-[#3b3e33] text-sm mb-1">{policy.title}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{policy.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <div className="bg-[#3b3e33] rounded-3xl p-8 flex flex-col items-center text-center gap-4">
                    <span className="text-3xl"><Bubbles className="text-[#f0f1e8] w-12 h-12" /></span>
                    <h3 className="text-xl font-extrabold text-[#f0f1e8]">Have a question about payment?</h3>
                    <p className="text-sm text-[#f0f1e8]/70 max-w-md leading-relaxed">
                        We're always happy to chat. If something isn't clear, just get in touch and we'll work it out together.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
                        <a
                            href="https://wa.me/447700000000"
                            className="px-5 py-2.5 rounded-xl bg-[#f0f1e8] text-[#3b3e33] font-extrabold text-sm hover:bg-white transition-all shadow-lg"
                        >
                            WhatsApp Us
                        </a>
                        <a
                            href="/contact"
                            className="px-5 py-2.5 rounded-xl border-2 border-[#f0f1e8]/20 text-[#f0f1e8] font-bold text-sm hover:border-[#f0f1e8] transition-all"
                        >
                            All Contact Options
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PaymentsPage;