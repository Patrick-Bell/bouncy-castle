import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { Phone, Mail, MessageCircle, Clock, Truck, MapPin, Instagram, CheckCircle } from "lucide-react"
import {
    Map,
    MapCircle,
    MapFullscreenControl,
    MapLocateControl,
    MapMarker,
    MapPopup,
    MapSearchControl,
    MapTileLayer,
    MapZoomControl,
} from "@/components/ui/map"

// ── Delivery postcodes — swap these for your real ones ──
const postcodeAreas = [
  { area: "Manchester City Centre", codes: ["M1", "M2", "M3", "M4"] },
  { area: "Salford", codes: ["M5", "M6", "M7", "M50"] },
  { area: "Stretford & Trafford", codes: ["M16", "M17", "M32"] },
  { area: "Didsbury & Withington", codes: ["M14", "M20"] },
  { area: "Stockport", codes: ["SK1", "SK2", "SK3", "SK4"] },
  { area: "Urmston & Eccles", codes: ["M41", "M30"] },
]

const openingHours = [
  { day: "Monday – Friday", hours: "8:00am – 7:00pm" },
  { day: "Saturday", hours: "7:00am – 8:00pm" },
  { day: "Sunday", hours: "8:00am – 6:00pm" },
]

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3 mb-14">
            <span className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm tracking-widest uppercase">
              <span className="w-6 h-px bg-pink-400 inline-block" />
              Get in Touch
              <span className="w-6 h-px bg-pink-400 inline-block" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Contact <span className="text-pink-500">Us</span>
            </h2>
            <p className="text-gray-400 text-base max-w-md">
              All bookings are handled directly — reach out via any of the methods below and we'll get back to you quickly.
            </p>
          </div>

          {/* Top grid — Contact + Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* Contact Methods */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col gap-5">
              <h3 className="font-extrabold text-gray-900 text-lg">Reach Us On</h3>

              <div className="flex flex-col gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/447700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-800">WhatsApp</p>
                    <p className="text-xs text-gray-400">07700 000 000</p>
                  </div>
                  <span className="text-xs font-bold text-green-500 bg-green-100 px-2.5 py-1 rounded-full">Fastest</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+447700000000"
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-pink-300 hover:bg-pink-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                    <Phone className="w-5 h-5 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-800">Phone</p>
                    <p className="text-xs text-gray-400">07700 000 000</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@yourcastle.co.uk"
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-800">Email</p>
                    <p className="text-xs text-gray-400">hello@yourcastle.co.uk</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-fuchsia-300 hover:bg-fuchsia-50 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-100 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-200 transition-colors">
                    <Instagram className="w-5 h-5 text-fuchsia-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-800">Instagram</p>
                    <p className="text-xs text-gray-400">@yourhandle</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg">Opening Hours</h3>
              </div>

              <div className="flex flex-col gap-3">
                {openingHours.map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-semibold text-gray-700">{row.day}</span>
                    <span className="text-sm font-bold text-pink-500">{row.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-pink-50 rounded-2xl p-4 mt-auto">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <span className="font-bold text-gray-700">Same-day enquiries welcome</span> — we'll always do our best to accommodate last-minute bookings if we have availability.
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Info Banner */}
          <div className="bg-pink-50 rounded-3xl p-7 flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-pink-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-extrabold text-gray-900 mb-1">Delivery & Collection</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We offer <span className="font-semibold text-gray-700">free delivery within 10 miles</span> of our base. Beyond that, we charge £1.50 per mile. We arrive 30–60 minutes before your start time to set up and collect within 1 hour of your end time. Delivery slots are confirmed 48 hours before your hire date.
              </p>
            </div>
            <div className="flex-shrink-0 text-center bg-white rounded-2xl px-5 py-3 border border-pink-100">
              <p className="text-2xl font-extrabold text-pink-500">10mi</p>
              <p className="text-xs text-gray-400 font-semibold">free delivery</p>
            </div>
          </div>

          {/* Delivery Area & Postcodes */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-lg">Delivery Areas</h3>
                <p className="text-xs text-gray-400">We currently cover the following postcodes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {postcodeAreas.map((area, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <p className="font-bold text-sm text-gray-800">{area.area}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.codes.map((code, j) => (
                      <span key={j} className="text-xs font-bold bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-lg">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              Don't see your postcode? <a href="https://wa.me/447700000000" className="text-pink-500 font-semibold hover:underline">Message us</a> — we may still be able to help depending on availability.
            </p>
          </div>

    <div className="mt-8">
    <Map center={[51.3566, 0.3082]}>
    <MapTileLayer />
    <MapZoomControl />
    <MapCircle center={[51.3566, 0.3082]} radius={1000} />
    <MapFullscreenControl />
    <MapLocateControl />
    <MapMarker position={[43.6532, -79.3832]}>
        <MapPopup>A map component for shadcn/ui.</MapPopup>
    </MapMarker>
    </Map>
    </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact