import { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const clauses = [
    {
        id: "booking",
        title: "1. Booking & Confirmation",
        body: [
            "A booking is only confirmed upon receipt of a deposit payment. Until the deposit has been received and acknowledged by us in writing (email or text), the date remains available to other customers.",
            "The deposit amount will be communicated to you at the time of booking and is calculated as a percentage of the total hire fee. The exact amount will be stated in your booking confirmation.",
            "The deposit is non-refundable unless we are unable to fulfil the hire due to circumstances entirely within our control (e.g. equipment failure with no suitable replacement available).",
            "The remaining balance is due in full on the day of delivery, prior to setup commencing. We accept bank transfer, cash, or card payment. We are unable to begin setup until payment has been received in full.",
            "Bookings are made on behalf of the hirer only. The hirer must be aged 18 or over and must be present at the delivery address at the time of setup.",
            "By making a booking — whether online, by phone, email, or in person — you confirm that you have read, understood, and agree to these Terms and Conditions in full.",
            "We reserve the right to decline any booking at our discretion without being required to give a reason.",
        ],
    },
    {
        id: "cancellation",
        title: "2. Cancellation & Rescheduling",
        body: [
            "Cancellations must be made in writing by email to hello@bouncycastle.co.uk. Verbal cancellations will not be accepted.",
            "Cancellations made more than 14 days before the hire date will receive a full refund of the deposit, returned within 5 working days.",
            "Cancellations made between 7 and 14 days before the hire date will result in the deposit being retained in full.",
            "Cancellations made within 7 days of the hire date may be subject to a charge of up to 50% of the total hire fee, at our discretion.",
            "Cancellations made within 48 hours of the hire date will be charged the full hire fee, except in cases of genuine emergency which will be considered on an individual basis.",
            "You may request to reschedule your booking at no additional charge, provided you give at least 7 days' notice and subject to availability on the new date.",
            "Rescheduling requests made with less than 7 days' notice will be treated as a cancellation and the relevant cancellation charges will apply.",
            "We reserve the right to cancel a booking in exceptional circumstances beyond our control, including but not limited to severe weather, serious equipment damage, illness, or family emergency. In such cases a full refund including deposit will be issued within 5 working days.",
        ],
    },
    {
        id: "weather",
        title: "3. Weather Policy",
        body: [
            "The safety of children is our absolute priority. We reserve the right to refuse setup or require the castle to be deflated at any point if we consider weather conditions to be unsafe.",
            "Bouncy castles must not be operated in sustained wind speeds exceeding 24mph (Beaufort Scale Force 5). This is a PIPA safety requirement and is non-negotiable.",
            "We monitor weather forecasts in the 48 hours prior to every hire and will contact you if we have concerns. Final decisions on whether to proceed will be made by us on the day of delivery.",
            "If we are unable to set up due to unsafe wind speeds, you will be offered a full reschedule or a full refund including deposit.",
            "Light rain is generally manageable as most castles are supplied with a rain cover. The rain cover is intended for light showers only and does not make the castle suitable for heavy or sustained rainfall.",
            "In the event of heavy rain, thunderstorms, hail, or lightning during the hire period, the castle must be deflated immediately and all users must exit the equipment.",
            "If you choose to proceed with the hire when we have flagged borderline weather conditions and subsequently choose to deflate early, no refund will be given for unused hire time.",
            "Frost, ice, or snow may also make the castle surface slippery and unsafe. We reserve the right to refuse setup in such conditions.",
        ],
    },
    {
        id: "delivery",
        title: "4. Delivery, Setup & Collection",
        body: [
            "We will agree a delivery window with you at or prior to the time of booking. We will always endeavour to arrive within the agreed window, however we cannot guarantee exact arrival times due to traffic and other factors.",
            "An adult aged 18 or over must be present at the delivery address to receive the equipment, sign the hire agreement, and make final payment. We will not leave equipment unattended.",
            "The hirer is responsible for ensuring the setup area is fully prepared prior to our arrival. This includes: clearing the area of all furniture, garden equipment, and obstacles; removing all animal waste; ensuring the ground is reasonably flat (no more than a 10% gradient); and ensuring there are no overhead hazards such as tree branches or power lines.",
            "If the setup area is not prepared and ready on our arrival, or is found to be unsuitable, we reserve the right to refuse setup. A call-out charge may apply and no refund of the deposit will be given.",
            "We require access to a standard UK 13-amp mains power outlet within 25 metres of the setup location. The use of generators is not permitted unless expressly agreed in writing in advance.",
            "Extension cables must not be used unless specifically provided by us. The use of customer-owned extension cables or power leads with our equipment is strictly prohibited.",
            "The blower unit must remain running at all times during use and must not be covered, obstructed, or moved.",
            "Collection will take place at the agreed time. The castle must be accessible, free from users, and dry (where possible) at the point of collection.",
            "Late collections caused by the hirer may incur an additional charge of £25 per hour or part thereof.",
            "We are not responsible for any damage to lawns, pathways, driveways, or surfaces caused during delivery, setup, or collection. The hirer accepts this risk by confirming the booking.",
        ],
    },
    {
        id: "supervision",
        title: "5. Supervision & Rules of Use",
        body: [
            "A responsible adult aged 18 or over must actively supervise the bouncy castle at all times during use. This is a strict safety and insurance requirement.",
            "Failure to maintain adequate adult supervision will void our public liability insurance coverage and the hirer will assume full liability for any resulting incidents.",
            "All users must remove shoes, glasses, jewellery, hair clips, belts, and any other sharp or hard objects before using the castle.",
            "No food, drink, chewing gum, face paint, or party poppers are permitted on or near the castle.",
            "Somersaults, headstands, wrestling, and roughhousing are strictly prohibited on the castle.",
            "Users must not climb, sit, or hang on the walls or roof of the castle.",
            "The maximum user capacity displayed on the castle label must not be exceeded at any time.",
            "We strongly advise separating age groups during use. Small children (under 5) should not use the castle at the same time as older children or adults.",
            "Adults may enter the castle only to assist very young children and must exercise extreme caution.",
            "The castle must not be used after dark unless adequate external lighting has been specifically agreed with us in writing prior to the hire.",
            "The castle must not be used for any commercial purpose, including charging admission, without our express prior written consent.",
            "Users with pre-existing medical conditions including but not limited to heart conditions, epilepsy, neck or back injuries, or recent surgery should not use the castle.",
            "Pregnant women must not use the castle under any circumstances.",
        ],
    },
    {
        id: "damage",
        title: "6. Damage, Loss & Cleanliness",
        body: [
            "The hirer accepts full responsibility for the equipment from the point of delivery to the point of collection.",
            "The hirer is responsible for any damage to the equipment caused during the hire period beyond normal fair wear and tear.",
            "Damage caused by negligence, deliberate misuse, or failure to follow safety guidelines will be charged to the hirer at our actual cost of repair or full replacement value, whichever is applicable.",
            "If the castle is returned in an excessively dirty condition, a cleaning surcharge of between £25 and £150 may be applied depending on the extent of cleaning required.",
            "Equipment must not be moved from the agreed setup location without our prior written consent.",
            "The hirer is liable for any theft or loss of the equipment, including the blower unit, during the hire period.",
            "We will inspect all equipment at the point of collection. Any damage identified will be logged and the hirer notified. We reserve the right to invoice for repair or replacement costs within 30 days of the hire date.",
            "We strongly recommend that hirers photograph the setup area and equipment at the time of delivery and collection for their own records.",
        ],
    },
    {
        id: "insurance",
        title: "7. Insurance & Liability",
        body: [
            "We hold full Public Liability Insurance up to £5 million per occurrence. A copy of our current insurance certificate is available on request prior to your booking.",
            "Our insurance covers incidents arising from equipment defects or our own negligence during delivery and setup. It does not cover incidents arising from failure to follow these Terms and Conditions or the safety guidelines provided.",
            "We accept no liability for any injury, loss, or damage arising from: failure to supervise the castle adequately; failure to follow safety rules; use of the equipment by persons for whom it is not intended; or use of the equipment in unsafe weather conditions.",
            "We accept no liability for any consequential loss, including but not limited to loss of enjoyment, costs of alternative entertainment, or cancellation of associated events.",
            "Our total liability to the hirer in any circumstances shall not exceed the total hire fee paid.",
            "Nothing in these Terms and Conditions shall limit or exclude our liability for death or personal injury caused by our negligence, or any other liability that cannot be excluded by applicable law.",
            "The hirer is advised to consider their own personal liability insurance or event insurance for additional peace of mind.",
        ],
    },
    {
        id: "privacy",
        title: "8. Privacy & Data",
        body: [
            "We collect personal information (name, address, phone number, email) solely for the purpose of fulfilling your hire booking and communicating with you about your booking.",
            "We will never sell, share, or pass your personal data to third parties for marketing purposes.",
            "By making a booking you consent to us retaining your contact details for the purpose of sending booking confirmations, reminders, and follow-up communications related to your hire.",
            "You have the right to request that we delete your personal data at any time by emailing hello@bouncycastle.co.uk. We will comply within 30 days except where retention is required for legal or accounting purposes.",
            "We may take photographs or videos at events for marketing purposes only with the express prior consent of the hirer. We will always ask before taking any photos.",
            "Our full Privacy Policy is available on request and sets out in detail how we collect, store, and process your personal data in compliance with the UK GDPR.",
        ],
    },
    {
        id: "complaints",
        title: "9. Complaints & Disputes",
        body: [
            "We are committed to providing an excellent service and take all feedback seriously. If you are dissatisfied with any aspect of our service or equipment, we want to hear from you.",
            "Complaints regarding equipment condition or safety must be raised with the delivery team at the point of setup.",
            "All other complaints must be submitted in writing to hello@bouncycastle.co.uk within 48 hours of the collection of equipment.",
            "We will acknowledge all written complaints within 2 working days and aim to provide a full response within 7 working days.",
            "Where a complaint is upheld, we may offer a partial or full refund, a discount on a future booking, or other appropriate remedy at our discretion.",
            "In the event of a dispute that cannot be resolved directly, the parties agree to attempt to resolve the matter through mediation before pursuing legal proceedings.",
            "We reserve the right to refuse future bookings from any customer who engages in abusive, threatening, or unreasonable behaviour towards our staff.",
        ],
    },
    {
        id: "general",
        title: "10. General",
        body: [
            "These Terms and Conditions constitute the entire agreement between the hirer and us in relation to the hire of equipment and supersede any prior agreements or representations.",
            "We reserve the right to update or amend these Terms and Conditions at any time. The version applicable to your booking will be the version in force at the date of your booking confirmation.",
            "If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
            "These Terms and Conditions are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
            "Bouncy Castle Hire is a family-run business based in Surrey, UK. Contact: hello@bouncycastle.co.uk | 07700 900 123.",
        ],
    },
];

const TermsPage = () => {
    const [activeId, setActiveId] = useState("booking");

    useEffect(() => {
        const observers = [];

        clauses.forEach(({ id }) => {
            const el = document.getElementById(`term-${id}`);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(id);
                },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`term-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-400/20 rounded-full translate-y-1/2" />
                {/* Yellow accent blob */}
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-pink-300/30 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-white" />
                        Legal
                    </span>
                    </div>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none">
                        Terms & <br />
                        <span className="text-pink-300">Conditions.</span>
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl leading-relaxed">
                    Please read these terms carefully before making a booking. By confirming a hire with us, you agree to be bound by the following conditions in full.
                    </p>
                <p className="text-xs text-gray-300">Last updated: January 2025 · Bouncy Castle Hire, Surrey, UK</p>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-5xl mx-auto px-8 py-16">
                <div className="flex gap-12 items-start">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-5 min-w-0">

                        {/* Summary box */}
                        <div className="bg-pink-50 border border-pink-100 rounded-2xl p-6 flex gap-4">
                            <span className="text-2xl flex-shrink-0">📋</span>
                            <div>
                                <p className="font-bold text-pink-800 text-sm mb-1">The Short Version</p>
                                <p className="text-pink-700 text-sm leading-relaxed">
                                    Be safe, supervise the kids, pay on time, treat the equipment with care, and let us know if anything goes wrong. We're a family business and we'll always try to do right by you — we just ask the same in return.
                                </p>
                            </div>
                        </div>

                        {/* Clauses */}
                        {clauses.map((clause) => (
                            <div
                                key={clause.id}
                                id={`term-${clause.id}`}
                                className="bg-white rounded-3xl border border-gray-100 p-7 flex flex-col gap-4 scroll-mt-8"
                            >
                                <h2 className="font-extrabold text-gray-900 text-base">{clause.title}</h2>
                                <ul className="flex flex-col gap-3">
                                    {clause.body.map((point, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0 mt-2" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Footer note */}
                        <div className="bg-gray-100 rounded-2xl p-5 text-center flex flex-col gap-2">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">Questions about these terms?</p>
                            <p className="text-gray-400 text-xs">
                                Email us at <strong className="text-gray-500">hello@bouncycastle.co.uk</strong> or call <strong className="text-gray-500">07700 900 123</strong> and we'll be happy to help.
                            </p>
                        </div>
                    </div>

                    {/* Sticky right nav */}
                    <aside className="hidden lg:flex flex-col gap-1 sticky top-20 w-52 flex-shrink-0">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">On this page</p>
                        {clauses.map(({ id, title }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`text-left text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2.5 group w-full
                                        ${isActive
                                            ? "bg-pink-50 text-pink-500"
                                            : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    <span className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${isActive ? "bg-pink-500" : "bg-gray-200 group-hover:bg-gray-300"}`} />
                                    {title.replace(/^\d+\.\s/, "")}
                                </button>
                            );
                        })}
                    </aside>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsPage;