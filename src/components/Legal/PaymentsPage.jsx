import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Check, Truck, Moon, Clock, CloudRain, RefreshCw, AlertTriangle, CreditCard, Building2, Smartphone, Wallet, Bubbles } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import { BsBank2, BsCash, BsCreditCard } from "react-icons/bs";


const paymentMethods = [
    { name: "PayPal", icon: <FaPaypal className="text-pink-300" />, desc: "Pay securely via PayPal" },
    { name: "Bank Transfer", icon: <BsBank2 className="text-pink-300" />, desc: "Direct to our account" },
    { name: "Cash", icon: <BsCash className="text-pink-300" />, desc: "On the day of delivery" },
    { name: "Card", icon: <BsCreditCard className="text-pink-300"/>, desc: "Visa, Mastercard & Amex" },
];

const pricingItems = [
    {
        icon: <CreditCard className="w-5 h-5 text-pink-500" />,
        bg: "bg-pink-50",
        title: "Booking Deposit",
        amount: "20%",
        amountSub: "of total hire fee",
        description: "A 20% deposit is required to secure your date. Until the deposit is received, your date remains available to other customers.",
        tag: null,
    },
    {
        icon: <Check className="w-5 h-5 text-green-500" />,
        bg: "bg-green-50",
        title: "Remaining Balance",
        amount: "80%",
        amountSub: "on the day",
        description: "The remaining balance is due in full once we've arrived and finished setting up. We accept cash, card, bank transfer, or PayPal.",
        tag: null,
    },
    {
        icon: <Moon className="w-5 h-5 text-purple-500" />,
        bg: "bg-purple-50",
        title: "Overnight Hire",
        amount: "+£30",
        amountSub: "per night",
        description: "Want to keep the castle overnight? We'll collect it the following morning. Just let us know when booking.",
        tag: "Add-on",
    },
    {
        icon: <Truck className="w-5 h-5 text-blue-500" />,
        bg: "bg-blue-50",
        title: "Delivery",
        amount: "Free",
        amountSub: "within 10 miles",
        description: "Delivery and collection is completely free within 10 miles. Beyond that, we charge £1.50 per mile — we'll always confirm the charge before you book.",
        tag: null,
    },
    {
        icon: <Clock className="w-5 h-5 text-amber-500" />,
        bg: "bg-amber-50",
        title: "Late Collection Fee",
        amount: "+£25",
        amountSub: "per hour",
        description: "If the castle isn't ready for collection at the agreed time, a late fee of £25 per hour (or part thereof) will apply.",
        tag: "If applicable",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
        bg: "bg-red-50",
        title: "Damage / Cleaning",
        amount: "£25–£150",
        amountSub: "if required",
        description: "We inspect all equipment on collection. Excessive dirt or damage beyond fair wear and tear will be charged at cost. We'll always notify you before invoicing.",
        tag: "If applicable",
    },
];

const refundPolicies = [
    {
        icon: <CloudRain className="w-5 h-5 text-blue-500" />,
        bg: "bg-blue-50",
        title: "Bad Weather",
        description: "If we're unable to set up due to unsafe wind speeds (over 24mph) or severe weather, you'll receive a full refund including your deposit — or a free reschedule, whichever you prefer.",
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-green-500" />,
        bg: "bg-green-50",
        title: "Cancellation (14+ days)",
        description: "Cancel more than 14 days before your hire date and we'll refund your deposit in full, no questions asked. Refunds are processed within 5 working days.",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
        bg: "bg-amber-50",
        title: "Cancellation (7–14 days)",
        description: "Cancellations between 7 and 14 days before your hire date will forfeit the deposit. We'll always try to work with you if something unexpected comes up.",
    },
    {
        icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
        bg: "bg-red-50",
        title: "Cancellation (under 7 days)",
        description: "Cancellations within 7 days may be charged up to 50% of the total hire fee. Within 48 hours, the full hire fee applies — except in genuine emergencies, which we'll consider individually.",
    },
    {
        icon: <RefreshCw className="w-5 h-5 text-pink-500" />,
        bg: "bg-pink-50",
        title: "Our Cancellation",
        description: "In the rare event we have to cancel (illness, equipment failure, emergency), you'll receive a full refund including deposit within 5 working days.",
    },
];

const PaymentsPage = () => {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-400/20 rounded-full translate-y-1/2" />
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-pink-300/30 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-white" />
                        Transparent Pricing
                    </span>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none">
                        Payments &<br />
                        <span className="text-pink-300">Pricing.</span>
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl leading-relaxed">
                        No hidden fees, no surprises. Here's exactly how payments work, what's included, and what happens if plans change.
                    </p>
                    <p className="text-xs text-pink-200">All prices include VAT · Payment accepted on the day of delivery</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col gap-16">

                {/* How it works — 2 step */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-pink-400 inline-block" />
                            How It Works
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Simple two-step payment</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Step 1 */}
                        <div className="bg-white rounded-3xl border border-gray-100 p-7 flex flex-col gap-4 relative overflow-hidden">
                            <div className="absolute top-5 right-6 text-7xl font-extrabold text-gray-50 leading-none select-none">1</div>
                            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-pink-500" />
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-lg">Pay your deposit</p>
                                <p className="text-pink-500 font-bold text-sm mt-0.5">20% of total hire fee</p>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Once you've agreed a date with us, a 20% deposit secures your booking. We'll confirm everything in writing once it's received.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                                {["PayPal", "Bank Transfer", "Card"].map((m) => (
                                    <span key={m} className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">{m}</span>
                                ))}
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-3xl border border-gray-100 p-7 flex flex-col gap-4 relative overflow-hidden">
                            <div className="absolute top-5 right-6 text-7xl font-extrabold text-gray-50 leading-none select-none">2</div>
                            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                                <Check className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-lg">Pay the rest on the day</p>
                                <p className="text-green-500 font-bold text-sm mt-0.5">Remaining 80% on delivery</p>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Once we've arrived and finished setting everything up safely, the remaining balance is due before we leave. Easy.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                                {["Cash", "PayPal", "Bank Transfer", "Card"].map((m) => (
                                    <span key={m} className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg">{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment methods */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-pink-400 inline-block" />
                            Payment Methods
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900">We accept</h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {paymentMethods.map((method, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col items-center text-center gap-3 hover:border-pink-200 hover:shadow-md hover:shadow-pink-50 transition-all">
                                {/* Placeholder logo area */}
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-3xl">
                                    {method.icon}
                                </div>
                                <div>
                                    <p className="font-extrabold text-gray-900 text-sm">{method.name}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{method.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Full pricing breakdown */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-pink-400 inline-block" />
                            Full Breakdown
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Every charge explained</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pricingItems.map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                            {item.icon}
                                        </div>
                                        <p className="font-extrabold text-gray-900 text-sm">{item.title}</p>
                                    </div>
                                    {item.tag && (
                                        <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full flex-shrink-0">
                                            {item.tag}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <span className="text-3xl font-extrabold text-gray-900">{item.amount}</span>
                                    <span className="text-xs text-gray-400 font-semibold">{item.amountSub}</span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Refund policy */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
                            <span className="w-6 h-px bg-pink-400 inline-block" />
                            Refunds & Cancellations
                        </span>
                        <h2 className="text-3xl font-extrabold text-gray-900">What happens if plans change?</h2>
                        <p className="text-gray-400 text-sm mt-1 max-w-lg">We're a family business and we'll always try to be fair. Here's our policy in plain English.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {refundPolicies.map((policy, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                                <div className={`w-10 h-10 rounded-2xl ${policy.bg} flex items-center justify-center flex-shrink-0`}>
                                    {policy.icon}
                                </div>
                                <div>
                                    <p className="font-extrabold text-gray-900 text-sm mb-1">{policy.title}</p>
                                    <p className="text-sm text-gray-500 leading-relaxed">{policy.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom note */}
                <div className="bg-pink-50 rounded-3xl p-8 flex flex-col items-center text-center gap-4">
                    <span className="text-3xl"><Bubbles className="text-pink-500 w-15 h-15" /></span>
                    <h3 className="text-xl font-extrabold text-gray-900">Have a question about payment?</h3>
                    <p className="text-sm text-gray-500 max-w-md leading-relaxed">
                        We're always happy to chat. If something isn't clear or your situation is a bit different, just get in touch and we'll work it out together.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <a
                            href="https://wa.me/447700000000"
                            className="px-5 py-2.5 rounded-xl bg-pink-500 text-white font-extrabold text-sm hover:bg-pink-600 transition-all shadow-md shadow-pink-200"
                        >
                            WhatsApp Us
                        </a>
                        <a
                            href="/contact"
                            className="px-5 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:border-pink-300 hover:text-pink-500 transition-all"
                        >
                            All Contact Options
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PaymentsPage;