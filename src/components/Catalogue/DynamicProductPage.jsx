import { useParams } from "react-router"
import { useState } from "react";
import { castles } from "../../api/Products"
import { Baby, Users, ChevronLeft, ChevronRight, Check, X, Truck, Calendar, Shield, Star, MapPin, Clock, Phone, ChevronDown, Moon, MessageCircle, Mail, AlertTriangle } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ImageGallery from "./ImageGallery";
import { Highlighter } from "../ui/highlighter";
import { emailBooking } from "../../api/EmailBooking";


const DynamicProductPage = () => {

    const faqs = [
        {
          q: "What space do I need?",
          a: "You'll need at least 5m × 5m of flat, clear outdoor space (or a large indoor room). We'll confirm suitability when you book.",
        },
        {
          q: "What if it rains?",
          a: "Our castles are safe in light rain. We'll contact you if severe weather is forecast and offer a free reschedule or full refund.",
        },
        {
          q: "How far in advance should I book?",
          a: "We recommend at least 2 weeks ahead, especially for weekends during summer. Last-minute bookings are sometimes possible — just call us.",
        },
        {
          q: "Is there a deposit?",
          a: "Yes, a 20% deposit secures your date. The remainder is due 48 hours before your hire.",
        },
      ];

      const howToBook = [
        "Browse our castles and decide which one is right for you and whether you'd like to keep it overnight.",
        "Get in touch via WhatsApp, phone, email, or Instagram with your preferred date and castle.",
        "We'll check availability and confirm your booking, usually within a few hours.",
        "We'll take a few details: your address, event info, and a small deposit to secure the date. The remaining balance is paid in cash on delivery.",
        "On the day, we'll arrive early to set everything up professionally and walk you through the safety guidelines before we leave.",
      ];

    const [overnight, setOvernight] = useState(false);

    const { id } = useParams();

    const castle = castles.find((castle) => castle.id === Number(id))

    if (!castle) {
        return <div className="p-10 text-center">Product not found.</div>;
      }

    // Parse base price for overnight calc (strip "From £" etc.)
    const basePrice = castle.price;
    const overnightSuffix = overnight ? " + £30 overnight" : "";

    return (
        <>
        <Navbar />
    <div className="min-h-screen font-sans">
      {/* Breadcrumb */}
      <div className="px-8 pt-6 pb-0">
        <div className="max-w-7xl mx-auto">
          <nav className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
            <a href="/" className="hover:text-pink-500 transition">Home</a>
            <span>/</span>
            <a href="/bouncy-castles" className="hover:text-pink-500 transition">Castles</a>
            <span>/</span>
            <span className="text-gray-600">{castle.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

            <div>
            {/* LEFT — Images */}
            <ImageGallery images={castle.images} />

            <div className="bg-white flex flex-col gap-5 mt-6">
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-3 text-base">How do I book?</h3>
                    <ul className="flex flex-col gap-2">
                      {howToBook?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <p className="text-pink-500 items-center flex align-middle">{i + 1}</p>
                          </span>
                          {item}
                        </li>
                      ))}
                       <li className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <p className="text-pink-500 items-center flex align-middle">6</p>
                          </span>
                          <p className="text-sm text-gray-600">Click <span onClick={() => document.getElementById('booking').scrollIntoView({ behavior:'smooth', block:'start' })} className="text-pink-500 font-bold cursor-pointer underline hover:text-pink-600 transition-colors">here</span> to get started </p>
                        </li>
                    </ul>
                  </div>
                </div>
                </div>

            {/* RIGHT — Info */}
            <div className="flex flex-col gap-8">

              {/* Title block */}
              <div className="flex justify-between items-center gap-3">
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {castle.name}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                    <span onClick={() => document.getElementById('booking').scrollIntoView({ behavior:'smooth', block:'start' })} className={`bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 hover:bg-pink-600 transition-colors cursor-pointer`}>
                      <MessageCircle className="w-3" />
                      Book Now
                    </span>
                </div>
              </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{castle.longDescription}</p>

              {/* ── Pricing Card ── */}
              <div className="bg-white rounded-3xl border border-gray-100 p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-gray-900">
                        <Highlighter animationDuration={3000} isView iterations={8} action="underline" color="#EC4899">{basePrice}</Highlighter>
                        </span>
                      {overnight && (
                        <span className="text-sm font-bold text-pink-400">+ £30 overnight</span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium text-right leading-relaxed">Includes delivery,<br/>setup & collection</span>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Overnight toggle */}
                <button
                  onClick={() => setOvernight(!overnight)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl border-2 transition-all duration-200 ${
                    overnight
                      ? "border-pink-300 bg-pink-50"
                      : "border-gray-100 hover:border-pink-200 hover:bg-pink-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${overnight ? "bg-pink-200" : "bg-gray-100"}`}>
                      <Moon className={`w-4 h-4 ${overnight ? "text-pink-600" : "text-gray-400"}`} />
                    </div>
                    <div className="text-left">
                      <p className={`font-bold text-sm ${overnight ? "text-pink-600" : "text-gray-700"}`}>Overnight hire</p>
                      <p className="text-xs text-gray-400">Collected next morning — +£30</p>
                    </div>
                  </div>
                  {/* Toggle pill */}
                  <div className={`w-10 h-6 rounded-full transition-colors duration-200 flex items-center px-1 ${overnight ? "bg-pink-400" : "bg-gray-200"}`}>
                    <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${overnight ? "translate-x-4" : "translate-x-0"}`} />
                  </div>
                </button>
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Baby className="w-4 h-4" />, label: "Age Range", value: castle.age },
                  { icon: <Users className="w-4 h-4" />, label: "Capacity", value: castle.capacity },
                  { icon: <MapPin className="w-4 h-4" />, label: "Dimensions", value: castle.dimensions },
                  { icon: <Clock className="w-4 h-4" />, label: "Setup Time", value: castle.setupTime || "~30 minutes" },
                ].map((spec, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-start gap-3">
                    <span className="text-pink-400 mt-0.5">{spec.icon}</span>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">{spec.label}</p>
                      <p className="text-sm font-bold text-gray-800">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's included / not suitable */}
              <div className="bg-white flex flex-col gap-5">
                {castle.suitableFor?.length > 0 && (
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-3 text-base">Suitable For</h3>
                    <ul className="flex flex-col gap-2">
                      {castle.suitableFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-pink-500" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {castle.notSuitableFor?.length > 0 && (
                  <div>
                    <h3 className="font-extrabold text-gray-900 mb-3 text-base">Not Suitable For</h3>
                    <ul className="flex flex-col gap-2">
                      {castle.notSuitableFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                          <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-3 h-3 text-gray-400" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* ── Safety Warning ── */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-amber-800 text-sm mb-1.5">Safety Guidelines</h3>
                  <ul className="flex flex-col gap-1.5">
                    {[
                      "Always ensure adult supervision when the castle is in use.",
                      "Remove shoes, glasses, and sharp objects before entering.",
                      "Do not exceed the maximum user capacity at any time.",
                      "Do not use in winds exceeding 24mph — deflate immediately.",
                      "Keep off wet or sloped surfaces where possible.",
                    ].map((rule, i) => (
                        <>
                      <li key={i} className="text-xs text-amber-700 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                        {rule}
                      </li>
                      </>
                    ))}
                    <li className="text-xs text-amber-700 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                        <span>Read our risk assessment <span onClick={() => window.open('/risk-assessments')} className="underline font-bold cursor-pointer">here</span></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery info */}
              <div className="bg-pink-50 rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-sm mb-1">Delivery & Collection</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Free delivery within <span className="font-semibold text-gray-700">10 miles</span>. Beyond that, we charge £1.50/mile. We'll arrive 30–60 minutes before your start time to set up, and collect within 1 hour of your end time. Exact slots confirmed 48 hrs before.
                  </p>
                </div>
              </div>

              {/* ── Contact / Booking ── */}
              <div id="booking" className="bg-white flex flex-col gap-4">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base mb-1">Ready to Book?</h3>
                  <p className="text-sm text-gray-400">
                    All bookings are handled directly — just reach out via any of the options below and we'll sort everything for you.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/447700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">WhatsApp Us</p>
                      <p className="text-xs text-gray-400">Fastest response — chat with us directly</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-green-500 bg-green-100 px-2 py-1 rounded-full">Fastest</span>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+447700000000"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-pink-300 hover:bg-pink-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                      <Phone className="w-5 h-5 text-pink-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Call Us</p>
                      <p className="text-xs text-gray-400">07700 000 000 — Mon to Sun, 8am–8pm</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={emailBooking(castle)}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-800">Email Us</p>
                      <p className="text-xs text-gray-400">hello@yourcastle.co.uk — we reply within 24hrs</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="font-extrabold text-gray-900 mb-4 text-base">Frequently Asked Questions</h3>
                <div className="flex flex-col gap-2">
                    <FAQItem faqs={faqs} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div> 

    <section className="px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
              <span className="w-6 h-px bg-pink-400 inline-block" />
              Reviews
              <span className="w-6 h-px bg-pink-400 inline-block" />
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900">What Parents Are Saying</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Manchester",
                review: "Absolutely brilliant service from start to finish. The castle was spotless, set up quickly, and the kids were obsessed with it all afternoon. Will definitely be booking again!",
                rating: 5,
                event: "Birthday Party",
              },
              {
                name: "James T.",
                location: "Salford",
                review: "Really easy to book via WhatsApp, they were super responsive. Turned up on time, had everything sorted within 30 minutes. Great value for money.",
                rating: 5,
                event: "Garden Party",
              },
              {
                name: "Laura K.",
                location: "Stockport",
                review: "We hired the princess castle for my daughter's 5th birthday and it was the highlight of the whole party. The team were friendly, professional, and nothing was too much trouble.",
                rating: 5,
                event: "Birthday Party",
              },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">"{review.review}"</p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="font-extrabold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                  <span className="text-xs font-bold text-pink-500 bg-pink-50 px-2.5 py-1 rounded-full">
                    {review.event}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="px-8 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-2 mb-10">
            <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
              <span className="w-6 h-px bg-pink-400 inline-block" />
              You Might Also Like
              <span className="w-6 h-px bg-pink-400 inline-block" />
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900">More Castles to Explore</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {castles
              .filter((c) => c.id !== castle.id)
              .slice(0, 3)
              .map((c, i) => (
                <a
                  key={i}
                  href={`/bouncy-castle/${c.id}`}
                  className="bg-white rounded-3xl p-6 flex flex-col gap-4 border border-gray-100 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all duration-300 group"
                >
                  {/* Emoji */}
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                    {c.emoji}
                  </div>

                  {/* Name + tag */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-extrabold text-gray-900 text-lg">{c.name}</h3>
                    {c.tag && (
                      <span className={`${c.tagColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                        {c.tag}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{c.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-400 pt-2 border-t border-gray-100">
                    <span className="flex items-center gap-2"><Baby className="w-4 h-4" /> {c.age}</span>
                    <span className="w-px h-3 bg-gray-200" />
                    <span className="flex items-center gap-2"><Users className="w-4 h-4" /> {c.capacity}</span>
                    <span className="ml-auto font-bold text-gray-700">{c.price}</span>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>


    <Footer />
     </>
    )
}

export default DynamicProductPage


function FAQItem({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>

                {/* Accordion */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen ? "border-pink-300 shadow-md shadow-pink-50" : "border-gray-100 hover:border-pink-200"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                                >
                                    <span className={`font-bold text-sm md:text-base transition-colors duration-200 ${isOpen ? "text-pink-500" : "text-gray-900"}`}>
                                        {faq.q}
                                    </span>
                                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
                                        isOpen ? "bg-pink-500 text-white rotate-45" : "bg-gray-100 text-gray-400"
                                    }`}>
                                        +
                                    </span>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                </>
  );
}