import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const categories = [
    {
        id: "booking",
        icon: "📅",
        label: "Booking",
        questions: [
            { q: "How do I make a booking?", a: "Easy! You can book via our website enquiry form, by calling us on 07700 900 123, or by dropping us an email at hello@bouncycastle.co.uk. Once we confirm availability we'll send over a booking confirmation and deposit details. Simple as that! 🎉" },
            { q: "How far in advance should I book?", a: "We always say the sooner the better — especially for summer weekends and school holidays which can book up months in advance! As a rule of thumb, 2–3 weeks notice is great, but we'll always do our best to squeeze in last-minute enquiries too. Just give us a ring!" },
            { q: "Do I need to pay a deposit?", a: "Yes — a small deposit secures your date. Until it's paid, the slot stays open to others (and we'd hate for you to miss out!). The remaining balance is just due on the day before we set up. Easy peasy." },
            { q: "What payment methods do you accept?", a: "We take bank transfer, cash, or card. Bank transfer is our favourite but we're flexible. Just note that the full balance needs to be sorted before we start setting up on the day." },
            { q: "Can I book more than one castle?", a: "Absolutely — go big! We regularly deliver 2 or more castles to school fairs, community events, and mega birthday bashes. Mention it in your enquiry and we'll sort a multi-hire quote for you." },
            { q: "Can I change my castle after booking?", a: "Of course! Life happens. Get in touch as soon as you can and we'll swap you over to another castle subject to availability — usually at no extra charge." },
            { q: "Do you take weekday bookings?", a: "Every single day of the week! Weekdays can even work out a little cheaper. Perfect for school holiday parties when the kids are going absolutely feral at home 😄" },
            { q: "Is there a minimum hire period?", a: "We work in half-day and full-day slots rather than by the hour. Give us a call and we'll figure out the perfect arrangement for your event." },
        ],
    },
    {
        id: "delivery",
        icon: "🚚",
        label: "Delivery & Setup",
        questions: [
            { q: "What area do you cover?", a: "We cover Surrey and South London — think Guildford, Woking, Kingston, Wimbledon, Croydon, Sutton, Epsom, Reigate, and everywhere in between. Not sure if we reach you? Give us a shout and we'll check!" },
            { q: "Is delivery free?", a: "Delivery is free within 10 miles of our Surrey base. Beyond that there's a small charge which we'll always be upfront about when you enquire. No nasty surprises here!" },
            { q: "What time will you arrive?", a: "We'll agree a delivery window when you book — usually 1–2 hours before your event kicks off. We'll ping you closer to the date with a more specific time. Just make sure someone's in to let us through! 🏠" },
            { q: "How long does setup take?", a: "Most castles are up and bouncing within 20–40 minutes. We do everything — you just need to point us in the right direction and put the kettle on ☕" },
            { q: "What do I need to do before you arrive?", a: "Clear the area of any furniture, toys, and (importantly!) any pet mess. Make sure the ground is fairly flat and there's a mains power socket within 25 metres. That's genuinely it — we handle everything else." },
            { q: "Can you set up on a slope?", a: "A gentle slope is usually fine (up to around 10%) but anything steeper is a no-go for safety reasons. If you're not sure, just send us a photo of your garden and we'll give you an honest answer." },
            { q: "Can you set up indoors?", a: "Yes! Village halls, sports centres, function rooms, even large living rooms — we've done them all. We just need at least 14ft of ceiling clearance. Tell us the room dimensions and we'll sort the rest." },
            { q: "What about parking?", a: "We need to get our van reasonably close to unload. If you've got permit zones or a tricky narrow lane, just flag it in advance and we'll plan around it. We've got trolleys and can carry things a fair distance!" },
            { q: "What time do you collect?", a: "Collection is at the agreed time in your booking. Make sure the castle is free from little bouncers by then! Late collections (our fault excluded) may come with a small surcharge." },
        ],
    },
    {
        id: "safety",
        icon: "🛡️",
        label: "Safety",
        questions: [
            { q: "Are your castles safe?", a: "100%! Every single one of our castles is PIPA certified — that's the UK's gold standard for inflatable safety. They're inspected before and after every single hire. We genuinely wouldn't put a child on anything we weren't totally confident in." },
            { q: "Are you insured?", a: "Yes — fully insured with £5 million public liability cover. All documentation is available on request and provided to schools and public venues as standard." },
            { q: "Does an adult need to supervise?", a: "Yes, always — this is non-negotiable! A responsible adult (18+) must be actively watching the castle at all times. We know you're probably trying to enjoy the party too, but this one really matters for everyone's safety." },
            { q: "How many kids can be on at once?", a: "Each castle has its maximum capacity clearly labelled on the unit itself. It varies by castle size and we'll always remind you of the number at setup. Stick to it — overcrowding is where accidents happen!" },
            { q: "Can adults have a go?", a: "Look, we totally get the temptation 😄 Our castles are designed and certified for children though. Adults can briefly step on to help tiny ones, but no jumping! Some of our bigger units may work for adults — just ask us." },
            { q: "What should kids wear?", a: "Shoes off, glasses off, jewellery off. Socks on, loose clothes — and that's it. Easy! No sharp objects, no hair grips left in pockets, nothing that could catch or scratch." },
            { q: "Are your blowers electrically safe?", a: "Every blower is PAT tested annually by a qualified electrician. The blower needs to stay on and unobstructed the whole time — switching it off while kids are inside is dangerous and must be avoided." },
            { q: "What if a child gets hurt?", a: "First: switch off the blower so the castle deflates, and get all children off safely. Call 999 for anything serious. Then call us straight away on 07700 900 123 — we'll want to know and will help however we can." },
        ],
    },
    {
        id: "weather",
        icon: "🌤️",
        label: "Weather",
        questions: [
            { q: "What if it rains?", a: "A bit of rain? No problem — most of our castles have a rain cover for light showers. Heavy rain is a different story though (slippery surface = not safe), and we'd ask you to deflate in a downpour. Storms and lightning? Castle comes down, full stop." },
            { q: "What wind speed is too dangerous?", a: "Above 24mph is a no-go — that's the PIPA safety limit and we take it seriously. We check forecasts ahead of every hire and will be upfront with you if things look dodgy." },
            { q: "What if you have to cancel due to weather?", a: "If it's genuinely unsafe and we can't set up, you'll get a full refund including your deposit, or we'll reschedule to a date that works for you. We hate cancelling as much as you do!" },
            { q: "Can I cancel if the forecast looks bad?", a: "We'd always suggest calling us first before cancelling — we might be able to reschedule rather than losing your deposit. If you cancel and we've assessed conditions as safe, standard cancellation terms will apply." },
            { q: "Can we hire in winter?", a: "Absolutely! Cold doesn't stop us. Ice and snow might (slippery castles are no fun), but otherwise we're out all year round. Indoor winter hire is also brilliant — nice warm village hall, happy kids. 🎄" },
        ],
    },
    {
        id: "castles",
        icon: "🏰",
        label: "The Castles",
        questions: [
            { q: "How do I pick the right castle?", a: "Check out our Castles page for all the details — each listing shows dimensions, age ranges, and capacity. Still unsure? Give us a call! We love helping people pick the perfect one and we know our fleet inside out." },
            { q: "What sizes do you have?", a: "We've got compact units perfect for smaller gardens right up to giant combo castles for big events. Exact dimensions are on each product listing. Always measure your space first — we want it to fit!" },
            { q: "Do any have slides?", a: "Yes! Our combo units come with built-in slides and they are incredibly popular. They tend to get snapped up fast for peak weekends so don't hang around if you've got your eye on one 👀" },
            { q: "Are the castles clean?", a: "Spotless! Every castle is cleaned top to bottom after every single hire. We wouldn't have it any other way — especially with little ones crawling all over them. If you ever have a concern, just ask." },
            { q: "Do you have themed castles?", a: "We do! Princess castles, dinosaurs, space rockets, rainbows and more. Our full themed range is on the Castles page. There's usually something to match whatever vibe the birthday star is into 🦕🚀👑" },
        ],
    },
    {
        id: "events",
        icon: "🎉",
        label: "Events",
        questions: [
            { q: "What types of events do you do?", a: "Birthday parties, garden parties, school fairs, church fetes, nursery events, community days, charity fundraisers, corporate family days — you name it, we've probably done it. If you're throwing an event with kids, we want to be there!" },
            { q: "Can you supply castles for schools?", a: "Yes, and we do it all the time! We have full PIPA certification and £5 million public liability insurance, and can provide all the paperwork your school's risk assessment requires. Just ask." },
            { q: "Can you do large events with multiple castles?", a: "Absolutely — this is one of our favourite things to do. We'll get a fleet of castles out to your event and make it epic. Just get in touch with the details and we'll put a plan together." },
            { q: "Can you do corporate events?", a: "Yes! Family fun days and corporate events are a big part of what we do. We can supply all the insurance and safety documentation you need and we're used to working with event managers." },
            { q: "What about public events and fetes?", a: "For public events there may be extra paperwork required (public event risk assessments etc.) but we're very used to this. Contact us early and we'll make sure everything is in order well before the day." },
        ],
    },
    {
        id: "pricing",
        icon: "💷",
        label: "Pricing",
        questions: [
            { q: "How much does it cost?", a: "Prices depend on which castle, how long, and where you are. Head to our Castles page for indicative pricing or drop us a message for a tailored quote. We'll always be upfront — what you see is what you pay." },
            { q: "Are there any hidden charges?", a: "Nope, never. We hate that stuff. Delivery charges (if any) are stated upfront in your quote. The only extras that could ever come up are late collection fees or damage charges — and we'd only ever charge those if genuinely warranted." },
            { q: "Do you do discounts for multiple castles?", a: "Yes! If you're booking two or more castles we'll always work out a deal. Mention it when you enquire and we'll include a multi-hire price in your quote." },
            { q: "Are weekdays cheaper?", a: "Often, yes! Weekday availability is usually better and rates can be a little lower. Worth asking about if you have flexibility on your date." },
            { q: "What if the event runs over?", a: "We always try to be flexible on the day. If things run a little over and it doesn't affect our next booking we'll do our best to accommodate. Significant overruns may come with a small additional charge." },
        ],
    },
    {
        id: "cancellation",
        icon: "❌",
        label: "Cancellations",
        questions: [
            { q: "What's your cancellation policy?", a: "More than 14 days out — full deposit refund. 7–14 days — deposit kept. Under 7 days — up to 50% of the total fee. Under 48 hours — full fee may apply. Life happens though, so if it's a genuine emergency just give us a call and we'll always try to be human about it." },
            { q: "Can I reschedule instead?", a: "Yes please! Rescheduling is always our preference over cancelling. Give us at least 7 days' notice and we'll move your booking to a new date at no charge, subject to availability." },
            { q: "What if YOU have to cancel?", a: "We'll give you as much notice as humanly possible and offer a full reschedule or complete refund including the deposit. It almost never happens but if it does, we'll make it right." },
            { q: "How do I cancel?", a: "Just send us an email to hello@bouncycastle.co.uk. We need it in writing so there's no confusion. We'll confirm the cancellation and let you know if any charge applies." },
        ],
    },
];

const FAQPage = () => {
    const [openMap, setOpenMap] = useState({});
    const [activeCategory, setActiveCategory] = useState("booking");

    const toggle = (catId, qi) => {
        const key = `${catId}-${qi}`;
        setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    useEffect(() => {
        const observers = [];
        categories.forEach(({ id }) => {
            const el = document.getElementById(`faq-${id}`);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveCategory(id); },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`faq-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const totalQuestions = categories.reduce((sum, c) => sum + c.questions.length, 0);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero */}
            <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-400/20 rounded-full translate-y-1/2" />
                {/* Yellow accent blob */}
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-yellow-300/30 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl animate-bounce">🏰</span>
                        <span className="text-pink-200 font-bold text-sm tracking-widest uppercase">Got questions?</span>
                    </div>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none">
                        We've got<br />
                        <span className="text-yellow-300">all the answers.</span>
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl leading-relaxed">
                        From "how do I book?" to "what if it rains?" — we've answered everything we get asked. And if we haven't, just give us a ring!
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl">💬</span>
                            <div>
                                <p className="text-white font-extrabold text-lg leading-none">{totalQuestions}</p>
                                <p className="text-pink-200 text-xs">questions answered</p>
                            </div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl">📂</span>
                            <div>
                                <p className="text-white font-extrabold text-lg leading-none">{categories.length}</p>
                                <p className="text-pink-200 text-xs">categories</p>
                            </div>
                        </div>
                        <div className="bg-yellow-300/20 border border-yellow-300/30 rounded-2xl px-5 py-3 flex items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <p className="text-yellow-300 font-extrabold text-lg leading-none">Fast</p>
                                <p className="text-yellow-200 text-xs">reply guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky category pill bar */}
            <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
                <div className="max-w-5xl mx-auto px-8">
                    <div className="flex gap-2 py-3 overflow-x-auto">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200
                                        ${isActive
                                            ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                                            : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                                        }`}
                                >
                                    <span>{cat.icon}</span>
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="max-w-5xl mx-auto px-8 py-14">
                <div className="flex gap-12 items-start">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-14 min-w-0">
                        {categories.map((cat, catIndex) => (
                            <div key={cat.id} id={`faq-${cat.id}`} className="flex flex-col gap-3 scroll-mt-20">

                                {/* Category header — alternates between pink and yellow accent */}
                                <div className={`rounded-2xl px-6 py-5 flex items-center gap-4 mb-2 ${catIndex % 2 === 0 ? "bg-pink-500" : "bg-yellow-400"}`}>
                                    <span className="text-3xl">{cat.icon}</span>
                                    <div>
                                        <h2 className={`font-extrabold text-xl ${catIndex % 2 === 0 ? "text-white" : "text-gray-900"}`}>{cat.label}</h2>
                                        <p className={`text-xs ${catIndex % 2 === 0 ? "text-pink-200" : "text-yellow-700"}`}>{cat.questions.length} questions</p>
                                    </div>
                                </div>

                                {/* Questions */}
                                {cat.questions.map((item, qi) => {
                                    const key = `${cat.id}-${qi}`;
                                    const isOpen = !!openMap[key];
                                    return (
                                        <div
                                            key={qi}
                                            className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden
                                                ${isOpen ? "border-pink-300 shadow-md shadow-pink-50" : "border-gray-100 hover:border-pink-200"}`}
                                        >
                                            <button
                                                onClick={() => toggle(cat.id, qi)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                                            >
                                                <span className={`font-bold text-sm transition-colors duration-200 ${isOpen ? "text-pink-500" : "text-gray-800"}`}>
                                                    {item.q}
                                                </span>
                                                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                                                    ${isOpen ? "bg-pink-500 text-white rotate-45" : "bg-gray-100 text-gray-400"}`}>
                                                    +
                                                </span>
                                            </button>
                                            <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                        {/* CTA */}
                        <div className="relative overflow-hidden bg-gray-900 rounded-3xl p-8">
                            <div className="absolute -top-4 -right-4 text-9xl opacity-10">🏰</div>
                            <div className="relative flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-yellow-300 font-bold text-sm uppercase tracking-widest mb-2">Still scratching your head?</p>
                                    <h3 className="font-extrabold text-white text-2xl mb-2">Just ask Sarah or Mia directly.</h3>
                                    <p className="text-gray-400 text-sm">We're a family team — you'll always get a real person, not a bot. We love a good chat about castles.</p>
                                </div>
                                <div className="flex flex-col gap-2 flex-shrink-0">
                                    <a href="tel:07700900123" className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-pink-400 transition-colors">
                                        📞 07700 900 123
                                    </a>
                                    <a href="mailto:hello@bouncycastle.co.uk" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-extrabold text-sm px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors">
                                        ✉️ Email Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sticky right nav */}
                    <aside className="hidden lg:flex flex-col gap-1.5 sticky top-24 w-48 flex-shrink-0">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 px-2">Jump to</p>
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => scrollTo(cat.id)}
                                    className={`text-left text-xs px-3 py-2 rounded-xl font-bold transition-all duration-200 flex items-center gap-2.5 w-full
                                        ${isActive
                                            ? "bg-pink-500 text-white shadow-sm shadow-pink-200"
                                            : "text-gray-400 hover:bg-pink-50 hover:text-pink-500"
                                        }`}
                                >
                                    <span className="text-base leading-none">{cat.icon}</span>
                                    <span className="flex-1">{cat.label}</span>
                                    <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                                        {cat.questions.length}
                                    </span>
                                </button>
                            );
                        })}

                        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2 px-2">
                            <p className="text-xs font-bold text-gray-400">Need more help?</p>
                            <a href="tel:07700900123" className="text-xs font-extrabold text-pink-500 hover:text-pink-600 transition-colors">📞 07700 900 123</a>
                            <a href="mailto:hello@bouncycastle.co.uk" className="text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors break-all">✉️ hello@bouncycastle.co.uk</a>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FAQPage;